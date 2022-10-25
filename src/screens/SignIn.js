import {React, useState} from 'react';
import {View, Image, StyleSheet, Text, ScrollView} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {SignInBtn} from '../components/CustomButton';
import Input from '../components/InputField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import { AddSignInInput } from '../components/InputField';

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

  const handleSignIn = async (values, {resetForm}) => {
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
          resetForm(initialValues='')
          navigation.navigate('Home');
        } 
      }else {
        alert('Enter Correct Mobile Number and MPin');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              mobileNumber: '',
              mpin: '',
            }}
            onSubmit={handleSignIn}>
            {({handleSubmit, isValid, values}) => (
              <>
                <Field
                  component={Input}
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  keyboardType="numeric"
                />
                <Field
                  component={AddSignInInput}
                  name="mpin"
                  placeholder="Mpin"
                  keyboardType="numeric"
                />
                <View style={styles.secContainer}>
                  <Text style={styles.textForgot}>Forgot your password?</Text>
                  <SignInBtn
                    onPress={handleSubmit}
                    label="SIGN IN"
                    disabled={!isValid}
                  />
                </View>
                <Image
                  source={require('../assets/images/fingerprintIcon.png')}
                  style={styles.imageFingerprint}
                />
                <View style={styles.viewFingerprint}>
                  <Text style={styles.or}>OR</Text>
                  <Text style={styles.option}>
                    USE YOUR FINGERPRINT TO LOGIN
                  </Text>
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 43,
    margin: 20

  },
  secContainer: {
    margin: 10,
  },
  textForgot: {
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 10,
    margin: 10,
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
    marginVertical: 20,
  },
  imageIcon: {
    marginTop: -53,
    marginLeft: 260,
  },
  viewFingerprint: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
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
