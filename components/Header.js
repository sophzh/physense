import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';


export default function Header({ navigation }) {

    const handleLogout = () => {
        // Logic for handling logout (if any server-side operations are needed)
        navigation.popToTop();
    };

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

    return(
        <View style={styles.dateContainer}>
            <View style={styles.main}>
                <TouchableOpacity style={styles.logout} onPress={handleLogout}>
                    <Text style={styles.enter}>logout!</Text>
                </TouchableOpacity>
            </View>
          <Text style={styles.dateText}>{formattedDate}</Text>
          <Text style={styles.greeting}>{finalGreeting}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        justifyContent: 'left',
        alignItems: 'left',
        marginBottom: 10,
    },
    logout: {
        fontSize: 10,
        borderRadius: 20, // Rounded corners
        paddingHorizontal: 10, // Padding for the button
        paddingVertical: 3,
        backgroundColor: '#fff',
    },
    dateContainer: {
        alignSelf: 'flex-start', // Align to the left
        marginBottom: 10, // Add some margin
    },
    dateText: {
        fontSize: 30, // Make it bigger
        fontWeight: 'bold',
    },
    greeting: {
        paddingTop: 10,
        color: '#486580',
    },
    enter: {
        color: '#486580',
        fontWeight: '600',
        fontSize: 10,
    }, 
});