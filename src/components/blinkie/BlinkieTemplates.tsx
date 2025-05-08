
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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-1">
      {Object.entries(templates).map(([key, template]) => (
        <div 
          key={key}
          className="flex flex-col items-center cursor-pointer hover:bg-gray-200 p-2 border border-gray-300 rounded-md"
          onClick={() => onSelectTemplate(key)}
        >
          <div 
            className="w-[150px] h-[20px] mb-1 flex items-center justify-center pixel-perfect text-xs overflow-hidden"
            style={{
              backgroundColor: template.background,
              color: template.textColor !== 'rainbow' ? template.textColor : undefined,
              fontFamily: getFontFamily(template.font),
              animation: template.isAnimated ? 
                (template.animationType ? 
                  getAnimationClass(template) : 'blink 1s steps(1) infinite') 
                : 'none',
              ...getBorderStyle(template),
              ...(template.textColor === 'rainbow' ? getRainbowStyle(template.textColor) : {}),
              backgroundImage: template.backgroundImage,
              backgroundSize: 'cover',
              backgroundRepeat: 'repeat'
            }}
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
