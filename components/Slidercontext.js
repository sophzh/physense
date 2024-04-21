import React, { createContext, useState } from 'react';

// Create the context
const SliderContext = createContext();

// Provide the context with state and setState
export const SliderProvider = ({ children }) => {
  const [sliderValues, setSliderValues] = useState([]); // Ensure this holds the latest state

  const addSliderValue = (index, value) => {
    setSliderValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value; // Replace the value at the given index
      return newValues;
    });
  };

  const clearSliderValues = () => {
    setSliderValues([0,0,0,0,0,0,0,0,0,0]);
  };

  return (
    <SliderContext.Provider value={{ sliderValues, addSliderValue, clearSliderValues }}>
      {children}
    </SliderContext.Provider>
  );
};

export default SliderContext;