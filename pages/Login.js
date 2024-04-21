import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput
} from 'react-native';
import React from 'react';

import Input from './Input'

export default function Login({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>physense - LA HACKS</Text>
            <Text style={styles.welcome}>welcome!</Text>
            <Input navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#08426B',
        fontWeight: '700',
        fontSize: 30,
        paddingBottom: 30,
    },
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