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
import React, { useState } from 'react';
import axios from 'axios';


export default function Input() {

    const [username, setUsername] = useState('');

    function handleSubmit(){
            axios.post('http://localhost:3000/register', {name : username}).then(res=>console.log(res.data)).catch(e=>console.log(e));
    };

    return (
        <KeyboardAvoidingView 
            style={styles.inputGroup} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.container}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder=''
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

        <View style={styles.main}>
            <TouchableOpacity style={styles.container2} onPress={handleSubmit}>
                <Text style={styles.loginenter}>enter!</Text>
            </TouchableOpacity>
        </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    label: {
        padding: 7,
        fontWeight: 'bold',
    },
    inputGroup: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f8',
    },
    input: {
        padding: 15,
        borderColor: '#bdbdbd',
        borderWidth: 2,
        fontSize: 18,
        borderRadius: 20,
    },
    container: {
        width: '80%',
        padding: 5,
        backgroundColor: '#f0f4f8',
    },

    main: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
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