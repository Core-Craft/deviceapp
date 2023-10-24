import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ListItem = () => {
  return (
    <View style={styles.item}>
      
      <View>
        <Text style={styles.item_title}>amit das</Text>
        <Text numberOfLines={1} style={styles.item_description}>mramitdas99@gmail.commmmmmmmmmmmmmmmmmm</Text>
      </View>

      <TouchableOpacity style={styles.overflowButton}>
        <Image
          source={require('../../../../assets/images/dashboard/button.png')} 
          style={styles.loader}
        />
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const items = Array.from({ length: 10 }, (_, index) => index);

  return (
    <View style={styles.background}>
      
      <FlatList
        data={items}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <ListItem />}
        contentContainerStyle={styles.container}
      />

    </View>
  );
};

const styles = StyleSheet.create({

  background: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },

  container: {
    alignItems: "center",
    padding: 25
  },
  item: {
    marginRight:10,
    width:280,
    height:90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7F8F8',
    padding: 20,
    marginVertical: 12,
    borderRadius: 20,
    elevation: 8,
  },

  item_title: {
    color: '#1D1617',
      fontSize: 20,
      // fontFamily: 'Poppins',
      fontWeight: '700',
      // wordWrap: 'break-word' 
      paddingHorizontal: 50,
      // paddingTop: 45,
      // marginLeft:60,
  },

  item_description: {
    color: '#1D1617',
      fontSize: 16,
      paddingLeft: 50,

  },
  
  overflowButton: {
    position: "absolute",
    height: 40,
    width: 40,
    padding: 8,
    marginLeft:255,
    borderRadius: 30,
  },

  loader: {
    position: "absolute",
    height: 45,
    width: 45
  },
});

export default App;
