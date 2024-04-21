import React, { useContext } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import QuestionWithSlider from '../components/SlideComponent';

const HomePage = ({ navigation }) => {

const [sliderValues, setSliderValues] = useState([]); // Local state for slider values

const handleSliderChange = (index, value) => {
  setSliderValues((prevValues) => {
    const updatedValues = [...prevValues];
    updatedValues[index] = value; // Update the value at the correct index
    return updatedValues;
  });
};

// Calculate the average value of the sliders
const sum = sliderValues.reduce((acc, val) => acc + val, 0);
const average = sliderValues.length ? sum / sliderValues.length : 0;

  // Function to handle the button press
  const handleSubmit = async () => {
    try {
      await axios.post('https://your-backend-url.com/submit', { average }); // Replace with your backend URL
      console.log('Average value submitted to the backend.');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
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

          <View style={styles.main}>
            <TouchableOpacity style={styles.container2} onPress={handleSubmit}>
                <Text style={styles.submit}>submit!</Text>
            </TouchableOpacity>
          </View>

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