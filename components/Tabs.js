import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from '../pages/Home';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    <Tab.Navigator>
        <Tab.Screen name='homepage' component={HomePage} />
    </Tab.Navigator>
}