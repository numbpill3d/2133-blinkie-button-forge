
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
        title="RuneScape Blinkie Forge" 
        className="w-full max-w-4xl mx-auto mb-4"
      >
        <h1 className="font-runescape text-rs-red text-3xl text-center mb-4">
          RuneScape Blinkie Forge
        </h1>
        <p className="text-center mb-6 font-vt">
          Create your own blinkies and 88x32 buttons with an Old School RuneScape theme!
        </p>
      </Windows98Window>

      <div className="w-full max-w-4xl mx-auto mb-4 flex space-x-2">
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

      {activeTab === 'blinkies' ? <BlinkieCreator /> : <ButtonCreator />}

      <Windows98Window 
        title="About" 
        className="w-full max-w-4xl mx-auto mt-4"
      >
        <div className="space-y-2 font-vt">
          <p>Blinkies were tiny 150×20 pixel animated GIFs used as badges to share interests and tell jokes! They were popular decorations in early-2000s in forums and personal websites.</p>
          <p>This generator lets you create your own RuneScape themed blinkies and buttons to add some 2007-era flair to your online presence!</p>
          
          <h3 className="font-bold mt-4">Blinkies are great for:</h3>
          <ul className="list-disc pl-6">
            <li>Forum signatures and Discord profiles</li>
            <li>Website decorations</li>
            <li>Sharing your love for Old School RuneScape</li>
            <li>Recreating that nostalgic internet vibe</li>
          </ul>
        </div>
      </Windows98Window>

      <footer className="w-full max-w-4xl mx-auto mt-6 text-center text-white text-xs font-vt">
        <p>© 2025 RuneScape Blinkie Forge | Windows 98 style interface</p>
      </footer>
    </div>
  );
};

export default Index;
