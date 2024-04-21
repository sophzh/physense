import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import Header from '../components/Header';
import SliderContext from '../components/Slidercontext';


export default function Average() {

  const { sliderValues } = useContext(SliderContext); // Access the slider values from context

  console.log('Current slider values:', sliderValues); // Should show updated values

  // Calculate the average
  const sum = sliderValues.reduce((acc, val) => acc + val, 0);
  const average = sliderValues.length ? sum / sliderValues.length : 0;

    // Conditional message based on the average
    let message;
    if (average > 0.9) {
      message = "you're doing great! keep it up!";
    } else if (average > 0.75) {
      message = "good work today!";
    } else if (average > 0.60) {
      message = "you've got this!";
    } else if (average > 0.45) {
      message = "not bad!";
    } else if (average > 0.30) {
      message = "great job pushing through!";
    } else {
      message = "it's been a rough day... tomorrow will be better!";
    }

  return (
    <View style={styles.maincontainer}>
        <Text style={styles.averageText}>
          The average slider value is {(average * 100).toFixed(0)}
        </Text>
        <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "#fff",
  },
});