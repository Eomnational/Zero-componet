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
  cover: 'https://i1.hdslb.com/bfs/archive/50c1cf67c08e21d40c321787f4dc8a6f349a8a04.jpg', 
  audioUrl: 'https://example.com/audio.mp3',
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
