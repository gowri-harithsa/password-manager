import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {filterDropDown} from '../redux/Reducer';

export const HeaderOption = () => {
  return {
    headerTitleStyle: {
      fontWeight: '600',
    },
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#0E85FF',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    headerBackTitleVisible: false,
    headerShadowVisible: true,
  };
};

export const HeaderMainScreen = ({onPress}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerMenu}>
        <Image source={require('../assets/images/burger_menu.png')} />
        <Image
          source={require('../assets/images/passManager.png')}
          style={styles.content}
        />
      </View>
      <View style={styles.headerIcons}>
        <View>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../assets/images/search.png')}
              style={styles.contentIcon}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require('../assets/images/sync_icn.png')}
          style={styles.contentIcon}
        />
        <Image
          source={require('../assets/images/profile.png')}
          style={styles.contentIcon}
        />
      </View>
    </View>
  );
};

export const SubHeader = () => {
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState('All');
  const data = useSelector(state => state.siteDetail.value);
  const dispatch = useDispatch();
  const sitesFolder = ['All', 'Social Media', 'Shopping Sites'];

  const setDropdown = () => {
    setVisible(!visible);
  };
  const handleFolders = folder => {
    setItem(folder);
    dispatch(filterDropDown(folder));
    setVisible(false);
  };
  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={styles.dropdownContainer}>
          {sitesFolder.map(folder => (
            <TouchableOpacity
              onPress={() => {
                handleFolders(folder);
              }}
              key = {folder}>
              <Text style={styles.dropdownText}>{folder}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };
  return (
    <View>
      <View style={styles.siteMenu}>
        <Text style={styles.siteText}>Sites</Text>
        <View style={styles.iconView}>
          <Text style={styles.folderText}>{item}</Text>
          <Pressable style={styles.ovalButton} disabled={true}>
            <Text style={styles.ovalText}>0{data.length}</Text>
          </Pressable>
          <TouchableOpacity onPress={setDropdown}>
            <Image
              source={require('../assets/images/thumbnailWhite.png')}
              style={styles.thumbnail}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.borderBottom}></View>
      {renderDropdown()}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#0E85FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.9,
    padding: 10,
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
  siteMenu: {
    flexDirection: 'row',
    marginVertical: 22,
    borderBottomColor: '#FFA136',
    justifyContent: 'space-between',
  },
  iconView: {
    flexDirection: 'row',
    paddingEnd: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
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
  folderText: {
    height: 33,
    color: '#3C4857',
    fontSize: 18,
    lineHeight: 33,
    marginLeft: 130,
  },
  ovalButton: {
    height: 31,
    width: 31,
    borderRadius: 15,
    backgroundColor: '#0E85FF',
    marginLeft: 5,
    paddingHorizontal: 4,
    paddingVertical: 5,
  },
  ovalText: {
    height: 22,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  thumbnail: {
    marginLeft: 7,
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
  dropdownContainer: {
    marginVertical: 20,
    alignSelf: 'flex-end',
    marginEnd: 15,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: '#0E85FF',
    backgroundColor: '#FFFFFF'
  },
  dropdownText: {
    padding: 5,
  },
});
