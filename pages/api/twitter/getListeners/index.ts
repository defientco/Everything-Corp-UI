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
import getLogger from "../../../../utils/getLogger"

const log = getLogger("Get Listeners")
class GetListeners {
  @Get()
  async test() {
    log.info("Getting listeners")
    const docs = await getSpacesSchedule()
    if (docs.length === 0) {
      log.info("No Live spaces ongoing")
      return { message: "No Live spaces ongoing" }
    }
    const spaces = docs.map((doc) => doc.spaceId)
    if (spaces.length > 1) log.warn("More than one space is live")
    const spaceId = spaces[0]
    const spaceDocs = await getSpacesInfo(spaceId)
    const alreadyAdded = spaceDocs.map((doc) => doc.participants).flat()
    const space = await findSpaceById(spaces[0])
    const { state } = space.metadata
    if (state === "Ended") {
      log.info("Space is ended")
      log.info(`Updating space status to ended for space: ${spaceId}`)

      await updateSpacesStatus({ spaceId, status: "ended" })
    }
    if (state !== "Running") {
      log.info("Space is not live")
      log.info("Current state: ", state)
      return { message: "Space is not live" }
    }
    const listeners = space.participants.listeners.map((listener) => listener.user.rest_id)
    try {
      const result = await addToSpaces([
        {
          spaceId,
          participants: _.uniq([...listeners, ...alreadyAdded]),
        },
      ])
      return result
    } catch (e) {
      log.error(e)
      return e
    }
  }
}

export default createHandler(GetListeners)
