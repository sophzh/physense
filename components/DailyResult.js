import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import FlipCard from 'react-native-flip-card';
import Average from './Average';

const DailyResult = ({ average }) => {
  
  return (
    <View style={styles.maincontainer}>
    <FlipCard
    style={styles.flipcard}
    friction={6}
    perspective={1000}
    flipHorizontal={true}
    flipVertical={false}
    flip={false}
    clickable={true}
    >
         <View style={styles.face}>
        <View style={styles.faceContent}>
          <Text style={styles.centeredText}>Click to view your daily health score!</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/ewi-icon.png')} style={styles.image}/>
        </View>
        </View>

        <View style={styles.back}>
          <View style={styles.backContent}> 
            <Average style={styles.centeredText} />
          </View>
        </View>
    </FlipCard>
    </View>
  );
};

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: '#F0F4F8'
    },
    flipcard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 12,
        width: 340,
        height: 340,
      },
      face: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      faceContent: {
        flex: 1,
        justifyContent: 'center',
      },
      back: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      backContent: {
        flex: 1,
        justifyContent: 'center',
      },
      centeredText: {
        textAlign: 'center',
        fontSize: 15,
      },
      imageContainer: {
        position: 'absolute',
        bottom: 0,
        left: -40,
      },
      image: {
        width: 150,
        height: 150,
      }
});

export default DailyResult;
