
import React from 'react';
import { BlinkieProps } from '../../types/blinkie';
import Windows98Input from '../Windows98Input';
import Windows98Select from '../Windows98Select';

interface BlinkieEditorProps {
  blinkieOptions: BlinkieProps;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBackgroundChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onTextColorChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onFontChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onAnimationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAnimationTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBorderChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBorderColorChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBorderStyleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const BlinkieEditor: React.FC<BlinkieEditorProps> = ({
  blinkieOptions,
  onTextChange,
  onBackgroundChange,
  onTextColorChange,
  onFontChange,
  onAnimationChange,
  onAnimationTypeChange,
  onBorderChange,
  onBorderColorChange,
  onBorderStyleChange
}) => {
  return (
    <div className="w-full space-y-3 bg-win98-bg p-4">
      <h3 className="font-vt font-bold mb-2">Edit Blinkie:</h3>
      
      <div>
        <label className="block mb-1 font-vt">Text:</label>
        <Windows98Input 
          type="text" 
          value={blinkieOptions.text} 
          onChange={onTextChange} 
          className="w-full"
          maxLength={15}
        />
      </div>

      <div>
        <label className="block mb-1 font-vt">Background:</label>
        <Windows98Select
          value={blinkieOptions.background}
          onChange={onBackgroundChange}
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
          <option value="#8B4513">Brown</option>
        </Windows98Select>
      </div>

      <div>
        <label className="block mb-1 font-vt">Text Color:</label>
        <Windows98Select
          value={blinkieOptions.textColor}
          onChange={onTextColorChange}
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
          value={blinkieOptions.font}
          onChange={onFontChange}
          className="w-full"
        >
          <option value="runescape">RuneScape</option>
          <option value="vt">VT323 (Retro)</option>
          <option value="fixedsys">Fixedsys (DOS)</option>
          <option value="runeblood">RuneBlood</option>
        </Windows98Select>
      </div>
      
      {/* Border Options */}
      <div>
        <label className="block mb-1 font-vt">Border:</label>
        <Windows98Select
          value={blinkieOptions.border || 'none'}
          onChange={onBorderChange}
          className="w-full"
        >
          <option value="none">None</option>
          <option value="thin">Thin</option>
          <option value="medium">Medium</option>
          <option value="thick">Thick</option>
          <option value="double">Double</option>
          <option value="dotted">Dotted</option>
          <option value="dashed">Dashed</option>
          <option value="groove">Groove</option>
          <option value="ridge">Ridge</option>
          <option value="inset">Inset</option>
          <option value="outset">Outset</option>
        </Windows98Select>
      </div>

      {blinkieOptions.border && blinkieOptions.border !== 'none' && (
        <>
          <div>
            <label className="block mb-1 font-vt">Border Color:</label>
            <Windows98Select
              value={blinkieOptions.borderColor || 'white'}
              onChange={onBorderColorChange}
              className="w-full"
            >
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="lime">Green</option>
              <option value="cyan">Cyan</option>
              <option value="#9b87f5">Purple</option>
              <option value="gold">Gold</option>
              <option value="orange">Orange</option>
              <option value="#acf">Ice Blue</option>
              <option value="silver">Silver</option>
            </Windows98Select>
          </div>
        </>
      )}

      <div className="flex items-center space-x-2 mb-2">
        <input
          type="checkbox"
          checked={blinkieOptions.isAnimated}
          onChange={onAnimationChange}
          className="win98-button h-4 w-4"
          id="animated-checkbox"
        />
        <label htmlFor="animated-checkbox" className="font-vt">Animated</label>
      </div>

      {blinkieOptions.isAnimated && (
        <div>
          <label className="block mb-1 font-vt">Animation Style:</label>
          <Windows98Select
            value={blinkieOptions.animationType || ''}
            onChange={onAnimationTypeChange}
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
  );
};

export default BlinkieEditor;
