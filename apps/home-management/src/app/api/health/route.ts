import { NextResponse } from 'next/server';

import pkgJson from '../../../../package.json';

export function GET() {
  return NextResponse.json({
    data: {
      api: {
        healthy: true,
        version: pkgJson.version,
      },
    },
  });
}
