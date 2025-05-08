import React, { useState, useRef } from 'react';
import Windows98Window from './Windows98Window';
import Windows98Button from './Windows98Button';
import Windows98Input from './Windows98Input';
import Windows98Select from './Windows98Select';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from './ui/sonner';
import AnimatedBackground from './AnimatedBackground';

interface ButtonProps {
  text: string;
  background: string;
  textColor: string;
  font: string;
  border: string;
  isAnimated?: boolean;
  animationType?: string;
  page?: number;
}

// Templates per page
const TEMPLATES_PER_PAGE = 12;

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
  },
  // New templates
  mining: {
    text: "Mining",
    background: "#1A1F2C",
    textColor: "#B87333",
    font: "runescape",
    border: "#B87333"
  },
  smithing: {
    text: "Smithing",
    background: "#333333",
    textColor: "#C0C0C0",
    font: "runescape",
    border: "#C0C0C0"
  },
  herblore: {
    text: "Herblore",
    background: "#006400",
    textColor: "#32CD32",
    font: "runescape",
    border: "#32CD32"
  },
  agility: {
    text: "Agility",
    background: "#0047AB",
    textColor: "#00BFFF",
    font: "runescape",
    border: "#00BFFF"
  },
  thieving: {
    text: "Thieving",
    background: "#4B0082",
    textColor: "#9932CC",
    font: "runescape",
    border: "#9932CC"
  },
  slayer: {
    text: "Slayer",
    background: "#8B0000",
    textColor: "#FF0000",
    font: "runescape",
    border: "#FF0000"
  },
  farming: {
    text: "Farming",
    background: "#006400",
    textColor: "#7CFC00",
    font: "runescape",
    border: "#7CFC00"
  },
  runecraft: {
    text: "Runecraft",
    background: "#4B0082",
    textColor: "#EE82EE",
    font: "runescape",
    border: "#EE82EE"
  },
  hunter: {
    text: "Hunter",
    background: "#8B4513",
    textColor: "#D2691E",
    font: "runescape",
    border: "#D2691E"
  },
  construction: {
    text: "Construction",
    background: "#8B4513",
    textColor: "#CD853F",
    font: "runescape",
    border: "#CD853F"
  },
  summoning: {
    text: "Summoning",
    background: "#4B0082",
    textColor: "#9370DB",
    font: "runescape",
    border: "#9370DB"
  },
  dungeoneering: {
    text: "Dungeoneering",
    background: "#006400",
    textColor: "#3CB371",
    font: "runescape",
    border: "#3CB371"
  },
  divination: {
    text: "Divination",
    background: "#4B0082",
    textColor: "#BA55D3",
    font: "runescape",
    border: "#BA55D3"
  },
  invention: {
    text: "Invention",
    background: "#333333",
    textColor: "#FFD700",
    font: "runescape",
    border: "#FFD700"
  },
  archaeology: {
    text: "Archaeology",
    background: "#8B4513",
    textColor: "#A0522D",
    font: "runescape",
    border: "#A0522D"
  },
  cooking: {
    text: "Cooking",
    background: "#8B0000",
    textColor: "#FFA07A",
    font: "runescape",
    border: "#FFA07A"
  },
  prayer: {
    text: "Prayer",
    background: "#333333",
    textColor: "#FFFFFF",
    font: "runescape",
    border: "#FFFFFF",
    isAnimated: true,
    animationType: "glow"
  },
  // Pixel themed
  pixel1: {
    text: "Pixel Art",
    background: "black",
    textColor: "#FF69B4",
    font: "pixel",
    border: "#FF69B4"
  },
  pixel2: {
    text: "8-Bit Game",
    background: "#006400",
    textColor: "#ADFF2F",
    font: "pixel",
    border: "#ADFF2F"
  },
  pixel3: {
    text: "Retro Gaming",
    background: "#0000FF",
    textColor: "#00FFFF",
    font: "pixel",
    border: "#00FFFF"
  },
  // Commodore themed
  commodore1: {
    text: "CBM BASIC",
    background: "#0000AA",
    textColor: "#AAAAFF",
    font: "commodore",
    border: "#AAAAFF"
  },
  commodore2: {
    text: "LOAD *,8,1",
    background: "#000088",
    textColor: "#FFFFFF",
    font: "commodore",
    border: "#FFFFFF"
  },
  // Amiga themed
  amiga1: {
    text: "Workbench",
    background: "#0055AA",
    textColor: "#FFFFFF",
    font: "amiga",
    border: "#FF8800"
  },
  amiga2: {
    text: "Amiga 500",
    background: "#000000",
    textColor: "#00AAFF",
    font: "amiga",
    border: "#FF0000"
  },
  // IBM PC themed
  ibm1: {
    text: "MS-DOS",
    background: "#000000",
    textColor: "#AAAAAA",
    font: "ibm",
    border: "#AAAAAA"
  },
  ibm2: {
    text: "PC XT",
    background: "#000000",
    textColor: "#55FF55",
    font: "ibm",
    border: "#55FF55"
  },
  // Atari themed
  atari1: {
    text: "Atari 2600",
    background: "#000000",
    textColor: "#FF0000",
    font: "atari",
    border: "#FFFFFF"
  },
  atari2: {
    text: "Atari ST",
    background: "#000055",
    textColor: "#55FF55",
    font: "atari",
    border: "#55FF55"
  },
  // Apple II themed
  apple1: {
    text: "Apple ][",
    background: "#000000",
    textColor: "#55FF55",
    font: "apple2",
    border: "#55FF55"
  },
  apple2: {
    text: "BASIC",
    background: "#000000",
    textColor: "#FFFFFF",
    font: "apple2",
    border: "#FFFFFF"
  },
  // CGA themed
  cga1: {
    text: "CGA Mode 1",
    background: "#000000",
    textColor: "#55FFFF",
    font: "cga",
    border: "#FF55FF"
  },
  cga2: {
    text: "CGA Mode 2",
    background: "#000000",
    textColor: "#FFFFFF",
    font: "cga",
    border: "#55FFFF"
  },
  // ZX Spectrum themed
  zx1: {
    text: "Sinclair",
    background: "#000000",
    textColor: "#FFFF55",
    font: "zxspectrum",
    border: "#FF5555"
  },
  zx2: {
    text: "BASIC 48K",
    background: "#0000FF",
    textColor: "#FFFF55",
    font: "zxspectrum",
    border: "#FFFF55"
  }
};

