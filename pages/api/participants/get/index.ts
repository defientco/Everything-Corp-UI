import { createHandler, Get } from "next-api-decorators"
import { ParticipantsAuthGuard } from "../../../../middleware/auth.middleware"
/* eslint-disable class-methods-use-this */
import { getAllParticipants } from "../../../../helpers/db"

class GetParticipants {
  @Get()
  @ParticipantsAuthGuard()
  async handle() {
    const participants = await getAllParticipants()
    return participants
  }
}

export default createHandler(GetParticipants)
