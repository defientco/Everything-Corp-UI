/* eslint-disable class-methods-use-this */
import { createHandler, Get, Query } from "next-api-decorators"

const getResponse = async (responseId) => {
  const headers = {
    Authorization: `Bearer ${process.env.TF_TOKEN_READ_RESPONSES}`,
  }
  const url = `https://api.typeform.com/forms/${process.env.NEXT_PUBLIC_TYPEFORM_ID}/responses`
  return fetch(`${url}?included_response_ids=${responseId}`, { headers })
}
const mapFormIdToTitle = (formFields) => {
  const fields = {}
  formFields.forEach((field) => {
    fields[field.id] = field.title
  })
  return fields
}
const getForm = async () => {
  const headers = {
    Authorization: `Bearer ${process.env.TF_TOKEN_READ_RESPONSES}`,
  }
  const url = `https://api.typeform.com/forms/${process.env.NEXT_PUBLIC_TYPEFORM_ID}`
  const form = await fetch(url, { headers })
  const formResult = await form.json()
  return mapFormIdToTitle(formResult.fields)
}

class TypeformResponseHandler {
  @Get()
  async getResponse(@Query("responseId") responseId: string) {
    const formFields = await getForm()
    console.log(formFields)
    const response = await getResponse(responseId)
    const data = await response.json()
    return data.items[0]
  }
}

export default createHandler(TypeformResponseHandler)
