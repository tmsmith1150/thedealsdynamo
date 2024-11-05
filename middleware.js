export { default } from "next-auth/middleware"

export const config = { matcher: ['/welcome', '/profile', '/products', '/products/add', '/products/saved', '/messages'] }