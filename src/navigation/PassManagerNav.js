import * as React from 'react';
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
          height: 4,
          borderRadius: 3.5,
          marginStart: '15%',
          marginVertical: -6,
          width: 35,
        },
        tabBarLabelStyle: {
          color: 'white',
          fontSize: 20,
          fontWeight: '600',
          letterSpacing: 1.2,
          alignItems: 'center'
        },
      }}>
      <Tab.Screen name="Sign In" component={Register} />
      <Tab.Screen name="Sign Up" component={Login} />
    </Tab.Navigator>
  );
};

export default TabNav;
