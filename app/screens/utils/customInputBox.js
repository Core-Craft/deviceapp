import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import {getKeyboardType} from './keyboard';

export const handleFocus = (inputName, setInputFocused) => {
    setInputFocused(true);
  };

export const handleBlur = (inputName, setInputFocused) => {
    setInputFocused(false);
  };


export const TextInputWithIcon = ({ placeholder , secure = false, keyboard}) => {
    const [userVar, setuserVar] = useState('');
    const [userVarFocused, setuserVarFocused] = useState(false);
    const keyboardType = getKeyboardType(keyboard);

  return (
    <View style={styles.form}>
        <TextInput
            keyboardType={keyboardType}
            secureTextEntry={secure} 
            style={[styles.input, userVarFocused ? styles.focusedInput : null,]}
            value={userVar}
            onChangeText={(value) => setuserVar(value)}
            placeholder={placeholder}
            placeholderTextColor='#ADA4A5'
            onFocus={() => handleFocus('userVar', setuserVarFocused)}
            onBlur={() => handleBlur('userVar', setuserVarFocused)}
            
        />
        {/* <View style={styles.icon}>
            <Image source={require('./Upload.png')} style={styles.icon}/>
        </View> */}
        
    </View>
  );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    // icon : {
    //     backgroundColor: "red",
    //     width: 30,
    //     height: 30,
    //     // marginLeft: 220,
    //     // position:'absolute',
    //     // marginLeft: 0, // Adjust the margin as needed
    // },

    // icon : {
    //     width: 30,
    //     height: 30,
    //     marginRight: 0,
    //     position:'absolute',
    //     marginLeft: 0, // Adjust the margin as needed
    // },

    input: {
        // position: "absolute",
        elevation: 5,
        backgroundColor: '#F7F8F8',
        fontSize: 14,
        // fontFamily: 'Poppins',
        fontWeight: '400',
        width: "80%",
        borderRadius: 30,
        margin:10,
        padding: 14,
        color: "#92A3FD"
      },

    focusedInput: {
        elevation: 10,
        borderWidth: 2,
        borderColor: "#92A3FD"
    },
});
