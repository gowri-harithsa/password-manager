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
import Header from '../components/HeaderBar';
import SearchField from '../components/SearchField';
import {useDispatch} from 'react-redux';
import {filterSite} from '../redux/Reducer';

const Vault = ({navigation}) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const handleAdd = () => {
    navigation.navigate('AddSite');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => setClicked(!clicked)} />
      {clicked ? (
        <SearchField onChangeText={text => dispatch(filterSite(text))} />
      ) : (
        <>
          <View style={styles.siteMenu}>
            <Text style={styles.siteText}>Sites</Text>
            <View style={styles.iconView}>
              <Text style={styles.socialText}>Social Media</Text>
              <Pressable style={styles.ovalButton} disabled={true}>
                <Text style={styles.ovalText}>07</Text>
              </Pressable>
              <Image
                source={require('../assets/images/thumbnailWhite.png')}
                style={styles.thumbnail}
              />
            </View>
          </View>
          <View style={styles.borderBottom}></View>
        </>
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
  siteMenu: {
    flexDirection: 'row',
    marginVertical: 22,
    borderBottomColor: '#FFA136',
    justifyContent: 'space-between',
  },
  iconView: {
    flexDirection: 'row', 
    paddingEnd: 10,
  },
  siteText: {
    height: 33,
    width: 55,
    color: '#3C4857',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 33, 
    marginLeft: 15,
  },
  socialText: {
    height: 33,
    width: 113,
    color: '#3C4857',
    fontSize: 19.2,
    lineHeight: 33,
    marginLeft: 130,
  },
  ovalButton: {
    height: 29.6,
    width: 29.6,
    borderRadius: 15,
    backgroundColor: '#0E85FF',
    marginLeft: 5,
    paddingHorizontal: 4,
    paddingVertical: 5,
  },
  ovalText: {
    height: 22,
    width: 19,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  thumbnail: {
    marginVertical: 10,
    marginLeft: 7,
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
  borderBottom: {
    borderBottomWidth: 4,
    height: 3.2,
    width: 30,
    borderBottomColor: '#FFA136',
    borderRadius: 1.6,
    marginLeft: 17,
    marginVertical: -14,
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
