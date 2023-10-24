import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';


export const DropdownComponent = ({data}) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    // const renderLabel = () => {
    //   if (value || isFocus) {
    //     return (
    //       <Text style={[styles.label, isFocus && { color: 'blue' }]}>
    //         Dropdown label
    //       </Text>
    //     );
    //   }
    //   return null;
    // };

    return (
      <View style={styles.container}>
        {/* {renderLabel()} */}
        <Dropdown
          style={[styles.dropdown, isFocus ? styles.focusedInput : null,]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          containerStyle={styles.listStyle}
          itemTextStyle={styles.listStyle}
        //   inputSearchStyle={styles.inputSearchStyle}
        //   iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='User Role'
          value={value}
          onFocus={() => setIsFocus(false)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        //   renderLeftIcon={() => (
        //     <AntDesign
        //       style={styles.icon}
        //       color={isFocus ? 'blue' : 'black'}
        //       name="Safety"
        //       size={20}
        //     />
        //   )}
        />
      </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      backgroundColor: 'white',
      margin:10,
    },

    dropdown: {
        backgroundColor: '#F7F8F8',
        paddingLeft:20,
      width: "85%",
      height: 60,
      borderRadius: 30,
      paddingHorizontal: 8,
      elevation: 5,
    },
    // icon: {
    //   marginRight: 5,
    // },
    // label: {
    //   position: 'absolute',
    //   backgroundColor: 'white',
    //   left: 22,
    //   top: 8,
    //   zIndex: 999,
    //   paddingHorizontal: 8,
    //   fontSize: 14,
    // },

    placeholderStyle: {
        color: "#ADA4A5",
      fontSize: 14,
    },
    
    selectedTextStyle: {
    // fontFamily: 'Poppins',
    fontWeight: '400',
    color: "#92A3FD",
      fontSize: 14
    },

    focusedInput: {
        elevation: 10,
        borderWidth: 2,
        borderColor: "#92A3FD"
    },

    listStyle: {
        backgroundColor: '#F7F8F8',
        textDecorationColor: "red",
        color: "#ADA4A5",
        paddingLeft:0,
        // borderRadius:40,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    
    // iconStyle: {
    //   width: 20,
    //   height: 20,
    // },
    // inputSearchStyle: {
    //   height: 10,
    //   fontSize: 16,
    // },
  });