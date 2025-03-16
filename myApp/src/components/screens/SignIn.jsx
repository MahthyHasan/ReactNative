import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../action/authActions.js'; 
import colors from '../../utils/colors.js';
import { fonts } from '../../utils/fonts.js';
import Button from '../atoms/Button.js';
import TextInputField from '../atoms/TextInputField.js';
import PasswordInputFields from '../atoms/PasswordInputFields.js';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    try {
      await dispatch(loginUser(email, password));
      navigation.replace('Splash'); 
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My App</Text>
      <View style={styles.form}>
        <TextInputField label="Email" placeholder="Email" value={email} onChangeText={setEmail} />
        <PasswordInputFields label="Password" placeholder="Password" value={password} onChangeText={setPassword} />
      </View>
      <View>
        <Text style={styles.forgetPass}>Forget Password?</Text>
      </View>
      <View style={styles.loginButton}>
        <Button title="Sign In" onPress={handleSignIn} />
      </View>
      <View style={styles.createAccountLink}>
        <Text style={styles.createAccountLinkText}>
          Don’t have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal: 5,
  },
  text: {
    color: colors.white,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 124,
    fontFamily: fonts.Bold,
  },
  form: {
    justifyContent: 'center',
    marginTop: 85,
    gap: 18,
    alignItems: 'center',
  },
  forgetPass: {
    marginTop: 9,
    color: colors.white,
    textAlign: 'right',
    marginRight: 40,
    fontSize: 14,
    fontFamily: fonts.Normal,
  },
  loginButton: {
    alignItems: 'center',
    marginTop: 77,
  },
  createAccountLink: {
    flex: 1,
    alignItems: 'center',
    marginTop: 261,
  },
  createAccountLinkText: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fonts.Normal,
  },
  signUpLink: {
    color: colors.primary,
    fontSize: 15,
    fontFamily: fonts.Normal,
  },
});
