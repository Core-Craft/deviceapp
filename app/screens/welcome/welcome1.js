import { View, TouchableOpacity,Text, Pressable, Image, ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font';
import { useButtonNavigation } from '../utils/navigateButton';

const Welcome1 = () => {

    const navigateTo = useButtonNavigation();

    return (
      <ImageBackground
      source={require('../../assets/images/welcome1/background.png')}
      style={styles.background}
      >
        <View style={styles.brand}>
          <Text style={styles.brand_preffix}>Fitnest</Text>
          <Text style={styles.brand_suffix}>X</Text>
        </View>
        
        <SafeAreaView style={styles.slogan}>
          <Text style={styles.brand_slogan}>Everybody Can Train</Text>
        </SafeAreaView>
          
          <TouchableOpacity style={styles.button} onPress={() => navigateTo('Welcome2')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>

      </ImageBackground>

                
    )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    brand: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },

    // Fitnest
    brand_preffix: {
      color: '#1D1617',
      fontSize: 36,
      // fontFamily: 'Poppins',
      fontWeight: '700'
      // wordWrap: 'break-word' 
    },

    // X
    brand_suffix: {
      color: 'white',
      fontSize: 50,
      // fontFamily: 'Poppins',
      fontWeight: '700'
      // wordWrap: 'break-word',
    },

    // slogan
    slogan: {
      justifyContent: 'center',
      alignItems: 'center'
    },

    // brand slogan
    brand_slogan: {
      color: '#7B6F72',
      fontSize: 18,
      // fontFamily: 'Poppins',
      fontWeight: '400'
      // wordWrap: 'break-word',
    },

    // button
    button: {
      elevation: 8,
      backgroundColor: "#FFFFFF",
      borderRadius: 40,
      paddingVertical: 18,
      paddingHorizontal: 70,
      position: 'absolute', 
      bottom: 60
    },

    // buttonText
    buttonText: {
      color: '#92A3FD',
      fontSize: 16,
      fontWeight: '700'
    }

  });

export default Welcome1