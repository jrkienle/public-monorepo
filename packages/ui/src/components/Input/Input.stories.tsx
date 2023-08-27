import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  args: {},
  argTypes: {
    inputRef: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Default Input',
    name: 'defaultInput',
  },
};

export const WithDescription: Story = {
  args: {
    description: 'This is a test description',
    label: 'Input with Description',
    name: 'withDescription',
  },
};

export const WithError: Story = {
  args: {
    errorMessage: 'This is a test error message',
    label: 'Input with Error',
    name: 'withError',
  },
};

export const WithDescriptionAndError: Story = {
  args: {
    errorMessage: 'This is a test error message',
    description: 'This is a test description',
    label: 'Input with Description and Error',
    name: 'withDescriptionAndError',
  },
};
