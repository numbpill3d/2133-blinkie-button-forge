
import { BlinkieProps } from '../types/blinkie';

// Helper function to determine animation class
export const getAnimationClass = (blinkieOptions: BlinkieProps) => {
  if (!blinkieOptions.isAnimated) return 'none';
  
  switch (blinkieOptions.animationType) {
    case 'rainbow': return 'rainbow 3s linear infinite';
    case 'pulse': return 'pulse 2s ease-in-out infinite';
    case 'glow': return 'glow 1.5s ease-in-out infinite';
    case 'fire': return 'fire 2s ease-in infinite';
    case 'sparkle': return 'sparkle 3s ease infinite';
    case 'rotate': return 'rotate 10s linear infinite';
    case 'bounce': return 'bounce 1s infinite';
    case 'shake': return 'shake 0.5s infinite';
    case 'flip': return 'flip 2s infinite';
    case 'zigzag': return 'zigzag 2s ease-in-out infinite';
    case 'glitch': return 'glitch 0.5s infinite';
    default: return 'blink 1s steps(1) infinite';
  }
};

// Helper function to determine font family
export const getFontFamily = (font: string) => {
  switch (font) {
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
    case 'msx': return '"MSX", monospace';
    case 'arcade': return '"Arcade", monospace';
    case 'nintendo': return '"Nintendo", monospace';
    case 'gameboy': return '"GameBoy", monospace';
    case 'sega': return '"Sega", monospace';
    case 'teletext': return '"Teletext", monospace';
    case 'terminal': return '"Terminal", monospace';
    default: return 'RuneScape';
  }
};

// Helper function for rainbow text
export const getRainbowStyle = (textColor: string) => {
  if (textColor === 'rainbow') {
    return {
      background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    };
  }
  return {};
};

// Helper function for border styling
export const getBorderStyle = (blinkieOptions: BlinkieProps) => {
  if (!blinkieOptions.border || blinkieOptions.border === 'none') {
    return {}; // No border
  }
  
  const borderWidth = 
    blinkieOptions.border === 'thin' ? '1px' :
    blinkieOptions.border === 'medium' ? '2px' :
    blinkieOptions.border === 'thick' ? '3px' :
    '2px';
  
  const borderStyle = 
    ['dotted', 'dashed', 'groove', 'ridge', 'inset', 'outset', 'double', 'solid'].includes(blinkieOptions.border)
      ? blinkieOptions.border 
      : 'solid';
  
  return {
    border: `${borderWidth} ${borderStyle} ${blinkieOptions.borderColor || 'white'}`,
  };
};

// Helper function for texture backgrounds
export const getTextureBackground = (texture: string) => {
  switch (texture) {
    case 'checkered': 
      return "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUiIGhlaWdodD0iNSIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjUiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIGZpbGw9IiMwMDAiLz48cmVjdCB5PSI1IiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIi8+PHJlY3QgeD0iNSIgeT0iNSIgd2lkdGg9IjUiIGhlaWdodD0iNSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')";
    case 'dots':
      return "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')";
    case 'stars':
      return "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDEgTDEyIDcgTDE4IDcgTDEzIDEwIEwxNSAxNiBMMTAgMTMgTDUgMTYgTDcgMTAgTDIgNyBMOCA3IFoiIGZpbGw9IiNmZmY4Ii8+PC9zdmc+')";
    case 'wood':
      return "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjOEI0NTEzIi8+PHBhdGggZD0iTTAgMCBMNDAgMCBMNDAgNSBMMCA1IFoiIGZpbGw9IiM2QjM1MTMiIG9wYWNpdHk9IjAuMyIvPjxwYXRoIGQ9Ik0wIDEwIEw0MCAxMCBMNDAgMTUgTDAgMTUgWiIgZmlsbD0iIzZCMzUxMyIgb3BhY2l0eT0iMC4zIi8+PHBhdGggZD0iTTAgMjAgTDQwIDIwIEw0MCAyNSBMMCAyNSBaIiBmaWxsPSIjNkIzNTEzIiBvcGFjaXR5PSIwLjMiLz48cGF0aCBkPSJNMCAzMCBMNDAgMzAgTDQwIDM1IEwwIDM1IFoiIGZpbGw9IiM2QjM1MTMiIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')";
    case 'stone':
      return "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNzA3MDcwIi8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjNjA2MDYwIi8+PHJlY3QgeD0iMjAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMiIgZmlsbD0iIzY4Njg2OCIvPjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjEwIiBmaWxsPSIjNjU2NTY1Ii8+PHJlY3QgeD0iMzAiIHk9IjIwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiM2MjYyNjIiLz48L3N2Zz4=')";
    default:
      return '';
  }
};
