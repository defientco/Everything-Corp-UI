import { NextApiRequest, NextApiResponse } from "next"
import {
  createMiddlewareDecorator,
  NextFunction,
  NotFoundException,
  UnauthorizedException,
} from "next-api-decorators"
import { db } from "../utils/db"

export const getApiKeys = async () => {
  const apiKeys = (await db.collection("auth").doc("apiKeys").get()).data()
  return apiKeys
}
export const AllowListAuthGuard = createMiddlewareDecorator(
  async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
    const { authorization } = req.headers

    if (!authorization) {
      throw new NotFoundException("Authorization header not found")
    }
    const [, token] = authorization.split(" ")
    const apiKeys = await getApiKeys()
    if (token !== apiKeys.allowList) {
      throw new UnauthorizedException("Invalid token")
    }
    next()
  },
)
