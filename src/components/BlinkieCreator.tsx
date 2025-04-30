
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

// Predefined templates for users to choose from
const blinkieTemplates: Record<string, BlinkieProps> = {
  default: {
    text: "RuneScape",
    background: "black",
    textColor: "red",
    font: "runescape",
    isAnimated: true
  },
  achievement: {
    text: "99 Slayer",
    background: "black",
    textColor: "yellow",
    font: "runescape",
    isAnimated: true
  },
  skill: {
    text: "Mining Pro",
    background: "#1A1F2C",
    textColor: "lime",
    font: "runescape",
    isAnimated: true
  },
  combat: {
    text: "PK Master",
    background: "red",
    textColor: "white",
    font: "runescape",
    isAnimated: true
  },
  quest: {
    text: "Quest Cape",
    background: "#1A1F2C",
    textColor: "yellow",
    font: "runescape",
    isAnimated: true
  },
  ironman: {
    text: "Iron Man",
    background: "black",
    textColor: "white",
    font: "runescape",
    isAnimated: true
  },
  oldschool: {
    text: "OSRS",
    background: "black",
    textColor: "red",
    font: "vt",
    isAnimated: true
  },
  clan: {
    text: "Dragon Slayers",
    background: "#1A1F2C",
    textColor: "red",
    font: "runescape",
    isAnimated: true
  }
};

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

  const selectTemplate = (templateName: string) => {
    if (blinkieTemplates[templateName]) {
      setBlinkieOptions(blinkieTemplates[templateName]);
    }
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
        {/* Template selection area - now central/main area */}
        <div className="w-full md:w-2/3 space-y-4">
          <label className="block mb-1 font-vt font-bold">Templates:</label>
          <div className="win98-inset bg-white p-4 min-h-[250px] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {Object.entries(blinkieTemplates).map(([key, template]) => (
                <div 
                  key={key}
                  className="flex flex-col items-center cursor-pointer hover:bg-gray-200 p-2 border border-gray-300"
                  onClick={() => selectTemplate(key)}
                >
                  <div 
                    className="w-[150px] h-[20px] mb-2 flex items-center justify-center pixel-perfect text-xs"
                    style={{
                      backgroundColor: template.background,
                      color: template.textColor,
                      fontFamily: template.font === 'runescape' ? 'RuneScape' : 'VT323',
                      border: '1px solid #333',
                    }}
                  >
                    {template.text}
                  </div>
                  <span className="text-xs font-vt capitalize">{key}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-black flex items-center justify-center">
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
          
          <div className="flex flex-wrap gap-2 justify-center">
            <Windows98Button onClick={downloadAsPNG} className="flex items-center gap-2">
              <Download size={16} /> Save as PNG
            </Windows98Button>
            <Windows98Button onClick={downloadAsGIF} className="flex items-center gap-2">
              <Download size={16} /> Save as GIF
            </Windows98Button>
          </div>
        </div>

        {/* Editor controls - now in sidebar */}
        <div className="w-full md:w-1/3 space-y-3 bg-win98-bg p-4">
          <h3 className="font-vt font-bold mb-2">Edit Blinkie:</h3>
          
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
