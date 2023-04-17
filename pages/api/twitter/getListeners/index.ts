/* eslint-disable class-methods-use-this */
import { createHandler, Get } from "next-api-decorators"
import { findSpaceById } from "twspaces"
import _ from "lodash"
import {
  addToSpaces,
  getSpacesInfo,
  getSpacesSchedule,
  updateSpacesStatus,
} from "../../../../helpers/twitter.db"

class GetListeners {
  @Get()
  async test() {
    const docs = await getSpacesSchedule()
    if (docs.length === 0) return { message: "No Live spaces ongoing" }
    const spaces = docs.map((doc) => doc.spaceId)
    const spaceId = spaces[0]
    const spaceDocs = await getSpacesInfo(spaceId)
    const alreadyAdded = spaceDocs.map((doc) => doc.participants).flat()
    const space = await findSpaceById(spaces[0])
    const { state } = space.metadata
    if (state === "Ended") {
      await updateSpacesStatus({ id: spaceId, status: "ended" })
    }
    if (state !== "Running") return { message: "Space is not live" }
    const listeners = space.participants.listeners.map((listener) => listener.user.rest_id)
    try {
      const result = await addToSpaces([
        {
          spaceID: spaceId,
          participants: _.uniq([...listeners, ...alreadyAdded]),
        },
      ])
      return result
    } catch (e) {
      return e
    }
  }
}

export default createHandler(GetListeners)
