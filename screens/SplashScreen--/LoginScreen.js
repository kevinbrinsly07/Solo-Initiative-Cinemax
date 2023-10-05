import React, {useState} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import auth from "@react-native-firebase/auth";

const LoginScreen = ({navigation}) => {
  const leftArrow = '../../assets/images/leftArrow.png';
  const eyeOff = '../../assets/images/eyeOff.png';

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('User signed in successfully');
      navigation.replace('Home');
    } catch (error) {
      Alert.alert('Sign in error: ', error.message);
    }
  };
  

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(31, 29, 43, 1)'} />
      <View style={styles.border}>
        <View style={styles.firstContainer}>
          <TouchableOpacity
            style={styles.arrowBtn}
            onPress={() => navigation.navigate('LoginOrSignup')}>
            <Image style={styles.icon} source={require(leftArrow)} />
          </TouchableOpacity>
          <Text style={styles.text}>Login</Text>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.text2}>Hi, Tiffany</Text>
          <Text style={styles.text3}>
            Welcome back! Please enter your details.
          </Text>
        </View>
        <View style={styles.textBox1}>
          <Text style={styles.text4}>Email Address</Text>
          <View style={styles.inputSection}>
            <TextInput
              style={styles.inputName}
              placeholder="Tiffanyjearsey@gmail.com"
              placeholderTextColor="#92929D"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>
        <View style={styles.textBox2}>
          <Text style={styles.text4}>Password</Text>
          <View style={styles.inputSection}>
            <TextInput
              secureTextEntry
              style={styles.inputName}
              placeholder="Password"
              placeholderTextColor="#92929D"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <TouchableOpacity style={styles.eyeOff}>
            <Image style={styles.icon} source={require(eyeOff)} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.text5}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.bottomPart}>
          <TouchableOpacity
            style={styles.btn}
            onPress={handleSignIn}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(31, 29, 43, 1)',
    height: '100%',
  },

  border: {
    marginHorizontal: 20,
    marginVertical: 20,
  },

  firstContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: 0.12,
    marginHorizontal: 140,
  },

  icon: {
    width: 24,
    height: 24,
  },

  arrowBtn: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(37, 40, 54, 1)',
    opacity: 0.8,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text2: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: 0.12,
  },

  secondContainer: {
    alignItems: 'center',
    marginTop: 46,
  },

  text3: {
    color: '#EBEBEF',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.12,
    width: 177,
    marginTop: 8,
    textAlign: 'center',
  },

  text4: {
    color: '#EBEBEF',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.12,
    position: 'absolute',
    top: -8,
    left: 50,
    zIndex: 1,
  },

  inputName: {
    borderWidth: 1,
    borderColor: '#252836',
    borderRadius: 24,
    width: 327,
    height: 53,
    paddingLeft: 16,
    color: '#92929D',
  },

  inputSection: {
    alignItems: 'center',
  },

  textBox1: {
    marginTop: 64,
  },

  textBox2: {
    marginTop: 32,
  },

  eyeOff: {
    position: 'absolute',
    top: 13,
    right: 50,
  },

  text5: {
    color: '#12CDD9',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.12,
    marginTop: 8,
    marginLeft: 250,
  },

  bottomPart: {
    alignItems: 'center',
    marginTop: 40,
  },

  btn: {
    backgroundColor: '#12CDD9',
    width: 327,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
  },

  btnText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.12,
  },
});

export default LoginScreen;
