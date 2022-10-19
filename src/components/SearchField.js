import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const SearchField = () => {
  return (
    <View style={styles.SectionStyle}>
      <TextInput placeholder="Type Keywords to search"></TextInput>
      <Icon name="arrow-right" size={25} color="#0E85FF" />
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
    width: 390,
    borderRadius: 4,
    justifyContent: 'space-between',
    fontWeight: 'bold',
    padding: 5,
  },
});
