import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {SignInBtn} from '../components/CustomButton';
import Input from '../components/InputField';
import AsyncStorage from '@react-native-async-storage/async-storage';

const signUpValidationSchema = yup.object().shape({
  mobileNumber: yup
    .string()
    .matches(/(\d){10}\b/, 'Enter a valid mobile number')
    .required('Mobile Number is required'),
  mpin: yup
    .string()
    .matches(/(\d){4}\b/, 'mPin must have a number')
    .max(4, ({max}) => `mPin must be${max} of characters`)
    .required('Mpin is required'),
  confirmMpin: yup
    .string()
    .oneOf([yup.ref('mpin')], 'Mpin do not match')
    .required('Confirm Mpin is required'),
});

const Login = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            mobileNumber: '',
            mpin: '',
            confirmMpin: '',
          }}
          onSubmit={async values => {
            console.log(values);
            try {
              const jsonValue = JSON.stringify(values);
              await AsyncStorage.setItem(values.mobileNumber, jsonValue);
              alert('Added Succesfully');
              navigation.navigate('Sign In');
            } catch (err) {
              console.log(err);
            }
          }}>
          {({handleSubmit, isValid}) => (
            <>
              <Field
                component={Input}
                name="mobileNumber"
                placeholder="Mobile Number"
                keyboardType="numeric"
              />
              <Field
                component={Input}
                name="mpin"
                placeholder="Mpin"
                keyboardType="numeric"
              />
              <Field
                component={Input}
                name="confirmMpin"
                placeholder="Confirm Mpin"
                keyboardType="numeric"
                secureTextEntry="true"
              />
              <SignInBtn
                onPress={handleSubmit}
                label="SIGN UP"
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 43,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 21,
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
  imageFingerprint: {
    width: 52.13,
    height: 54,
    alignSelf: 'center',
    marginVertical: 60,
  },
  viewFingerprint: {
    flexDirection: 'row',
    marginVertical: -40,
  },
  or: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0,
    color: 'white',
  },
  option: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.12,
    lineHeight: 24,
    marginLeft: 8,
  },
  error: {
    fontSize: 10,
    color: 'red',
  },
});
