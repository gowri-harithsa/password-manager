import {React, useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {SignInBtn} from '../components/CustomButton';
import Input from '../components/InputField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

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
});

const Register = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            mobileNumber: '',
            mpin: '',
          }}
          onSubmit={async values => {
            try {
              const jsonValue = await AsyncStorage.getItem(values.mobileNumber);
              if (jsonValue != null) {
                parseValue = JSON.parse(jsonValue);

                if (
                  values.mobileNumber === parseValue.mobileNumber &&
                  values.mpin === parseValue.mpin
                ) {
                  Toast.show(
                    `Congrats!!! Success \n Signin to access the vault`,
                    Toast.SHORT,
                  );
                  navigation.navigate('Home');
                } else {
                  alert('Enter Correct Mobile Number and MPin');
                }
              }
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
                secureTextEntry="true"
              />
              <Text style={styles.textForgot}>Forgot your password?</Text>
              <SignInBtn
                onPress={handleSubmit}
                label="SIGN IN"
                disabled={!isValid}
              />
              <Image
                source={require('../assets/images/fingerprintIcon.png')}
                style={styles.imageFingerprint}
              />
              <View style={styles.viewFingerprint}>
                <Text style={styles.or}>OR</Text>
                <Text style={styles.option}>USE YOUR FINGERPRINT TO LOGIN</Text>
              </View>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 43,
  },
  textForgot: {
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
});
