import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export const SignInBtn = props => {
  return (
    <View>
      <Pressable
        style={styles.btn}
        onPress={props.onPress}
        disabled={props.disabled}>
        <Text style={styles.text}>{props.label}</Text>
      </Pressable>
    </View>
  );
};

export const ResetBtn = props => {
  return (
    <Pressable style={styles.resetBtn} onPress={props.onPress}>
      <Text style={styles.resetText}>{props.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#0E85FF',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    height: 24,
    width: 78,
    letterSpacing: 1.2,
  },
  btn: {
    width: 134,
    height: 44,
    alignItems: 'center',
    paddingVertical: 9,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 20,
  },
  resetText: {
    color: 'white',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    height: 24,
    width: 75,
    letterSpacing: 1.2,
    textAlign: 'center',
  },
  resetBtn: {
    width: '50%',
    height: 44,
    backgroundColor: '#0E85FF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0.5,
  },
});
