//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Header = ({onPress}) => {
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
});

export default Header;
