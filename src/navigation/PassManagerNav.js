import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Login from '../screens/SignUp';
import Register from '../screens/SignIn';
const Tab = createMaterialTopTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 39,
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#FFA222',
          marginLeft: 35,
          width: 81,
          height: 4,
          borderRadius: 3.5,
          marginVertical: -6,
        },
        tabBarLabelStyle: {
          color: 'white',
          fontSize: 20,
          fontWeight: '600',
          letterSpacing: 1.2,
        },
      }}>
      <Tab.Screen name="Sign In" component={Register} />
      <Tab.Screen name="Sign Up" component={Login} />
    </Tab.Navigator>
  );
};

export default TabNav;
