import React from 'react';
import './CyberpunkButton.css'; // 引入样式文件

interface CyberpunkButtonProps {
  children: React.ReactNode; // 按钮内容
  tag?: string; // 按钮标签（如 "R25"）
  onClick?: () => void; // 点击事件回调
  disabled?: boolean; // 是否禁用
}

export const CyberpunkButton: React.FC<CyberpunkButtonProps> = ({
  children,
  tag = 'R25',
  onClick,
  disabled = false,
}) => {
  return (
    <><button
      className="cybr-btn"
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
      <span aria-hidden>_</span>
      <span aria-hidden className="cybr-btn__glitch">
        {children}_
      </span>
      <span aria-hidden className="cybr-btn__tag">
        {tag}
      </span>
    </button>
    {/* <button className='cybr-btn-two'>
      GLITCH
    </button> */}
</>
  );
};

export default CyberpunkButton;