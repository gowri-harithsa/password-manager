import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

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

export const DropDownInput = props => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <SelectList data={props.data} setSelected={props.setSelected} boxStyles={styles.dropDownBox} inputStyles={styles.dropDropInput} dropdownStyles={styles.dropDown} values={props.selected}/>

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
    width: '85%',
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
  dropDownBox: {
    height: 41,
    width: '85%',
    borderColor: '#D7D7D7',
    backgroundColor: '#F5F7FB',
    borderRadius: 4,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10.5,
    padding: 10,
  },
  dropDropInput: {
    fontSize: 13,
    fontWeight: '200',
    color: 'bol',
    height: 20,
    alignSelf: 'center'
  },
  dropDown: {
    width: '85%',
    borderColor: '#D7D7D7',
    backgroundColor: '#F5F7FB',
    borderRadius: 4,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10.5,
    padding: 10,
  },
});
