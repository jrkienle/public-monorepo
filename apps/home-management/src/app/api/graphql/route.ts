import type { NextRequest } from 'next/server';
import { handler } from 'server/core';

export function GET(request: NextRequest) {
  return handler(request);
}

export function POST(request: NextRequest) {
  return handler(request);
}
