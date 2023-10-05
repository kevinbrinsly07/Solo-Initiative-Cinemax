import React, {useEffect} from 'react';
import {View, StatusBar, StyleSheet, Text, Image} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginOrSignup');
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Clear the timer
  }, [navigation]);

  const logoCN = '../../assets/images/logoCN.png';

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(31, 29, 43, 1)'} />
      <Image style={styles.logoCN} source={require(logoCN)} />
      <Text style={styles.text}>CINEMAX</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(31, 29, 43, 1)',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoCN: {
    width: 88,
    height: 88,
  },

  text: {
    color: '#12CDD9',
    fontSize: 28,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: 0.12,
  },
});

export default SplashScreen;
