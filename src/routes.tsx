import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './Screens/Home/Home';
//import { Passwords } from './screens/Passwords/Passwords';

import { Ionicons } from '@expo/vector-icons'
import { Cotacoes } from "./Screens/Cotacoes/Cotacoes";

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#281637",
                    height: 60,
                    borderTopWidth: 2,
                    borderTopColor: "#e9a429"

                }
            }}>
            <Tab.Screen
                name="principal"
                component={Home}
                options={{

                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons size={30} color={"#e9a429"} name="home" />
                        }
                        return <Ionicons size={30} color={"#e9a429"} name="home-outline" />

                    }
                }}
            />

            <Tab.Screen
                name="cotacoes"
                component={Cotacoes}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons size={30} color={"#e9a429"} name="lock-closed" />
                        }
                        return <Ionicons size={30} color={"#e9a429"} name="lock-closed-outline" />

                    }
                }}
            />
        </Tab.Navigator>
    )
}
