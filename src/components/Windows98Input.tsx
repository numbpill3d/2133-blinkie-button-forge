
import React, { InputHTMLAttributes } from 'react';

interface Windows98InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Windows98Input: React.FC<Windows98InputProps> = ({ 
  className = '', 
  ...props 
}) => {
  return (
    <input 
      className={`win98-inset px-2 py-1 ${className}`} 
      {...props} 
    />
  );
};

export default Windows98Input;
