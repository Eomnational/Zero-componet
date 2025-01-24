// src/components/MusicPlayer/MusicPlayer.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MusicPlayer } from './MusicPlayer';

const meta: Meta<typeof MusicPlayer> = {
  title: 'Components/MusicPlayer',
  component: MusicPlayer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MusicPlayer>;

const sampleTrack = {
  id: '1',
  title: '夜曲',
  artist: '周杰伦',
  cover: 'https://example.com/cover.jpg', // 替换为实际封面URL
  audioUrl: 'https://example.com/audio.mp3', // 替换为实际音频URL
};

export const Default: Story = {
  args: {
    track: sampleTrack,
    theme: 'light',
  },
};

export const DarkTheme: Story = {
  args: {
    track: sampleTrack,
    theme: 'dark',
  },
};
