import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

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

export const HeaderMainscreen = () => {
  const [Clicked, setClicked] = useState(true);
  const handlesearch = () => {
    setClicked(false);
  };

  return {
    title: ' ',
    headerStyle: {
      backgroundColor: '#0E85FF',
    },
    headerTintColor: '#FFFFFF',
    headerBackTitleVisible: false,
    headerLeft: () => (
      <View style={styles.headerMenu}>
        <Image source={require('../assets/images/burger_menu.png')} />
        <Image
          source={require('../assets/images/passManager.png')}
          style={styles.content}
        />
      </View>
    ),
    headerRight: () => (
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={handlesearch}>
          <Image
            source={require('../assets/images/search.png')}
            style={styles.contentIcon}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/images/sync_icn.png')}
          style={styles.contentIcon}
        />
        <Image
          source={require('../assets/images/profile.png')}
          style={styles.contentIcon}
        />
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  contentIcon: {
    marginLeft: 35,
  },
  headerIcons: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    marginLeft: 25,
  },
});
