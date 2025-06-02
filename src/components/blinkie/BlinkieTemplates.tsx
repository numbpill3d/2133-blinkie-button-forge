
import React from 'react';
import { BlinkieProps, BlinkieTemplates as BlinkieTemplatesType } from '../../types/blinkie';
import { getFontFamily, getAnimationClass, getRainbowStyle, getBorderStyle } from '../../utils/blinkieUtils';

interface BlinkieTemplatesProps {
  templates: BlinkieTemplatesType;
  onSelectTemplate: (templateName: string) => void;
}

const BlinkieTemplates: React.FC<BlinkieTemplatesProps> = ({ 
  templates, 
  onSelectTemplate 
}) => {
  const getTemplateStyles = (template: BlinkieProps): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      width: '150px',
      height: '20px',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: getFontFamily(template.font),
      imageRendering: 'pixelated' as const,
      WebkitImageRendering: 'pixelated',
      MozImageRendering: 'crisp-edges',
    };

    // Handle background (gradient, pattern, or solid color)
    if (template.background) {
      if (template.background.startsWith('linear-gradient') || 
          template.background.startsWith('url(')) {
        baseStyles.background = template.background;
      } else {
        baseStyles.backgroundColor = template.background;
      }
    }

    // Handle backgroundImage if specified
    if (template.backgroundImage) {
      baseStyles.backgroundImage = template.backgroundImage;
      baseStyles.backgroundSize = 'cover';
      baseStyles.backgroundRepeat = 'repeat';
    }

    // Handle text color and rainbow effect
    if (template.textColor === 'rainbow') {
      const rainbowStyles = getRainbowStyle(template.textColor);
      Object.assign(baseStyles, rainbowStyles);
    } else {
      baseStyles.color = template.textColor;
    }

    // Handle border
    const borderStyles = getBorderStyle(template);
    Object.assign(baseStyles, borderStyles);

    // Handle animation
    if (template.isAnimated) {
      const animationValue = getAnimationClass(template);
      if (animationValue && animationValue !== 'none') {
        baseStyles.animation = animationValue;
      }
    }

    return baseStyles;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-1">
      {Object.entries(templates).map(([key, template]) => (
        <div 
          key={key}
          className="flex flex-col items-center cursor-pointer hover:bg-gray-200 p-2 border border-gray-300 rounded-md"
          onClick={() => onSelectTemplate(key)}
        >
          <div 
            className="mb-1 pixel-perfect"
            style={getTemplateStyles(template)}
          >
            {template.text}
          </div>
          <span className="text-[10px] text-gray-600 mt-1">{key}</span>
        </div>
      ))}
    </div>
  );
};

export default BlinkieTemplates;
