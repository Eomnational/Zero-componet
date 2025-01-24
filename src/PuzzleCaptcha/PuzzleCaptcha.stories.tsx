import { Meta, StoryObj } from '@storybook/react';
import { PuzzleCaptcha } from './PuzzleCaptcha';

const meta: Meta<typeof PuzzleCaptcha> = {
  title: 'Components/PuzzleCaptcha',
  component: PuzzleCaptcha,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select', options: ['light', 'dark'] },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PuzzleCaptcha>;

export const Default: Story = {
  args: {
    onSuccess: () => alert('验证成功！'),
    onFail: () => alert('验证失败，请重试！'),
  },
};

export const DarkTheme: Story = {
  args: {
    theme: 'dark',
    onSuccess: () => alert('验证成功！'),
    onFail: () => alert('验证失败，请重试！'),
  },
};