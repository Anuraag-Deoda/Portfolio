import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

const initialColors = {
  name: 'Purple',
  primary400: '#9747FF',
  primary500: '#4A2B82',
  primary600: '#B07CFF',
  bgColor: '#2B1B40'
};

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState(initialColors);

  const updateColors = (newColors) => {
    setColors(newColors);
    document.body.style.backgroundColor = newColors.bgColor;
    
    // Update CSS variables
    document.documentElement.style.setProperty('--primary-400', newColors.primary400);
    document.documentElement.style.setProperty('--primary-500', newColors.primary500);
    document.documentElement.style.setProperty('--primary-600', newColors.primary600);
  };

  return (
    <ColorContext.Provider value={{ colors, updateColors }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColors = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColors must be used within a ColorProvider');
  }
  return context;
}; 