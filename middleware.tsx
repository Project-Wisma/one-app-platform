import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token'); // Check for auth token

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next(); // Allow access if authenticated
}

// Protect specific routes
export const config = {
  matcher: ['/dashboard', '/profile'], // Add more restricted pages
};
