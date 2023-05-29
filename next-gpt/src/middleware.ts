import { withAuth } from "next-auth/middleware"
import { NextRequest, NextResponse } from "next/server"
//export {default} from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
})

// export default function middleware (req: NextRequest) {
//   return NextResponse.redirect(new URL("/login", req.url));
// }

export const config = {
  matcher: ["/"],
}
