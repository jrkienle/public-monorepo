import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Button from './Button';

describe('Button', () => {
  it('should execute the provided callback function on click', async () => {
    const user = userEvent.setup();
    const mockOnPress = vi.fn();

    render(<Button onPress={mockOnPress}>Test Button</Button>);
    await user.click(screen.getByRole('button', { name: 'Test Button' }));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
