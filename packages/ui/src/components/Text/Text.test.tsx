import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Text from './Text';

describe('Text', () => {
  it('should render children', () => {
    render(<Text>Foo</Text>);
    screen.getByText('Foo');
  });
});
