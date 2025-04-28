
import React, { ReactNode } from 'react';
import { X } from 'lucide-react';

interface Windows98WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Windows98Window: React.FC<Windows98WindowProps> = ({
  title,
  children,
  className = '',
}) => {
  return (
    <div className={`win98-window ${className}`}>
      <div className="win98-title-bar">
        <div>{title}</div>
        <button className="flex items-center justify-center w-5 h-5 bg-win98-button border border-win98-border-light border-r-win98-border-dark border-b-win98-border-dark">
          <X size={12} />
        </button>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
};

export default Windows98Window;
