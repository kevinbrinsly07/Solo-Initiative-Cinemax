import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const SplashScreen = ({navigation}) => {
  const logoCN = '../../assets/images/logoCN.png';
  const line = '../../assets/images/line.png';
  const google = '../../assets/images/google.png';
  const apple = '../../assets/images/apple.png';
  const fb = '../../assets/images/fb.png';

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(31, 29, 43, 1)'} />
      <Image style={styles.logoCN} source={require(logoCN)} />
      <Text style={styles.heading}>CINEMAX</Text>
      <Text style={styles.heading2}>
        Enter your registered Phone Number to Sign Up
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignupScreen')}
        style={styles.container2}>
        <Text style={styles.heading3}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.heading4}>
          I already have an account?{' '}
          <Text style={styles.heading4Sub}>Login</Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.container3}>
        <Image style={styles.line} source={require(line)} />
        <Text style={styles.heading5}>Or Sign up with</Text>
        <Image style={styles.line} source={require(line)} />
      </View>
      <View style={styles.container4}>
        <TouchableOpacity style={[styles.container4Sub, styles.color1]}>
          <Image style={styles.icon} source={require(google)} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.container4Sub, styles.color2]}>
          <Image style={styles.icon} source={require(apple)} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.container4Sub, styles.color3]}>
          <Image style={styles.icon} source={require(fb)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(31, 29, 43, 1)',
    height: '100%',
    alignItems: 'center',
  },

  logoCN: {
    width: 88,
    height: 88,
    marginTop: 160,
  },

  heading: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: 0.12,
    marginTop: 24,
  },

  heading2: {
    color: '#92929D',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: 0.12,
    width: 200,
    textAlign: 'center',
    marginTop: 8,
  },

  container2: {
    backgroundColor: '#12CDD9',
    width: 327,
    height: 56,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 64,
  },

  heading3: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.12,
  },

  heading4: {
    color: '#92929D',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.12,
    marginTop: 34,
  },

  heading4Sub: {
    color: '#12CDD9',
    fontFamily: 'Montserrat-SemiBold',
  },

  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  line: {
    width: 62,
    height: 1,
    marginHorizontal: 10,
  },

  heading5: {
    color: '#92929D',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.12,
  },

  container4: {
    flexDirection: 'row',
    marginTop: 40,
  },

  icon: {
    width: 24,
    height: 24,
  },

  container4Sub: {
    width: 69,
    height: 69,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
  },

  color1: {
    backgroundColor: '#F3F8FB',
  },

  color2: {
    backgroundColor: '#252836',
  },

  color3: {
    backgroundColor: '#4267B2',
  },
});

export default SplashScreen;
