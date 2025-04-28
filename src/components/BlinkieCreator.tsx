
import React, { useState, useRef, useEffect } from 'react';
import Windows98Window from './Windows98Window';
import Windows98Button from './Windows98Button';
import Windows98Input from './Windows98Input';
import Windows98Select from './Windows98Select';
import { Download } from 'lucide-react';

interface BlinkieProps {
  text: string;
  background: string;
  textColor: string;
  font: string;
  isAnimated: boolean;
}

const BlinkieCreator: React.FC = () => {
  const [blinkieOptions, setBlinkieOptions] = useState<BlinkieProps>({
    text: "RuneScape",
    background: "black",
    textColor: "red",
    font: "runescape",
    isAnimated: true
  });

  const [previewSize, setPreviewSize] = useState({
    width: 150,
    height: 20
  });
  
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

  const downloadAsPNG = () => {
    if (!blinkieRef.current) return;
    
    // In a real implementation, we would use html2canvas or similar library
    // But for this demo, we'll just show a toast notification
    alert("PNG download started! (This is a placeholder - in a real app, we would use html2canvas)");
  };

  const downloadAsGIF = () => {
    if (!blinkieRef.current) return;
    
    // In a real implementation, we would use gif.js or similar library
    // But for this demo, we'll just show a toast notification
    alert("GIF download started! (This is a placeholder - in a real app, we would use gif.js)");
  };

  return (
    <Windows98Window title="RuneScape Blinkie Creator" className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="win98-inset p-4 bg-black">
            <div
              ref={blinkieRef}
              className={`flex items-center justify-center pixel-perfect`}
              style={{
                width: `${previewSize.width}px`,
                height: `${previewSize.height}px`,
                backgroundColor: blinkieOptions.background,
                color: blinkieOptions.textColor,
                fontFamily: blinkieOptions.font === 'runescape' ? 'RuneScape' : 'VT323',
                animation: blinkieOptions.isAnimated ? 'blink 1s steps(1) infinite' : 'none',
              }}
            >
              {blinkieOptions.text}
            </div>
          </div>

          <div className="flex space-x-2">
            <Windows98Button onClick={downloadAsPNG} className="flex items-center">
              <Download size={16} className="mr-1" />
              PNG
            </Windows98Button>
            <Windows98Button onClick={downloadAsGIF} className="flex items-center">
              <Download size={16} className="mr-1" />
              GIF
            </Windows98Button>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block mb-1">Text:</label>
            <Windows98Input 
              type="text" 
              value={blinkieOptions.text} 
              onChange={handleTextChange} 
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-1">Background:</label>
            <Windows98Select
              value={blinkieOptions.background}
              onChange={handleBackgroundChange}
              className="w-full"
            >
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="#3a3a3a">Dark Gray</option>
            </Windows98Select>
          </div>

          <div>
            <label className="block mb-1">Text Color:</label>
            <Windows98Select
              value={blinkieOptions.textColor}
              onChange={handleTextColorChange}
              className="w-full"
            >
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="white">White</option>
              <option value="lime">Green</option>
            </Windows98Select>
          </div>

          <div>
            <label className="block mb-1">Font:</label>
            <Windows98Select
              value={blinkieOptions.font}
              onChange={handleFontChange}
              className="w-full"
            >
              <option value="runescape">RuneScape</option>
              <option value="vt">VT323 (Retro)</option>
            </Windows98Select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={blinkieOptions.isAnimated}
              onChange={handleAnimationChange}
              className="mr-2 win98-button h-4 w-4"
              id="animated-checkbox"
            />
            <label htmlFor="animated-checkbox">Animated (Blinking)</label>
          </div>
        </div>
      </div>
    </Windows98Window>
  );
};

export default BlinkieCreator;
