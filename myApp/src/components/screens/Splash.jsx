import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/authActions';

import { fonts } from '../../utils/fonts.js';
import Button from '../atoms/Button';
import { colors } from '../../utils/colours.js';

const Splash = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      console.log("User logged out");
      navigation.replace("HomePage"); // Navigate to Login screen after logout
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My App</Text>
      <Button title="LogOut" onPress={handleLogout} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.secondary,
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontSize: 24,
    textAlign: "center",
    marginTop: 100,
    fontFamily: fonts.Bold,
  },
});
