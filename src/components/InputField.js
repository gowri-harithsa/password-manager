import {React, useState} from 'react';
import {Text, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Input = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <TextInput
        style={[styles.textInput, hasError && styles.errorInput]}
        value={value}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

export default Input;

export const AddSignInInput = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const [icon, setIcon] = useState('eye');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const hasError = errors[name] && touched[name];

  return (
    <>
      <View style={styles.passContainer}>
      <TextInput
        style={[styles.textInputPass, hasError && styles.errorInput]}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      <Icon
          name={icon}
          size={18}
          color={'grey'}
          onPress={() => {
            setSecureTextEntry(!secureTextEntry);
            secureTextEntry ? setIcon('eye') : setIcon('eye-off');
          }}
        />
      </View>
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 54,
    margin: 20,
    border: 'rgba(208,208,208,0.5)',
    paddingVertical: 17,
    paddingHorizontal: 22,
    backgroundColor: 'white',
    borderRadius: 4,
    fontSize: 16,
    marginTop: 15,
  },
  passContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 54,
    borderRadius: 5,
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginHorizontal: 30,
    paddingEnd: 21,
    marginVertical: 15,

  },
  textInputPass: {
    height: 40,
    width:'70%',
    margin: 20,
    border: 'rgba(208,208,208,0.5)',
    backgroundColor: 'white',
    borderRadius: 4,
    fontSize: 16,
    marginVertical: 15,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    margin: 10,
    alignSelf: 'center'
  },
  errorInput: {
    borderColor: 'red',
  },
  
});
