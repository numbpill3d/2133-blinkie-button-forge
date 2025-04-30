
import { BlinkieProps } from '../types/blinkie';

// Helper function to determine animation class
export const getAnimationClass = (blinkieOptions: BlinkieProps) => {
  if (!blinkieOptions.isAnimated) return 'none';
  
  switch (blinkieOptions.animationType) {
    case 'rainbow': return 'blinkie-rainbow 3s linear infinite';
    case 'pulse': return 'blinkie-pulse 2s ease-in-out infinite';
    case 'glow': return 'blinkie-glow 1.5s ease-in-out infinite';
    case 'fire': return 'blinkie-fire 2s ease-in infinite';
    case 'sparkle': return 'blinkie-sparkle 3s ease infinite';
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
