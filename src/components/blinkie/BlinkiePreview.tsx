
import React from 'react';
import { BlinkieProps } from '../../types/blinkie';
import { getAnimationClass, getFontFamily, getRainbowStyle, getBorderStyle } from '../../utils/blinkieUtils';

interface BlinkiePreviewProps {
  blinkieOptions: BlinkieProps;
  previewRef?: React.RefObject<HTMLDivElement>;
}

const BlinkiePreview: React.FC<BlinkiePreviewProps> = ({ 
  blinkieOptions,
  previewRef
}) => {
  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties = {
      width: '150px',
      height: '20px',
      fontFamily: getFontFamily(blinkieOptions.font),
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      imageRendering: 'pixelated' as const,
    } as React.CSSProperties & { WebkitImageRendering?: string; MozImageRendering?: string };

    // Add vendor-specific properties
    (baseStyles as any).WebkitImageRendering = 'pixelated';
    (baseStyles as any).MozImageRendering = 'crisp-edges';

    // Handle background (gradient, pattern, or solid color)
    if (blinkieOptions.background) {
      if (blinkieOptions.background.startsWith('linear-gradient') || 
          blinkieOptions.background.startsWith('url(')) {
        baseStyles.background = blinkieOptions.background;
      } else {
        baseStyles.backgroundColor = blinkieOptions.background;
      }
    }

    // Handle text color and rainbow effect
    if (blinkieOptions.textColor === 'rainbow') {
      const rainbowStyles = getRainbowStyle(blinkieOptions.textColor);
      Object.assign(baseStyles, rainbowStyles);
    } else {
      baseStyles.color = blinkieOptions.textColor;
    }

    // Handle border
    const borderStyles = getBorderStyle(blinkieOptions);
    Object.assign(baseStyles, borderStyles);

    // Handle animation
    if (blinkieOptions.isAnimated) {
      const animationValue = getAnimationClass(blinkieOptions);
      if (animationValue && animationValue !== 'none') {
        baseStyles.animation = animationValue;
      }
    }

    return baseStyles;
  };

  return (
    <div
      ref={previewRef}
      style={getInlineStyles()}
      className="pixel-perfect"
    >
      {blinkieOptions.text}
    </div>
  );
};

export default BlinkiePreview;