const ButtonCreator: React.FC = () => {
  const [buttonOptions, setButtonOptions] = useState<ButtonProps>(buttonTemplates.default);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate total pages
  const totalTemplates = Object.keys(buttonTemplates).length;
  const totalPages = Math.ceil(totalTemplates / TEMPLATES_PER_PAGE);
  
  // Get current page templates
  const getCurrentPageTemplates = () => {
    const templateEntries = Object.entries(buttonTemplates);
    const startIndex = (currentPage - 1) * TEMPLATES_PER_PAGE;
    const endIndex = startIndex + TEMPLATES_PER_PAGE;
    const currentPageEntries = templateEntries.slice(startIndex, endIndex);
    
    return Object.fromEntries(currentPageEntries);
  };

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

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const downloadAsPNG = () => {
    if (!buttonRef.current) return;
    toast.success("PNG download started!");
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
      case 'pixel': return '"Press Start 2P", monospace';
      case 'commodore': return '"C64", monospace';
      case 'amiga': return '"Amiga Forever", monospace';
      case 'ibm': return '"IBM PC", monospace';
      case 'atari': return '"Atari Classic", monospace';
      case 'apple2': return '"Apple II", monospace';
      case 'cga': return '"CGA", monospace';
      case 'zxspectrum': return '"ZX Spectrum", monospace';
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
    <>
      <AnimatedBackground backgroundType="oldWeb" speed={15000} />
      <Windows98Window title="RuneScape Button Creator" className="w-full max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-4">
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
            
            <div className="win98-inset bg-white p-4 min-h-[250px] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {Object.entries(getCurrentPageTemplates()).map(([key, template]) => (
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
                        fontFamily: getFontFamily(),
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
            
            <div className="flex justify-center">
              <Windows98Button onClick={downloadAsPNG} className="flex items-center gap-2">
                <Download size={16} /> Save as PNG
              </Windows98Button>
            </div>
          </div>

          <div className="w-full md:w-1/3 space-y-3 bg-win98-bg p-4">
            {/* Preview positioned above the edit section */}
            <div className="p-4 mb-4 bg-black flex items-center justify-center">
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
                <option value="#006400">Dark Green</option>
                <option value="#4B0082">Indigo</option>
                <option value="#800080">Purple</option>
                <option value="#2F4F4F">Dark Slate</option>
                <option value="#0000FF">Blue</option>
                <option value="#008000">Green</option>
                <option value="#FFD700">Gold</option>
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
                <option value="#FF6347">Tomato Red</option>
                <option value="#4682B4">Steel Blue</option>
                <option value="#9370DB">Medium Purple</option>
                <option value="#FFD700">Golden Yellow</option>
                <option value="#FA8072">Salmon</option>
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
                <option value="pixel">Pixel</option>
                <option value="commodore">Commodore 64</option>
                <option value="amiga">Amiga</option>
                <option value="ibm">IBM PC</option>
                <option value="atari">Atari</option>
                <option value="apple2">Apple II</option>
                <option value="cga">CGA</option>
                <option value="zxspectrum">ZX Spectrum</option>
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
                <option value="#FF6347">Tomato Red</option>
                <option value="#4682B4">Steel Blue</option>
                <option value="#9370DB">Medium Purple</option>
                <option value="#FFD700">Golden Yellow</option>
                <option value="#FA8072">Salmon</option>
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
    </>
  );
};

export default ButtonCreator;
