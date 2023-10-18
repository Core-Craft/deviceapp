import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useButtonNavigation } from '../utils/navigateButton';
import {TextInputWithIcon} from '../utils/customInputBox';

const Success = () => {

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
            
            <View style={styles.image_container}>
                <Image  source={require('../../assets/images/auth/success.png')}
                style={styles.imageBackground} />
            </View>

            <View style={styles.greetings}>
                <Text style={styles.title}>Welcome, Stefani</Text>
                <Text style={styles.description}>You are all set now, let’s reach your goals together with us</Text>
            </View>
            
            <View style={styles.login}>
            <TouchableOpacity style={styles.login_button} onPress={() => navigateTo('Login')}>
                <Image source={require('../../assets/images/auth/button.png')}/>
                <Text style={styles.login_text}>Go To Home</Text>
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

    image_container: {
        marginTop: 120,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "red",
    },

    imageBackground: {
        // top: 80,
        // left:10,
        width: 278,
        height: 304 ,
        overflow: 'hidden'
      },

    greetings: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 20
      },

    title: {
        color: '#1D1617',
        fontSize: 24,
        // fontFamily: 'Poppins',
        fontWeight: '700',
        // wordWrap: 'break-word' 
        paddingHorizontal: 30,
        marginTop:60,
        // paddingTop: 95,
      },

    description: {
        textAlign: "center",
        color: "#7B6F72",
        // fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '600',
        // lineHeight: ,
        paddingHorizontal: 40,
        paddingTop: 5
    },
    
    login: {
        paddingTop:120
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
     }
});

export default Success
