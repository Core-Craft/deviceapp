import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useButtonNavigation } from '../utils/navigateButton';
import {TextInputWithIcon} from '../utils/customInputBox';

const Register = () => {

    const navigateTo = useButtonNavigation();

    const handleRegistration = () => {
        // Handle the registration logic here, such as sending data to a server
        // For this example, we'll just log the user's details
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return(
        <View style={styles.background}>
          
            <View style={styles.navigation}>
              <TouchableOpacity onPress={() => navigateTo('Login')}>
                    <Image style={styles.arrow} source={require('../../assets/icons/left-arrow.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.greetings}>
                <Text style={styles.title}>Let's get started!</Text>
                <Text style={styles.description}>Create an account to get all features</Text>
            </View>
            
            <View style={styles.container}>
                <TextInputWithIcon placeholder="Full name"/>
                <TextInputWithIcon placeholder="Email" keyboard={"email"}/>
                <TextInputWithIcon placeholder="Phone" keyboard={"phone"} default_value='+91-'/>
                <TextInputWithIcon placeholder="Password" secure={true} />
                <TextInputWithIcon placeholder="Confirm Password" secure={true} />
            </View>
            
            <View style={styles.login}>
            <TouchableOpacity style={styles.login_button} onPress={() => navigateTo('Register')}>
                <Image source={require('../../assets/images/auth/button.png')}/>
                <Text style={styles.login_text}>Register</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.register}>
                <Text style={styles.register_title}>Already have an account?  </Text>
                <TouchableOpacity onPress={() => navigateTo('Login')}>
                    <Text style={styles.register_link}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },

    navigation: {
      position: "absolute",
      marginTop:60,
      marginLeft:20,
    },

    arrow: {
      width: 40,
      height: 40,
    },

    greetings: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
      },

    title: {
        color: '#1D1617',
        fontSize: 24,
        // fontFamily: 'Poppins',
        fontWeight: '700',
        // wordWrap: 'break-word' 
        paddingHorizontal: 30,
        marginTop:100,
        // paddingTop: 95,
      },

    description: {
        color: "#7B6F72",
        // fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '600',
        // lineHeight: ,
        paddingHorizontal: 30,
        paddingTop: 5
    },

    container: {
        paddingTop: 30
    },

    forgot_pass: {
        alignItems: 'flex-end',
        margin: 10
    },
    
    forgot_pass_text: {
        // fontFamily: 'Poppins',
        fontSize: 14,
        color: '#ADA4A5',
        paddingHorizontal: 35,
    },
    
    login: {
        paddingTop:20
     },
 
     login_button: {
         justifyContent: 'center',
         alignItems: 'center',
     },
 
     login_text: {
        position: 'absolute',
        color: '#FFFFFF',
        // fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700' 
     },
    
    register:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
        
    },

    register_title:{
        color: '#ADA4A5',
        // fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21
    },

    register_link: {
        color: '#000000',
        // fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21
    },
});

export default Register
