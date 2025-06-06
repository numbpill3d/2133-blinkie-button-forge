
import React, { useState } from 'react';
import Windows98Window from '@/components/Windows98Window';
import Windows98Button from '@/components/Windows98Button';
import BlinkieCreator from '@/components/BlinkieCreator';
import ButtonCreator from '@/components/ButtonCreator';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'blinkies' | 'buttons'>('blinkies');

  return (
    <div className="min-h-screen flex flex-col items-center bg-stars p-4 sm:p-8">
      <Windows98Window 
        title="Welcome to 2133 Blinkie Forge" 
        className="w-full max-w-4xl mx-auto mb-4"
      >
        <h1 className="font-runescape text-rs-red text-4xl text-center mb-2">
          2133 Blinkie Forge
        </h1>
        <p className="text-center mb-4 font-vt">
          Create your own 2133-style blinkies (150x20) and buttons (88x32)!
        </p>
      </Windows98Window>

      <div className="w-full max-w-4xl mx-auto mb-4">
        <div className="flex space-x-2">
          <Windows98Button
            onClick={() => setActiveTab('blinkies')}
            className={activeTab === 'blinkies' ? 'bg-win98-bg border-win98-border-darker border-r-win98-border-light border-b-win98-border-light' : ''}
          >
            Blinkies (150x20)
          </Windows98Button>
          <Windows98Button
            onClick={() => setActiveTab('buttons')}
            className={activeTab === 'buttons' ? 'bg-win98-bg border-win98-border-darker border-r-win98-border-light border-b-win98-border-light' : ''}
          >
            Buttons (88x32)
          </Windows98Button>
        </div>
      </div>

      {activeTab === 'blinkies' ? <BlinkieCreator /> : <ButtonCreator />}

      <Windows98Window 
        title="About" 
        className="w-full max-w-4xl mx-auto mt-4"
      >
        <div className="space-y-2 font-vt">
          <p>This blinkie/button forge was crafted by voidrane splicer, better known as numbpilled. she is a schizoaffective and homeless programmer, living as an urban stealth camper/scavenger type in the apathetic and uninteresting streets of charlotte nc. if you like her work, please consider donating any amount to her apple pay (+1 828 266 8648) or by purchasing any of her <a href="https://ko-fi.com/numbpilled" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">html codes and templates</a>.</p>
          <p>Her own personal websites can be found at <a href="http://nolove.neocities.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">nolove.neocities.org</a> and <a href="http://voidrane.nekoweb.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">voidrane.nekoweb.org</a>, please do come and visit for a while~!</p>
        </div>
      </Windows98Window>

      <footer className="w-full max-w-4xl mx-auto mt-6 text-center text-white text-xs font-vt">
        <p>© 2025 2133 Blinkie Forge | Windows 98 style interface</p>
        <p className="mt-1">Made by voidrane / 2133</p>
      </footer>
    </div>
  );
};

export default Index;
