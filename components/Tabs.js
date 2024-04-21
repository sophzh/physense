import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    Platform
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from '../pages/Home';
import Result from '../pages/Result';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown: false
            }}
            style = {styles.container}
        >
            <Tab.Screen name='homepage' component={HomePage} />
            <Tab.Screen name='result' component={Result} />
            {/* <Tab.Screen name='homepage' component={HomePage} /> */}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        padding: 5,
        backgroundColor: '#f0f4f8',
    },
})