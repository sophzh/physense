import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import Header from '../components/Header';
import QuestionWithSlider from '../components/SlideComponent';


const HomePage = ({ navigation }) => {

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
          <QuestionWithSlider question="how happy are you" low='0' high='11'> </QuestionWithSlider>
          <QuestionWithSlider question="how sad are you" low='very' high='not'> </QuestionWithSlider>
          <QuestionWithSlider question="how stressed are you" low='very' high='not'> </QuestionWithSlider>
          <QuestionWithSlider question="where's your mind at" low='bad' high='perf'> </QuestionWithSlider>
          <QuestionWithSlider question="how much do u need a hug" low='a lot' high='ew'> </QuestionWithSlider>
          <QuestionWithSlider question="are you in pain" low='no' high='..yes..'> </QuestionWithSlider>
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