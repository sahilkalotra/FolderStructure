import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../utils';

const Tab = createBottomTabNavigator<RootStackParamList>();
const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
        </Tab.Navigator>
    );
}
export default TabNavigator