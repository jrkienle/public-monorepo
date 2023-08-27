import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import RootLayout from './layout';

describe('Root Layout', () => {
  // This involves testing a RSC that needs the router, skipping for now
  it.skip('should display the provided children', () => {
    const MOCK_CHILDREN = 'Foo';
    render(<RootLayout>{MOCK_CHILDREN}</RootLayout>);

    screen.getByText(MOCK_CHILDREN);
  });
});
