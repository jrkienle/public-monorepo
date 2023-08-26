import { handler } from 'server/core';

export function GET(request: Request) {
  return handler(request);
}

export function POST(request: Request) {
  return handler(request);
}
