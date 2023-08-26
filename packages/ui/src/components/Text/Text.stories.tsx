import type { Meta, StoryObj } from '@storybook/react';

import { lipsum } from 'utils/fakeData';
import Text from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  args: {
    children: lipsum,
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

export const HeadingXl: Story = {
  args: {
    size: 'heading-xl',
  },
};

export const HeadingLg: Story = {
  args: {
    size: 'heading-lg',
  },
};

export const HeadingMd: Story = {
  args: {
    size: 'heading-md',
  },
};

export const HeadingSm: Story = {
  args: {
    size: 'heading-sm',
  },
};

export const HeadingXs: Story = {
  args: {
    size: 'heading-xs',
  },
};

export const BodyLg: Story = {
  args: {
    size: 'body-lg',
  },
};

export const BodyMd: Story = {
  args: {
    size: 'body-md',
  },
};

export const BodySm: Story = {
  args: {
    size: 'body-sm',
  },
};
