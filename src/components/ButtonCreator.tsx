
import React, { useState, useRef } from 'react';
import Windows98Window from './Windows98Window';
import Windows98Button from './Windows98Button';
import Windows98Input from './Windows98Input';
import Windows98Select from './Windows98Select';
import { Download } from 'lucide-react';

interface ButtonProps {
  text: string;
  background: string;
  textColor: string;
  font: string;
  border: string;
}

const ButtonCreator: React.FC = () => {
  const [buttonOptions, setButtonOptions] = useState<ButtonProps>({
    text: "RuneScape",
    background: "black",
    textColor: "red",
    font: "runescape",
    border: "red"
  });

  const buttonRef = useRef<HTMLDivElement>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setButtonOptions({...buttonOptions, text: e.target.value});
  };

  const handleBackgroundChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setButtonOptions({...buttonOptions, background: e.target.value});
  };

  const handleTextColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setButtonOptions({...buttonOptions, textColor: e.target.value});
  };

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setButtonOptions({...buttonOptions, font: e.target.value});
  };

  const handleBorderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setButtonOptions({...buttonOptions, border: e.target.value});
  };

  const downloadAsPNG = () => {
    if (!buttonRef.current) return;
    
    // In a real implementation, we would use html2canvas or similar library
    // But for this demo, we'll just show a toast notification
    alert("PNG download started! (This is a placeholder - in a real app, we would use html2canvas)");
  };

  return (
    <Windows98Window title="RuneScape 88x32 Button Creator" className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="win98-inset p-4 bg-black flex items-center justify-center">
            <div
              ref={buttonRef}
              className="flex items-center justify-center pixel-perfect"
              style={{
                width: '88px',
                height: '32px',
                backgroundColor: buttonOptions.background,
                color: buttonOptions.textColor,
                fontFamily: buttonOptions.font === 'runescape' ? 'RuneScape' : 'VT323',
                border: `1px solid ${buttonOptions.border}`,
                fontSize: '12px',
                overflow: 'hidden',
                textAlign: 'center',
                padding: '2px'
              }}
            >
              {buttonOptions.text}
            </div>
          </div>

          <div>
            <Windows98Button onClick={downloadAsPNG} className="flex items-center">
              <Download size={16} className="mr-1" />
              Download as PNG
            </Windows98Button>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block mb-1">Text:</label>
            <Windows98Input 
              type="text" 
              value={buttonOptions.text} 
              onChange={handleTextChange} 
              className="w-full"
              maxLength={15}
            />
            <p className="text-xs mt-1 text-gray-600">Button size: 88x32 pixels</p>
          </div>

          <div>
            <label className="block mb-1">Background:</label>
            <Windows98Select
              value={buttonOptions.background}
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
              value={buttonOptions.textColor}
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
              value={buttonOptions.font}
              onChange={handleFontChange}
              className="w-full"
            >
              <option value="runescape">RuneScape</option>
              <option value="vt">VT323 (Retro)</option>
            </Windows98Select>
          </div>

          <div>
            <label className="block mb-1">Border Color:</label>
            <Windows98Select
              value={buttonOptions.border}
              onChange={handleBorderChange}
              className="w-full"
            >
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="white">White</option>
              <option value="transparent">None</option>
            </Windows98Select>
          </div>
        </div>
      </div>
    </Windows98Window>
  );
};

export default ButtonCreator;
