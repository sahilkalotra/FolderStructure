import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../utils';
import HomeScreen from '../../screens/homeScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();
const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
             <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
export default TabNavigator