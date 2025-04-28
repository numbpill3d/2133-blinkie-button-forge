
import React, { ButtonHTMLAttributes } from 'react';

interface Windows98ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Windows98Button: React.FC<Windows98ButtonProps> = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={`win98-button ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Windows98Button;
