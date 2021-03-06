import * as jwt from 'jsonwebtoken'

const getUserId = (request: any, requireAuth = true) => {
  const header = request.req
    ? request?.req?.headers?.authorization
    : request?.connection?.context?.Authorization

  if (header) {
    const token = header.replace('Bearer ', '')
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'DummyKey')
    return decoded.userId
  }

  if (requireAuth) {
    throw new Error('Authentication Required')
  }

  return null
}

export default getUserId
