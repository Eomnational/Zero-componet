/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import './PuzzleCaptcha.css'; // 样式文件

interface PuzzleCaptchaProps {
  onSuccess?: () => void; // 验证成功回调
  onFail?: () => void; // 验证失败回调
  theme?: 'light' | 'dark'; // 主题
}

export const PuzzleCaptcha: React.FC<PuzzleCaptchaProps> = ({
  onSuccess,
  onFail,
  theme = 'light',
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 目标位置（假设为 80% 的位置）
  const targetPosition = 0.8;

  // 处理鼠标按下事件
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  // 处理鼠标移动事件
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current || isVerified) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const maxPosition = containerRect.width - (sliderRef.current?.offsetWidth || 0);

    // 限制滑块移动范围
    const newPosition = Math.max(0, Math.min(offsetX, maxPosition));
    setSliderPosition(newPosition);

    // 验证是否接近目标位置
    if (Math.abs(newPosition - maxPosition * targetPosition) < 10) {
      setSliderPosition(maxPosition * targetPosition); // 自动吸附到目标位置
      setIsVerified(true);
      onSuccess?.();
    }
  };

  // 处理鼠标松开事件
  const handleMouseUp = () => {
    setIsDragging(false);

    // 如果未验证成功，重置滑块位置
    if (!isVerified) {
      setSliderPosition(0);
      onFail?.();
    }
  };

  // 监听全局鼠标事件
  useEffect(() => {
    const handleMouseUpGlobal = () => {
      if (isDragging) {
        handleMouseUp();
      }
    };

    window.addEventListener('mouseup', handleMouseUpGlobal);
    return () => {
      window.removeEventListener('mouseup', handleMouseUpGlobal);
    };
  }, [isDragging]);

  return (
    <div
      className={`puzzle-captcha ${theme}`}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className="puzzle-track">
        <div
          className="puzzle-thumb"
          ref={sliderRef}
          style={{ left: sliderPosition }}
          onMouseDown={handleMouseDown}
        />
        <div
          className="puzzle-target"
          style={{ left: `${targetPosition * 100}%` }}
        />
      </div>
      <div className="puzzle-text">
        {isVerified ? '验证成功' : '请拖动拼图滑块完成验证'}
      </div>
    </div>
  );
};

export default PuzzleCaptcha;