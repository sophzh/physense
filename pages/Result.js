import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import Header from '../components/Header';

const Result = ({ navigation }) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <Header navigation={navigation} />
      </View>
      <ScrollView 
        style={styles.scrollview}
        contentContainerStyle={styles.contentContainer}
      >

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
});

export default Result;