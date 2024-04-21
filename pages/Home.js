import React, { useContext } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import QuestionWithSlider from '../components/SlideComponent';
import { UsernameContext } from '../components/UsernameContext';
import axios from 'axios';

const HomePage = ({ navigation }) => {

const [username, setUsername] = useContext(UsernameContext);


const [sliderValues, setSliderValues] = useState([]); // Local state for slider values

const handleSliderChange = (index, value) => {
  setSliderValues((prevValues) => {
    const updatedValues = [...prevValues];
    updatedValues[index] = value; // Update the value at the correct index
    return updatedValues;
  });
};

const sum = sliderValues.reduce((acc, val) => acc + val, 0);

const average = sliderValues.length ? sum / sliderValues.length : 0;
console.log(sliderValues)
  // Function to handle the button press
  const handleSubmit = async () => {

      await axios.post('http://localhost:3000/AddHealthData', { health: average, name: username }).then(response => {
        console.log(response.data);
      }).catch(error=>{
        console.error('Error:', error);
      });
    }

  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <Header navigation={navigation} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <ScrollView 
        style={styles.scrollview}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.container}>
          <QuestionWithSlider 
            question="are you happy with today" 
            index={0}
            low='no' 
            high='very' 
            onSliderChange={handleSliderChange}> 
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="rate you current level of social connectedness" 
            index={1}
            low='0' 
            high='10' 
            onSliderChange={handleSliderChange}> 
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="how motivated are you feeling today"
            index={2} 
            low='0' 
            high='10' 
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
            high='always' 
            onSliderChange={handleSliderChange}>
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="have you felt overwhelmed today" 
            index={5}
            low='..yes' 
            high='no' 
            onSliderChange={handleSliderChange}> 
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="how relaxed do you feel right now" 
            index={6}
            low='0' 
            high='10' 
            onSliderChange={handleSliderChange}> 
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="where would you rate your level of optimism" 
            index={7}
            low='0' 
            high='10' 
            onSliderChange={handleSliderChange}> 
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="are you excited for tomorrow" 
            index={8}
            low='no' 
            high='yes!' 
            onSliderChange={handleSliderChange}> 
          </QuestionWithSlider>

          <QuestionWithSlider 
            question="how is your current life balance" 
            index={9}
            low='gone' 
            high='great' 
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
  username: {
    fontWeight: '500',
    paddingBottom: 10,
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
    marginBottom: 133,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomePage;