import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import React from 'react'
import  colors from '../../utils/colors.js'
import { fonts } from '../../utils/fonts.js'

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style ={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 77,
        backgroundColor: colors.primary,
        width: 345,
        height: 48,
        borderRadius: 10,
        justifyContent: "center",
        textAlign: "center",
    },
    text: {
        color: colors.black,
        fontFamily: fonts.Bold,
        fontSize: 20,
        textAlign: "center",
        fontStyle: "Bold",
    }
})