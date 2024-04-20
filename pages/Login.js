import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput
} from 'react-native';
import React from 'react';

import Input from './Input'

export default function Login() {
    return(
        <View style={styles.container}>
            <Text style={styles.welcome}>welcome!</Text>
            <Input />
        </View>
    );
}

const styles = StyleSheet.create({
    welcome: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#486580',
        fontWeight: '700',
        fontSize: 20,
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
        justifyContent: 'center',
    },
});