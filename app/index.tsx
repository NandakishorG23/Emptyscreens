
import { router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

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

  return <RecordLabel />;
};

const handleNavigation = () => {
  router.push('Mycart');
};

const RecordLabel: React.FC = () => {
  return (
    <View style={styles.pageContainer}>RecordLabel
      <View style={styles.container}>
        <Text style={styles.text}>Record’s</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/Nointernet.png')} // Update the path to your image file
          style={styles.image}
        />
        <Text style={styles.sessionText}>You have not completed any session</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={handleNavigation}>
          <Image
            source={require('@/assets/images/Homepage.png')} // Update the path to your image file
            style={styles.bottomImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation}>
          <Image
            source={require('@/assets/images/Appointment.png')} // Update the path to your image file
            style={styles.bottomImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation}>
          <Image
            source={require('@/assets/images/Recording.png')} // Update the path to your image file
            style={styles.bottomImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation}>
          <Image
            source={require('@/assets/images/Healthprofile.png')} // Update the path to your image file
            style={styles.bottomImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: 80,
    backgroundColor: '#DCF9E5',
    position: 'absolute',
    top: 0,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.02,
    textAlign: 'left',
    color: '#400869',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 176.55,
    height: 148,
  },
  sessionText: {
    width: 300,
    height: 18,
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18,
    textAlign: 'center',
    color: '#888888',
    marginTop: 20,
  },
  bottomContainer: {
    width: '100%',
    height: 62,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 2,
    borderTopColor: '#0000004D',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomImage: {
    width: 68,
    height: 42,
  },
  bottomText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18,
    textAlign: 'center',
    color: '#888888',
  },
});

export default App;
