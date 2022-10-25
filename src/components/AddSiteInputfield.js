import {React, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const AddInputMultiline = props => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titleMulti}>{props.title}</Text>
        <TextInput
          style={styles.textMultiline}
          multiline={true}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          value={props.value}
        />
      </View>
    </View>
  );
};

export const AddSiteInput = props => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          style={styles.textInput}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    </View>
  );
};

export const AddPasswordInput = props => {

  const [icon, setIcon] = useState('eye');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.passwordContainer}>
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          style={styles.passwordInput}
          secureTextEntry={secureTextEntry}
        />
        <Icon
          name={icon}
          size={18}
          onPress={() => {
            setSecureTextEntry(!secureTextEntry);
            secureTextEntry ? setIcon('eye-off') : setIcon('eye');
          }}
        />
        </View>
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
  titleMulti: {
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
    fontSize: 14,
    marginHorizontal: 20,
    marginVertical: 10.5,
    padding: 10,
  },
  view: {
    flex: 1,
  },
  textMultiline: {
    height: 90,
    width: '85%',
    borderColor: '#D7D7D7',
    backgroundColor: '#F5F7FB',
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 14,
    marginHorizontal: 20,
    padding: 10,
    marginVertical: 10.5,

  },
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F7FB',
    justifyContent:'space-between',
    alignItems: 'center',
    height: 41,
    width: '85%',
    marginHorizontal: 20,
    borderWidth: 0.5,
    borderColor: '#D7D7D7',
    borderRadius: 5,
    margin: 15,
    paddingEnd: 20,
  },
  passwordInput:{
    height: 40,
    borderColor: '#D7D7D7',
    backgroundColor: '#F5F7FB',
    borderRadius: 4,
    margin: 10,
    fontSize: 14,
    marginVertical: 10.5,
  
  }
});
