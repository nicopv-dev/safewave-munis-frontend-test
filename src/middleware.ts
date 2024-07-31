import { auth } from "@/auth";
import { NextResponse } from "next/server";

const privateRoutes = ["/admin", "/admin/*"];
const authRoutes = ["/login"];

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  const url = req.nextUrl.clone();

  const isApiRoute = req.nextUrl.pathname.startsWith("/api");
  const isPrivateRoute = privateRoutes.includes(req.nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(req.nextUrl.pathname);

  // if (isApiRoute) return null;
  if (isPrivateRoute && !isLoggedIn) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (isAuthRoute && isLoggedIn) {
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
