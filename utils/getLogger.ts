import { Logger } from "tslog"

const logger = new Logger()
logger.settings.hideLogPositionForProduction = true
logger.settings.stylePrettyLogs = true

const getLogger = (name: string) => logger.getSubLogger({ name })

export default getLogger
