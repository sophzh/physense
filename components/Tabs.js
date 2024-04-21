import {
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Platform,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from '../pages/Home';
import Result from '../pages/Result';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                headerShadowVisible: false,
                tabBarStyle: {
                    position: 'absolute', // Position the tab bar
                    bottom: 15, // Distance from the bottom edge
                    left: 20, // Distance from the left edge
                    right: 20, // Distance from the right edge
                    backgroundColor: '#486580', // White background
                    borderWidth: 0,
                    borderRadius: 37, // Rounded corners
                    height: 88, // Height of the tab bar
                    ...styles.shadow
                  },
            }}
        >
            <Tab.Screen name='home' component={HomePage} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.label}>
                        <Image 
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#FFE2A0' : '#fff'
                            }}
                        />
                        <Text style={{
                            color: focused ? '#FFE2A0' : '#fff',
                            fontSize: 15,
                            fontWeight: '600'
                        }}>home</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name='result' component={Result}  options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.label}>
                        <Image 
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#FFE2A0' : '#fff'
                            }}
                        />
                        <Text style={{
                            color: focused ? '#FFE2A0' : '#fff',
                            fontSize: 15,
                            fontWeight: '600'
                        }}>result</Text>
                    </View>
                ),
            }}/>
            {/* <Tab.Screen name='homepage' component={HomePage} /> */}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    label: {
        paddingTop: 5,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 5,
    }
});