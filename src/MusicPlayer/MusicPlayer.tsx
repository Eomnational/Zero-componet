// src/components/MusicPlayer/MusicPlayer.tsx
import React, { useState, useRef } from 'react';
import './MusicPlayer.css';

export interface Track {
  id: string;
  title: string;
  artist: string;
  cover: string;
  audioUrl: string;
}

interface MusicPlayerProps {
  track: Track;
  theme?: 'light' | 'dark';
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ 
  track,
  theme = 'light' 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const percentageClicked = clickPosition / progressBar.offsetWidth;
    if (audioRef.current) {
      audioRef.current.currentTime = percentageClicked * duration;
    }
  };

  return (
    <div className={`music-player ${theme}`}>
      <audio
        ref={audioRef}
        src={track.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      
      <div className="cover-art">
        <img src={track.cover} alt={track.title} />
      </div>

      <div className="track-info">
        <h3>{track.title}</h3>
        <p>{track.artist}</p>
      </div>

      <div className="controls">
        <button className="prev-button">
          <i className="fas fa-step-backward"></i>
        </button>
        
        <button className="play-button" onClick={togglePlay}>
          {isPlaying ? 
            <i className="fas fa-pause"></i> : 
            <i className="fas fa-play"></i>
          }
        </button>
        
        <button className="next-button">
          <i className="fas fa-step-forward"></i>
        </button>
      </div>

      <div className="progress-container">
        <span className="time">{formatTime(currentTime)}</span>
        <div className="progress-bar" onClick={handleProgressClick}>
          <div 
            className="progress" 
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <span className="time">{formatTime(duration)}</span>
      </div>
    </div>
  );
};
