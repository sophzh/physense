import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    Platform,
    TouchableOpacity,
    Button
} from 'react-native';
import React from 'react';

export default function LoginEnter() {
    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.loginenter}>enter!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#08426B',
        borderRadius: 10,
        marginTop: 27,
    },
    loginenter: {
        fontSize: 17,
        fontWeight: '600',
        padding: 10,
        color: '#fff',
    },
})