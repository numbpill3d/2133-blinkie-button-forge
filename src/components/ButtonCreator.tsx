
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
  isAnimated?: boolean;
  animationType?: string;
}

// Expanded templates with more variety
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
    border: "lime",
    isAnimated: true,
    animationType: "glow"
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
  },
  golden: {
    text: "Gold",
    background: "black",
    textColor: "gold",
    font: "runescape",
    border: "gold",
    isAnimated: true,
    animationType: "pulse"
  },
  ice: {
    text: "Ice Spells",
    background: "#102030",
    textColor: "#acf",
    font: "runescape",
    border: "#acf",
    isAnimated: true,
    animationType: "sparkle"
  },
  rainbow: {
    text: "Rare Drop",
    background: "black",
    textColor: "rainbow",
    font: "runescape",
    border: "white",
    isAnimated: true,
    animationType: "rainbow"
  },
  ancient: {
    text: "Ancient",
    background: "#0c1222",
    textColor: "#9b87f5",
    font: "runeblood",
    border: "#9b87f5",
    isAnimated: true
  },
  fire: {
    text: "Fire Runes",
    background: "#300",
    textColor: "orange",
    font: "runescape",
    border: "red",
    isAnimated: true,
    animationType: "fire"
  },
  modern: {
    text: "Modern",
    background: "#222",
    textColor: "#f8f8f8",
    font: "fixedsys",
    border: "#f8f8f8"
  },
  woodcutting: {
    text: "Woodcutting",
    background: "#1A1F2C",
    textColor: "#3CB371",
    font: "runescape",
    border: "#3CB371"
  },
  fishing: {
    text: "Fishing",
    background: "#000080",
    textColor: "#00FFFF",
    font: "runescape",
    border: "#00FFFF"
  },
  fletching: {
    text: "Fletching",
    background: "#1A1F2C",
    textColor: "#DEB887",
    font: "runescape",
    border: "#DEB887"
  },
  firemaking: {
    text: "Firemaking",
    background: "#800000",
    textColor: "#FFA500",
    font: "runescape",
    border: "#FFA500",
    isAnimated: true,
    animationType: "fire"
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

  const handleAnimationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setButtonOptions({...buttonOptions, isAnimated: e.target.checked});
  };

  const handleAnimationTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setButtonOptions({...buttonOptions, animationType: e.target.value});
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

  // Helper function to determine animation class
  const getAnimationClass = () => {
    if (!buttonOptions.isAnimated) return 'none';
    
    switch (buttonOptions.animationType) {
      case 'rainbow': return 'blinkie-rainbow 3s linear infinite';
      case 'pulse': return 'blinkie-pulse 2s ease-in-out infinite';
      case 'glow': return 'blinkie-glow 1.5s ease-in-out infinite';
      case 'fire': return 'blinkie-fire 2s ease-in infinite';
      case 'sparkle': return 'blinkie-sparkle 3s ease infinite';
      default: return 'blink 1s steps(1) infinite';
    }
  };
  
  // Helper function to determine font family
  const getFontFamily = () => {
    switch (buttonOptions.font) {
      case 'runescape': return 'RuneScape';
      case 'runeblood': return 'RuneScape, serif';
      case 'vt': return 'VT323';
      case 'fixedsys': return 'monospace';
      default: return 'RuneScape';
    }
  };

  // Helper function for rainbow text
  const getRainbowStyle = () => {
    if (buttonOptions.textColor === 'rainbow') {
      return {
        background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      };
    }
    return {};
  };

  return (
    <Windows98Window title="RuneScape Button Creator" className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3 space-y-4">
          <label className="block mb-1 font-vt font-bold">Templates:</label>
          <div className="win98-inset bg-white p-4 min-h-[250px] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {Object.entries(buttonTemplates).map(([key, template]) => (
                <div 
                  key={key}
                  className="flex flex-col items-center cursor-pointer hover:bg-gray-200 p-2 border border-gray-300"
                  onClick={() => selectTemplate(key)}
                >
                  <div 
                    className="w-[88px] h-[32px] mb-1 flex items-center justify-center pixel-perfect text-xs"
                    style={{
                      backgroundColor: template.background,
                      color: template.textColor !== 'rainbow' ? template.textColor : undefined,
                      fontFamily: template.font === 'runescape' ? 'RuneScape' : 
                                 template.font === 'vt' ? 'VT323' : 
                                 template.font === 'fixedsys' ? 'monospace' : 
                                 template.font === 'runeblood' ? 'RuneScape, serif' : 'RuneScape',
                      border: `1px solid ${template.border}`,
                      animation: template.isAnimated ? 
                        (template.animationType ? 
                          getAnimationClass() : 'blink 1s steps(1) infinite') 
                        : 'none',
                      ...(template.textColor === 'rainbow' ? getRainbowStyle() : {}),
                    }}
                  >
                    {template.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-black flex items-center justify-center">
            <div
              ref={buttonRef}
              className="flex items-center justify-center pixel-perfect text-sm"
              style={{
                width: '88px',
                height: '32px',
                backgroundColor: buttonOptions.background,
                color: buttonOptions.textColor !== 'rainbow' ? buttonOptions.textColor : undefined,
                fontFamily: getFontFamily(),
                border: `1px solid ${buttonOptions.border}`,
                padding: '2px',
                animation: getAnimationClass(),
                ...(buttonOptions.textColor === 'rainbow' ? getRainbowStyle() : {}),
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
          <h3 className="font-vt font-bold mb-2">Edit Button:</h3>
          
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
              <option value="#300">Dark Red</option>
              <option value="#102030">Dark Blue</option>
              <option value="#0c1222">Deep Blue</option>
              <option value="#222">Dark Gray</option>
              <option value="#800000">Maroon</option>
              <option value="#000080">Navy</option>
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
              <option value="cyan">Cyan</option>
              <option value="#9b87f5">Purple</option>
              <option value="gold">Gold</option>
              <option value="orange">Orange</option>
              <option value="#acf">Ice Blue</option>
              <option value="#f8f8f8">Light Gray</option>
              <option value="#00FFFF">Aqua</option>
              <option value="#3CB371">Medium Green</option>
              <option value="#DEB887">Wood Brown</option>
              <option value="rainbow">Rainbow</option>
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
              <option value="fixedsys">Fixedsys (DOS)</option>
              <option value="runeblood">RuneBlood</option>
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
              <option value="lime">Green</option>
              <option value="cyan">Cyan</option>
              <option value="#9b87f5">Purple</option>
              <option value="gold">Gold</option>
              <option value="orange">Orange</option>
              <option value="#acf">Ice Blue</option>
            </Windows98Select>
          </div>

          <div className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={buttonOptions.isAnimated}
              onChange={handleAnimationChange}
              className="win98-button h-4 w-4"
              id="button-animated-checkbox"
            />
            <label htmlFor="button-animated-checkbox" className="font-vt">Animated</label>
          </div>

          {buttonOptions.isAnimated && (
            <div>
              <label className="block mb-1 font-vt">Animation Style:</label>
              <Windows98Select
                value={buttonOptions.animationType || ''}
                onChange={handleAnimationTypeChange}
                className="w-full"
              >
                <option value="">Blink</option>
                <option value="rainbow">Rainbow</option>
                <option value="pulse">Pulse</option>
                <option value="glow">Glow</option>
                <option value="fire">Fire</option>
                <option value="sparkle">Sparkle</option>
              </Windows98Select>
            </div>
          )}
        </div>
      </div>
    </Windows98Window>
  );
};

export default ButtonCreator;
