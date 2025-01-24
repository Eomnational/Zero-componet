import { Meta, StoryObj } from '@storybook/react';
import BouncingBallLoader from './BouncingBallLoader';

const meta: Meta<typeof BouncingBallLoader> = {
  title: 'Components/BouncingBallLoader',
  component: BouncingBallLoader,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BouncingBallLoader>;

export const Default: Story = {};