import {React, useRef, useState} from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchField = ({onChangeText, onPress}) => {
  
  return (
    <View style={styles.SectionStyle}>
      <TextInput
        placeholder="Type Keywords to search"
        onChangeText={onChangeText}></TextInput>
      <TouchableOpacity onPress={onPress}>
        <Icon name="arrow-right" size={25} color="#0E85FF" />
      </TouchableOpacity>
    </View>
  );
};
export default SearchField;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 55,
    width: '100%',
    borderRadius: 4,
    justifyContent: 'space-between',
    fontWeight: 'bold',
    paddingEnd: 5,
    paddingStart: 15,
    paddingEnd: 10,

  },
});
