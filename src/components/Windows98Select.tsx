
import React, { SelectHTMLAttributes } from 'react';

interface Windows98SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

const Windows98Select: React.FC<Windows98SelectProps> = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <select 
      className={`win98-inset px-2 py-1 appearance-none ${className}`} 
      {...props}
    >
      {children}
    </select>
  );
};

export default Windows98Select;
