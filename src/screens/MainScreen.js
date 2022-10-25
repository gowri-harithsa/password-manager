import {React, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Flatlist from '../components/FlatlistComponents.';
import {HeaderMainScreen} from '../components/Headers';
import SearchField from '../components/SearchField';
import {useDispatch, useSelector} from 'react-redux';
import {filterSite} from '../redux/Reducer';
import {SubHeader} from '../components/Headers';

const Vault = ({navigation}) => {
  const siteDetails = useSelector(state => state.siteDetail.value);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  console.log('i am data', siteDetails);
  const handleAdd = () => {
    navigation.navigate('AddSite');
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMainScreen onPress={() => setClicked(!clicked)} />
      {clicked ? (
        <SearchField onChangeText={text => dispatch(filterSite(text))} />
      ) : (
        <SubHeader />
      )}
      <View style={styles.viewFlat}>
        <Flatlist navigation={navigation} />
      </View>
      <TouchableOpacity style={styles.touchableOpacity} onPress={handleAdd}>
        <Image
          source={require('../assets/images/add_btn.png')}
          style={styles.floatingButton}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  body: {
    width: '100%',
    height: 60,
    backgroundColor: '#0E85FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    marginLeft: 25,
  },
  contentIcon: {
    marginLeft: 35,
  },
  headerIcons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewFlat: {
    flex: 1,
    marginVertical: 10,
  },
  touchableOpacity: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 40,
  },
  floatingButton: {
    resizeMode: 'contain',
    width: 48,
    height: 48,
  },
});

export default Vault;
