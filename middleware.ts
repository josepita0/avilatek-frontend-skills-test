import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Este middleware se ejecutará en cada solicitud
export function middleware(request: NextRequest) {
  // Obtener la ruta actual
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Si la ruta no es /info, redirigir a /info
  if (pathname !== '/info') {
    url.pathname = '/info';
    return NextResponse.redirect(url);
  }

  // Si ya estamos en /info, permitir que la solicitud continúe
  return NextResponse.next();
}

// Configurar el middleware para que se ejecute en todas las rutas excepto en algunos casos específicos
export const config = {
  // Matcher para todas las rutas
  matcher: [
    // Excluir archivos estáticos, API y rutas internas de Next.js
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
