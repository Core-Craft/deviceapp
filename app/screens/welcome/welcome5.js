import { View, TouchableOpacity,Text, Pressable, Dimensions, Image, ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import { useButtonNavigation } from '../utils/navigateButton';
import { useFonts } from 'expo-font';

const Welcome5 = ({ navigation }) => {
  const navigateTo = useButtonNavigation();

  return (
    <View style={styles.background}>
      <Image  source={require('../../assets/images/welcome5/background.png')}
        style={styles.imageBackground} />

      <Text style={styles.title}>Improve Sleep Quality</Text>
      <Text style={styles.description}>Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigateTo('Welcome5')}>
        <Image
          source={require('../../assets/images/welcome3/button.png')} 
          style={styles.loader}
        />
      </TouchableOpacity>

    </View>
  )
}

const { width } = Dimensions.get('window'); // Get the device width
// console.log(width)

const styles = StyleSheet.create({

    background: {
      flex: 1,
      color: '#FFFFFF'
    },

    imageBackground: {
      top: 0,
      width: width,
      height: width + 40 ,
      overflow: 'hidden'
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
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 21,
      paddingHorizontal: 30,
      paddingTop: 15
    },

    button: {
      position: "absolute",
      bottom: 40,
      right: 40,
    },

    loader: {
      height: 60,
      width: 60
    },

  });

export default Welcome5