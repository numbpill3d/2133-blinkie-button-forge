
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

// Predefined templates for buttons
const buttonTemplates: Record<string, ButtonProps> = {
  default: {
    text: "RuneScape",
    background: "black",
    textColor: "red",
    font: "runescape",
    border: "red"
  },
  skill: {
    text: "Mining",
    background: "black",
    textColor: "yellow",
    font: "runescape",
    border: "yellow"
  },
  combat: {
    text: "Attack",
    background: "#1A1F2C",
    textColor: "red",
    font: "runescape",
    border: "red"
  },
  magic: {
    text: "Magic",
    background: "black",
    textColor: "lime",
    font: "runescape",
    border: "lime"
  },
  quest: {
    text: "Quest",
    background: "#1A1F2C",
    textColor: "yellow",
    font: "runescape",
    border: "yellow"
  },
  items: {
    text: "Items",
    background: "black",
    textColor: "white",
    font: "runescape",
    border: "white"
  },
  clan: {
    text: "Clan",
    background: "red",
    textColor: "white",
    font: "runescape",
    border: "white"
  },
  retro: {
    text: "OSRS",
    background: "black",
    textColor: "red",
    font: "vt",
    border: "red"
  }
};

const ButtonCreator: React.FC = () => {
  const [buttonOptions, setButtonOptions] = useState<ButtonProps>(buttonTemplates.default);
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

  const selectTemplate = (templateName: string) => {
    if (buttonTemplates[templateName]) {
      setButtonOptions(buttonTemplates[templateName]);
    }
  };

  const downloadAsPNG = () => {
    if (!buttonRef.current) return;
    alert("PNG download started! (This is a placeholder)");
  };

  return (
    <Windows98Window title="RuneScape Button Creator" className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3 space-y-4">
          <div className="win98-inset p-4 bg-black min-h-[200px] flex items-center justify-center">
            <div
              ref={buttonRef}
              className="flex items-center justify-center pixel-perfect text-sm"
              style={{
                width: '88px',
                height: '32px',
                backgroundColor: buttonOptions.background,
                color: buttonOptions.textColor,
                fontFamily: buttonOptions.font === 'runescape' ? 'RuneScape' : 'VT323',
                border: `1px solid ${buttonOptions.border}`,
                padding: '2px',
              }}
            >
              {buttonOptions.text}
            </div>
          </div>

          <div className="flex justify-center">
            <Windows98Button onClick={downloadAsPNG} className="flex items-center gap-2">
              <Download size={16} /> Save as PNG
            </Windows98Button>
          </div>
        </div>

        <div className="w-full md:w-1/3 space-y-3 bg-win98-bg p-4">
          <div className="mb-4">
            <label className="block mb-1 font-vt font-bold">Templates:</label>
            <div className="win98-inset bg-white p-2 max-h-[120px] overflow-y-auto">
              <div className="grid grid-cols-1 gap-1">
                {Object.entries(buttonTemplates).map(([key, template]) => (
                  <div 
                    key={key}
                    className="flex items-center cursor-pointer hover:bg-gray-200 p-1"
                    onClick={() => selectTemplate(key)}
                  >
                    <div 
                      className="w-[88px] h-[32px] mr-2 flex items-center justify-center pixel-perfect text-xs"
                      style={{
                        backgroundColor: template.background,
                        color: template.textColor,
                        fontFamily: template.font === 'runescape' ? 'RuneScape' : 'VT323',
                        border: `1px solid ${template.border}`,
                      }}
                    >
                      {template.text}
                    </div>
                    <span className="text-xs font-vt capitalize">{key}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-vt">Text:</label>
            <Windows98Input 
              type="text" 
              value={buttonOptions.text} 
              onChange={handleTextChange} 
              className="w-full"
              maxLength={15}
            />
          </div>

          <div>
            <label className="block mb-1 font-vt">Background:</label>
            <Windows98Select
              value={buttonOptions.background}
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
            <label className="block mb-1 font-vt">Font:</label>
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
            <label className="block mb-1 font-vt">Border Color:</label>
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
