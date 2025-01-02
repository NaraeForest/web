import {
  NextRequest,
  NextResponse,
} from "next/server";

const ACCESS_TOKEN = "access-token";
const REFRESH_TOKEN = "refresh-token";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const cookieStore = request.cookies;

  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
  if (accessToken != null) {
    return response;
  }

  const refreshToken = cookieStore.get(REFRESH_TOKEN)?.value;
  if (refreshToken == null) {
    return;
  }

  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Cookie": cookieStore.toString(),
    },
    method: "POST",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/reissue`, init);
  const json = await res.json();
  if (json.success) {
    const token: string = json.data.accessToken;
    const bytes = Uint8Array.from(atob(token.split(".")[1]), (char) => char.charCodeAt(0));
    const decoder = new TextDecoder('utf-8');
    const payload = JSON.parse(decoder.decode(bytes));
    if (payload["exp"] == null) {
      return;
    }
    const expiredAt = new Date(parseInt(payload["exp"], 10) * 1000);
    response.cookies.set(ACCESS_TOKEN, token, { httpOnly: true, expires: expiredAt, secure: process.env.NODE_ENV === "production" });
    return response;
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
