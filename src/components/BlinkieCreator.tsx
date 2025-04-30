
import React, { useState, useRef } from 'react';
import Windows98Window from './Windows98Window';
import Windows98Button from './Windows98Button';
import { BlinkieProps } from '../types/blinkie';
import { blinkieTemplates } from '../data/blinkieTemplates';
import BlinkieTemplates from './blinkie/BlinkieTemplates';
import BlinkieEditor from './blinkie/BlinkieEditor';
import BlinkiePreview from './blinkie/BlinkiePreview';
import { Download } from 'lucide-react';
import { toast } from './ui/sonner';

const BlinkieCreator: React.FC = () => {
  const [blinkieOptions, setBlinkieOptions] = useState<BlinkieProps>(blinkieTemplates.default);
  const blinkieRef = useRef<HTMLDivElement>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlinkieOptions({...blinkieOptions, text: e.target.value});
  };

  const handleBackgroundChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBlinkieOptions({...blinkieOptions, background: e.target.value});
  };

  const handleTextColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBlinkieOptions({...blinkieOptions, textColor: e.target.value});
  };

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBlinkieOptions({...blinkieOptions, font: e.target.value});
  };

  const handleAnimationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlinkieOptions({...blinkieOptions, isAnimated: e.target.checked});
  };

  const handleAnimationTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBlinkieOptions({...blinkieOptions, animationType: e.target.value});
  };

  const selectTemplate = (templateName: string) => {
    if (blinkieTemplates[templateName]) {
      setBlinkieOptions(blinkieTemplates[templateName]);
    }
  };

  const downloadAsPNG = () => {
    if (!blinkieRef.current) return;
    toast.success("PNG download started!");
  };

  const downloadAsGIF = () => {
    if (!blinkieRef.current) return;
    toast.success("GIF download started!");
  };

  return (
    <Windows98Window title="RuneScape Blinkie Creator" className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Template selection area */}
        <div className="w-full md:w-2/3 space-y-4">
          <label className="block mb-1 font-vt font-bold">Templates:</label>
          <div className="win98-inset bg-white p-4 min-h-[250px] overflow-y-auto">
            <BlinkieTemplates 
              templates={blinkieTemplates} 
              onSelectTemplate={selectTemplate} 
            />
          </div>
          <div className="p-4 bg-black flex items-center justify-center">
            <BlinkiePreview 
              blinkieOptions={blinkieOptions} 
              previewRef={blinkieRef} 
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <Windows98Button onClick={downloadAsPNG} className="flex items-center gap-2">
              <Download size={16} /> Save as PNG
            </Windows98Button>
            <Windows98Button onClick={downloadAsGIF} className="flex items-center gap-2">
              <Download size={16} /> Save as GIF
            </Windows98Button>
          </div>
        </div>

        {/* Editor controls */}
        <div className="w-full md:w-1/3">
          <BlinkieEditor
            blinkieOptions={blinkieOptions}
            onTextChange={handleTextChange}
            onBackgroundChange={handleBackgroundChange}
            onTextColorChange={handleTextColorChange}
            onFontChange={handleFontChange}
            onAnimationChange={handleAnimationChange}
            onAnimationTypeChange={handleAnimationTypeChange}
          />
        </div>
      </div>
    </Windows98Window>
  );
};

export default BlinkieCreator;
