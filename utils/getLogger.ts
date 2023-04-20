import { Logger } from "tslog"

const logger = new Logger()
logger.settings.hideLogPositionForProduction = true
logger.settings.stylePrettyLogs = true

const getLogger = (name: string, type: "json" | "pretty" | "hidden" = "json") =>
  logger.getSubLogger({ name, type })

export default getLogger
