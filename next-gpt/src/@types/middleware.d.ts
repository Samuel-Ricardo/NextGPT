export type Middleware = (
  req?: Request,
  res?: Response,
  next?: any,
  data?: any
) => Promise<{ break: boolean; result?: any }>
