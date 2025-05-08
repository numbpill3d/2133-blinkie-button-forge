import React, { useState, useRef } from 'react';
import Windows98Window from './Windows98Window';
import Windows98Button from './Windows98Button';
import { BlinkieProps } from '../types/blinkie';
import { blinkieTemplates } from '../data/blinkieTemplates';
import BlinkieTemplates from './blinkie/BlinkieTemplates';
import BlinkieEditor from './blinkie/BlinkieEditor';
import BlinkiePreview from './blinkie/BlinkiePreview';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from './ui/sonner';
import AnimatedBackground from './AnimatedBackground';

const TEMPLATES_PER_PAGE = 16;

const BlinkieCreator: React.FC = () => {
  const [blinkieOptions, setBlinkieOptions] = useState<BlinkieProps>(blinkieTemplates.default);
  const [currentPage, setCurrentPage] = useState(1);
  const blinkieRef = useRef<HTMLDivElement>(null);
  
  // Calculate total pages based on templates
  const totalTemplates = Object.keys(blinkieTemplates).length;
  const totalPages = Math.ceil(totalTemplates / TEMPLATES_PER_PAGE);

  // Get current page templates
  const getCurrentPageTemplates = () => {
    const templateEntries = Object.entries(blinkieTemplates);
    const startIndex = (currentPage - 1) * TEMPLATES_PER_PAGE;
    const endIndex = startIndex + TEMPLATES_PER_PAGE;
    const currentPageEntries = templateEntries.slice(startIndex, endIndex);
    
    return Object.fromEntries(currentPageEntries);
  };

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

  const handleBorderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBlinkieOptions({...blinkieOptions, border: e.target.value});
  };

  const handleBorderColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBlinkieOptions({...blinkieOptions, borderColor: e.target.value});
  };

  const handleBorderStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBlinkieOptions({...blinkieOptions, borderStyle: e.target.value});
  };

  const selectTemplate = (templateName: string) => {
    if (blinkieTemplates[templateName]) {
      setBlinkieOptions(blinkieTemplates[templateName]);
    }
  };

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
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
    <>
      <AnimatedBackground backgroundType="oldWeb" speed={10000} />
      <Windows98Window title="RuneScape Blinkie Creator" className="w-full max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Template selection area */}
          <div className="w-full md:w-2/3 space-y-4">
            <div className="flex justify-between items-center">
              <label className="block font-vt font-bold">Templates: (Page {currentPage} of {totalPages})</label>
              <div className="flex space-x-2">
                <Windows98Button 
                  onClick={prevPage} 
                  disabled={currentPage === 1}
                  className="flex items-center px-2"
                >
                  <ChevronLeft size={16} />
                </Windows98Button>
                <Windows98Button 
                  onClick={nextPage} 
                  disabled={currentPage === totalPages}
                  className="flex items-center px-2"
                >
                  <ChevronRight size={16} />
                </Windows98Button>
              </div>
            </div>
            <div className="win98-inset bg-white p-2 h-[300px] overflow-y-auto">
              <BlinkieTemplates 
                templates={getCurrentPageTemplates()} 
                onSelectTemplate={selectTemplate} 
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

          {/* Editor controls with preview moved above */}
          <div className="w-full md:w-1/3">
            {/* Preview now positioned above the edit section */}
            <div className="p-4 mb-4 bg-black flex items-center justify-center">
              <BlinkiePreview 
                blinkieOptions={blinkieOptions} 
                previewRef={blinkieRef} 
              />
            </div>

            <BlinkieEditor
              blinkieOptions={blinkieOptions}
              onTextChange={handleTextChange}
              onBackgroundChange={handleBackgroundChange}
              onTextColorChange={handleTextColorChange}
              onFontChange={handleFontChange}
              onAnimationChange={handleAnimationChange}
              onAnimationTypeChange={handleAnimationTypeChange}
              onBorderChange={handleBorderChange}
              onBorderColorChange={handleBorderColorChange}
              onBorderStyleChange={handleBorderStyleChange}
            />
          </div>
        </div>
      </Windows98Window>
    </>
  );
};

export default BlinkieCreator;
