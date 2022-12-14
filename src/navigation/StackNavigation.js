import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Vault from '../screens/MainScreen';
import RegisterLogin from '../screens/PassManager.js';
import RNBootSplash from 'react-native-bootsplash';
import AddSite from '../screens/AddSiteScreen';
import Flatlist from '../components/FlatlistComponents.';
import Details from '../screens/DetailsScreen';
import {HeaderOption} from '../components/Headers';
import Edit from '../screens/EditScreen';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const theme = {
  colors: {
    background: 'transparent',
  },
};

const StackNav = () => {
  const state = useSelector(state => state.userState.userState);

  return (
    <NavigationContainer theme={theme} onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator>
        {!state ? (
          <Stack.Screen
            name="Register"
            component={RegisterLogin}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Vault}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="FlatlistComponent"
              component={Flatlist}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddSite"
              component={AddSite}
              options={HeaderOption}
            />
            <Stack.Screen
              name="EditSite"
              component={Edit}
              options={HeaderOption}
            />

            <Stack.Screen
              name="Site Details"
              component={Details}
              options={({navigation}) => ({
                headerTitleStyle: {
                  fontWeight: '600',
                },
                headerTintColor: '#ffffff',
                headerStyle: {
                  backgroundColor: '#0E85FF',
                },
                headerBackTitleVisible: false,
              })}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNav;
