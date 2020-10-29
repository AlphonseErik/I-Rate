import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'


const Button = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onHandleClick}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#f05555',
      color: '#ffffff',
      padding: 10,
      marginTop: 16,
      marginLeft: 35,
      marginRight: 35,
    },
    text: {
      color: '#ffffff',
    },
  });
  

export default Button
