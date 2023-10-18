import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useButtonNavigation } from '../utils/navigateButton';
import {TextInputWithIcon} from '../utils/customInputBox';

const Login = () => {

    const navigateTo = useButtonNavigation();

    const handleRegistration = () => {
        // Handle the registration logic here, such as sending data to a server
        // For this example, we'll just log the user's details
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return(
        <View style={styles.background}>
            <View style={styles.brand}>
            <Text style={styles.brand_preffix}>Fitnest</Text>
            <Text style={styles.brand_suffix}>X</Text>
            </View>

            <View style={styles.greetings}>
                <Text style={styles.title}>Welcome back!</Text>
                <Text style={styles.description}>Login to your FitnestX account</Text>
            </View>
            
            <View style={styles.container}>
                <TextInputWithIcon placeholder="Email" keyboard={"email"}/>
                <TextInputWithIcon placeholder="Password" secure={true} />
            </View>
            
            <View style={styles.forgot_pass}>
                <TouchableOpacity onPress={() => navigateTo('ForgotPassword')}>
                    <Text style={styles.forgot_pass_text}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.login}>
            <TouchableOpacity style={styles.login_button} onPress={() => navigateTo('Success')}>
                <Image source={require('../../assets/images/auth/button.png')}/>
                <Text style={styles.login_text}>Login</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.register}>
                <Text style={styles.register_title}>Don't have an account yet? </Text>
                <TouchableOpacity onPress={() => navigateTo('Register')}>
                    <Text style={styles.register_link}>Register</Text>
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

    brand: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100
      },
  
      // Fitnest
    brand_preffix: {
        color: '#1D1617',
        fontSize: 48,
        // fontFamily: 'Poppins',
        fontWeight: '700'
        // wordWrap: 'break-word' 
      },
  
      // X
    brand_suffix: {
        color: '#92A3FD',
        fontSize: 50,
        // fontFamily: 'Poppins',
        fontWeight: '700'
        // wordWrap: 'break-word',
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
        paddingTop: 45,
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
        paddingTop:10
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
        paddingTop: 120
        
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

    

    //   // button
    // button: {
    //     elevation: 0,
    //     backgroundColor: "#000",
    //     borderRadius: 40,
    //     paddingVertical: 0,
    //     paddingHorizontal: 0,
    //     position: 'absolute', 
    //     bottom: 60
    //   },

    //   loader: {
    //     height: "80%",
    //     width: 60
    //   },
  
    //   // buttonText
    //   buttonText: {
    //     color: '#92A3FD',
    //     fontSize: 16,
    //     fontWeight: '700'
    //   }
});

export default Login
