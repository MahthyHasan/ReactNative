import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../action/authActions';

import { fonts } from '../../utils/fonts.js';
import Button from '../atoms/Button';
import colors from '../../utils/colors.js';

const HomePage = ({ navigation }) => {
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
      <Text style={styles.text}>Home Page</Text>
      <Button title="LogOut" onPress={handleLogout} />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
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
