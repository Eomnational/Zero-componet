import { Meta, StoryObj } from '@storybook/react';
import { CyberpunkButton } from './CyberpunkButton';

const meta: Meta<typeof CyberpunkButton> = {
  title: 'Components/CyberpunkButton',
  component: CyberpunkButton,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CyberpunkButton>;

export const Default: Story = {
  args: {
    children: 'Cyber',
    tag: 'R25',
    onClick: () => alert('Button Clicked!'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    tag: 'R25',
    disabled: true,
  },
};