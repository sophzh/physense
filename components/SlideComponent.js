import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'; // Import the slider component

const QuestionWithSlider = ({ question }) => {
  const [sliderValue, setSliderValue] = useState(0); // State to hold slider value
  const[lineColor, setLineColor] = useState("#F0F4F8");

  // Function to handle slider value change
  const handleSliderChange = (value) => {
    setSliderValue(value);

  // Change color based on slider value
  if (value > 0.66) {
    setLineColor('#95D1B0');
  } else if (value > 0.33) {
    setLineColor('#FFCB66')
  } else {
    setLineColor('#ED9CC3')
  }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
      <Slider
        style={{width: 320, height: 40}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor={lineColor}
        maximumTrackTintColor="#F0F4F8"
        value={sliderValue}
        onValueChange={handleSliderChange}
        // Other props as needed
      />
      <Text style={styles.sliderValue}>{sliderValue.toString().slice(0, 4)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 12,
    width: 360,
    height: 169
  },
  questionText: {
    fontSize: 14,
    marginBottom: 20,
  },
  sliderValue: {
    marginTop: 10,
    fontSize: 12,
  },
});

export default QuestionWithSlider;
