import React, { useContext } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import Header from '../components/Header';
import QuestionWithSlider from '../components/SlideComponent';
import SliderContext from '../components/Slidercontext';


const HomePage = ({ navigation }) => {

  const { addSliderValue } = useContext(SliderContext); // Get the context function to add slider values

  const handleSliderChange = (value) => {
    addSliderValue(value); // Add the slider value to context
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <Header navigation={navigation} />
      </View>
      <ScrollView 
        style={styles.scrollview}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.container}>
          <QuestionWithSlider 
            question="how happy are you" 
            index={0}
            low='0' 
            high='11' 
            onSliderChange={handleSliderChange}> 
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="how sad are you" 
            index={1}
            low='very' 
            high='not' 
            onSliderChange={handleSliderChange}> 
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="how stressed are you"
            index={2} 
            low='very' 
            high='not' 
            onSliderChange={handleSliderChange}> 
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="where's your mind at" 
            index={3}
            low='bad' 
            high='perf' 
            onSliderChange={handleSliderChange}>
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="how much do u need a hug" 
            index={4}
            low='a lot' 
            high='ew' 
            onSliderChange={handleSliderChange}>
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="are you in pain" 
            index={5}
            low='no' 
            high='..yes..' 
            onSliderChange={handleSliderChange}> 
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="q7" 
            index={6}
            low='0' 
            high='11' 
            onSliderChange={handleSliderChange}> 
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="q8" 
            index={7}
            low='0' 
            high='11' 
            onSliderChange={handleSliderChange}> 
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="q9" 
            index={8}
            low='0' 
            high='11' 
            onSliderChange={handleSliderChange}> 
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="q10" 
            index={9}
            low='0' 
            high='11' 
            onSliderChange={handleSliderChange}> 
          </QuestionWithSlider>

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    paddingTop: 55,
    backgroundColor: "#F0F4F8",

  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 17,
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollview: {
    backgroundColor: "#F0F4F8",
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F0F4F8",
    paddingHorizontal: 20,
    paddingBottom: 133,
    marginBottom: 88,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomePage;