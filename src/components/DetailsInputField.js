import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export const DetailsInput = props => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  title: {
    color: '#949CA5',
    fontSize: 18,
    marginHorizontal: 20,
  },
  textInput: {
    height: 41,
    width: 321,
    borderColor: '#D7D7D7',
    backgroundColor: '#F5F7FB',
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 10.5,
    padding: 10,
    color: '#3C4858',
  },
  textMultiline: {
    height: 90,
    width: 321,
    borderColor: '#D7D7D7',
    backgroundColor: '#F5F7FB',
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 10.5,
  },
});
