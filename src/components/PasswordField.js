import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';

const Password = ({placeholder, keyboardType}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        keyboardType={keyboardType}
        secureTextEntry
      />
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textInput: {
    height: 54,
    width: 300,
    border: 'rgba(208,208,208,0.5)',
    paddingVertical: 17,
    paddingHorizontal: 22,
    backgroundColor: 'white',
    borderRadius: 4,
    fontSize: 16,
    marginVertical: 15,
  },
  imageEye: {
    width: 15,
    height: 10,
    marginLeft: 260,
  },
});
