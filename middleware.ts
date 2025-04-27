import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Este middleware se ejecutará en cada solicitud
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  if (pathname !== '/info') {
    url.pathname = '/info';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
