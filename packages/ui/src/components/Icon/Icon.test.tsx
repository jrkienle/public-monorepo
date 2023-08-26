import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Icon from './Icon';

describe('Icon', () => {
  it('should have a test ID corresponding with the name of the icon', () => {
    render(<Icon icon="loading" />);
    screen.getByTestId('icon-loading');
  });
});
