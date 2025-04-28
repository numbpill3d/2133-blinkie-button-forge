
import React, { useState, useRef } from 'react';
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
    alert("PNG download started! (This is a placeholder)");
  };

  const downloadAsGIF = () => {
    if (!blinkieRef.current) return;
    alert("GIF download started! (This is a placeholder)");
  };

  return (
    <Windows98Window title="RuneScape Blinkie Creator" className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3 space-y-4">
          <div className="win98-inset p-4 bg-black min-h-[200px] flex items-center justify-center">
            <div
              ref={blinkieRef}
              className={`flex items-center justify-center pixel-perfect text-sm`}
              style={{
                width: `150px`,
                height: `20px`,
                backgroundColor: blinkieOptions.background,
                color: blinkieOptions.textColor,
                fontFamily: blinkieOptions.font === 'runescape' ? 'RuneScape' : 'VT323',
                animation: blinkieOptions.isAnimated ? 'blink 1s steps(1) infinite' : 'none',
                border: '1px solid #333',
              }}
            >
              {blinkieOptions.text}
            </div>
          </div>

          <div className="flex space-x-2 justify-center">
            <Windows98Button onClick={downloadAsPNG} className="flex items-center gap-2">
              <Download size={16} /> Save as PNG
            </Windows98Button>
            <Windows98Button onClick={downloadAsGIF} className="flex items-center gap-2">
              <Download size={16} /> Save as GIF
            </Windows98Button>
          </div>
        </div>

        <div className="w-full md:w-1/3 space-y-3 bg-win98-bg p-4">
          <div>
            <label className="block mb-1 font-vt">Text:</label>
            <Windows98Input 
              type="text" 
              value={blinkieOptions.text} 
              onChange={handleTextChange} 
              className="w-full"
              maxLength={15}
            />
          </div>

          <div>
            <label className="block mb-1 font-vt">Background:</label>
            <Windows98Select
              value={blinkieOptions.background}
              onChange={handleBackgroundChange}
              className="w-full"
            >
              <option value="black">Black</option>
              <option value="#1A1F2C">Dark Purple</option>
              <option value="red">Red</option>
            </Windows98Select>
          </div>

          <div>
            <label className="block mb-1 font-vt">Text Color:</label>
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
            <label className="block mb-1 font-vt">Font:</label>
            <Windows98Select
              value={blinkieOptions.font}
              onChange={handleFontChange}
              className="w-full"
            >
              <option value="runescape">RuneScape</option>
              <option value="vt">VT323 (Retro)</option>
            </Windows98Select>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={blinkieOptions.isAnimated}
              onChange={handleAnimationChange}
              className="win98-button h-4 w-4"
              id="animated-checkbox"
            />
            <label htmlFor="animated-checkbox" className="font-vt">Animated (Blinking)</label>
          </div>
        </div>
      </div>
    </Windows98Window>
  );
};

export default BlinkieCreator;
