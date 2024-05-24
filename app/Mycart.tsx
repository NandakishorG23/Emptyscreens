import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Pressable } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  await Font.loadAsync({
    'Lato-Bold': require('@/assets/fonts/Lato-Bold.ttf'),
    'Nunito-Bold': require('@/assets/fonts/Nunito-Bold.ttf'),
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts()
      .then(() => {
        setFontsLoaded(true);
        SplashScreen.hideAsync();
      })
      .catch(err => console.error(err));
  }, []);

  if (!fontsLoaded) {
    return null; // Render nothing while the font is loading
  }

  return <MyCart />;
};


const handleNavigation = () => {
    // Handle press action here
     router.push('MyCart')
  };


const MyCart = () => {

  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        {/* <Pressable onPress={handleNavigation}> */}
          <Image
            source={require('@/assets/images/Vector.png')} // Update the path to your image file
            style={styles.vector}
          />
        {/* </Pressable> */}
        <Pressable onPress={handleNavigation}> <Text style={styles.text}>MyCart</Text></Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/Noappointment.png')} // Update the path to your image file
          style={styles.image}
        />
        <Text style={styles.sessionText}>Your Cart is Empty</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  container: {
    width: '100%',
    height: 80,
    backgroundColor: '#DCF9E5',
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Center children vertically
    paddingLeft: 20,
    top: -32,
  },
  text: {
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: '700', // Lato Bold
    lineHeight: 24,
    letterSpacing: 0.02,
    textAlign: 'left',
    color: '#400869',
    marginLeft: 10, 
    
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  vector: {
    width: 21,
    height: 18,
    marginLeft: 5, 
    marginRight: 5,
    transform: [{ rotate: '360deg' }],
    
  },
  image: {
    width: 190,
    height: 200,
  },
  sessionText: {
    width: 300,
    height: 18,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18,
    textAlign: 'center',
    color: '#888888',
    marginTop: 20, 
  },
});

export default MyCart;
