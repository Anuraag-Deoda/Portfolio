import React, { useState } from 'react';
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { IoColorPaletteOutline } from "react-icons/io5";

const ColorSwitcher = ({ onColorChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const colorSchemes = [
    {
      name: 'Green',
      primary400: '#29c26f',
      primary500: '#1B4329',
      primary600: '#34D67D',
      bgColor: '#203a2b'
    },
    {
      name: 'Purple',
      primary400: '#9747FF',
      primary500: '#4A2B82',
      primary600: '#B07CFF',
      bgColor: '#2B1B40'
    },
    {
      name: 'Blue',
      primary400: '#47B5FF',
      primary500: '#1B3C82',
      primary600: '#7CC8FF',
      bgColor: '#1B2440'
    },
    {
      name: 'Orange',
      primary400: '#FF8547',
      primary500: '#823C1B',
      primary600: '#FFA77C',
      bgColor: '#402B1B'
    }
  ];

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-grayscale-950 flex items-center justify-center text-grayscale-50 hover:text-primary-400 transition-colors"
        >
          <IoColorPaletteOutline size={24} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-16 right-0 bg-grayscale-950 p-4 rounded-lg shadow-lg"
            >
              <div className="flex flex-col gap-2">
                {colorSchemes.map((scheme) => (
                  <button
                    key={scheme.name}
                    onClick={() => {
                      onColorChange(scheme);
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 p-2 hover:bg-grayscale-900 rounded transition-all"
                  >
                    <div 
                      className="w-6 h-6 rounded-full" 
                      style={{ background: scheme.primary400 }}
                    />
                    <span className="text-grayscale-50 text-sm">{scheme.name}</span>
                  </button>
                ))}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
};

export default ColorSwitcher; 