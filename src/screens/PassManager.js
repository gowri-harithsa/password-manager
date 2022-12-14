import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TabNav from '../navigation/PassManagerNav';
import LinearGradient from 'react-native-linear-gradient';
const RegisterLogin = () => {
  return (
    <LinearGradient colors={['#20BBFF', '#0E85FF']} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={require('../assets/images/logo_name.png')}
            style={styles.imageLogo}
          />
        </View>
        <View style={styles.tabView}>
          <TabNav />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default RegisterLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLogo: {
    marginTop: 40,
    alignSelf: 'center'
  },
  tabView: {
    flex: 1,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 34,
    height: 485,
    width: '100%',
    alignSelf: 'center',
  },
});
