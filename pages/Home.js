import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

import QuestionWithSlider from '../components/SlideComponent';


const HomePage = () => {
  const currentDate = new Date();

  // Get the hour of the day
  const currentHour = currentDate.getHours();
  // Define the greetings based on the time of the day
  let greeting;
  if (currentHour >= 5 && currentHour < 12) {
      greeting = 'good morning!';
  } else if (currentHour >= 12 && currentHour < 18) {
      greeting = 'good afternoon!';
  } else {
      greeting = 'good evening!';
  }

  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = currentDate.getDay();

  // Array of weekday names
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Get the current day of the week name
  const currentDayOfWeek = weekdays[dayOfWeek];

  // Format the date using Intl.DateTimeFormat
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

  const finalGreeting = `${greeting}`;
  return (
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{formattedDate}</Text>
          <Text>{finalGreeting}</Text>
        </View>

        <QuestionWithSlider question="how happy are you"> </QuestionWithSlider>
        <QuestionWithSlider question="how sad are you"> </QuestionWithSlider>
        <QuestionWithSlider question="how stressed are you"> </QuestionWithSlider>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F0F4F8",
    padding: 20,
    paddingTop: 100,
  },
  dateContainer: {
    alignSelf: 'flex-start', // Align to the left
    marginBottom: 10, // Add some margin
  },
  dateText: {
    fontSize: 30, // Make it bigger
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomePage;