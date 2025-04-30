
import React from 'react';
import { BlinkieProps } from '../../types/blinkie';
import { getAnimationClass, getFontFamily, getRainbowStyle } from '../../utils/blinkieUtils';

interface BlinkiePreviewProps {
  blinkieOptions: BlinkieProps;
  previewRef?: React.RefObject<HTMLDivElement>;
}

const BlinkiePreview: React.FC<BlinkiePreviewProps> = ({ 
  blinkieOptions,
  previewRef
}) => {
  return (
    <div
      ref={previewRef}
      className="flex items-center justify-center pixel-perfect text-sm"
      style={{
        width: `150px`,
        height: `20px`,
        backgroundColor: blinkieOptions.background,
        color: blinkieOptions.textColor !== 'rainbow' ? blinkieOptions.textColor : undefined,
        fontFamily: getFontFamily(blinkieOptions.font),
        animation: getAnimationClass(blinkieOptions),
        border: '1px solid #333',
        ...(blinkieOptions.textColor === 'rainbow' ? getRainbowStyle(blinkieOptions.textColor) : {}),
      }}
    >
      {blinkieOptions.text}
    </div>
  );
};

export default BlinkiePreview;
