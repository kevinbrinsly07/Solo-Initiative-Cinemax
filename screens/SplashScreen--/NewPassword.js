import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const NewPassword = ({navigation}) => {
  const leftArrow = '../../assets/images/leftArrow.png';
  const eyeOff = '../../assets/images/eyeOff.png';

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(31, 29, 43, 1)'} />
      <View style={styles.border}>
        <View style={styles.firstContainer}>
          <TouchableOpacity
            style={styles.arrowBtn}
            onPress={() => navigation.navigate('ResetPassword')}>
            <Image style={styles.icon} source={require(leftArrow)} />
          </TouchableOpacity>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.text2}>Create New Password</Text>
          <Text style={styles.text3}>Enter your new password</Text>
        </View>
        <View style={styles.textBox2}>
          <Text style={styles.text4}>New Password</Text>
          <View style={styles.inputSection}>
            <TextInput
              secureTextEntry
              style={styles.inputName}
              placeholder="Password"
              placeholderTextColor="#92929D"
            />
          </View>
          <TouchableOpacity style={styles.eyeOff}>
            <Image style={styles.icon} source={require(eyeOff)} />
          </TouchableOpacity>
        </View>
        <View style={styles.textBox2}>
          <Text style={styles.text4}>Conform Password</Text>
          <View style={styles.inputSection}>
            <TextInput
              secureTextEntry
              style={styles.inputName}
              placeholder="Password"
              placeholderTextColor="#92929D"
            />
          </View>
          <TouchableOpacity style={styles.eyeOff}>
            <Image style={styles.icon} source={require(eyeOff)} />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomPart}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.btnText}>Reset</Text>
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
    fontFamily: 'Poppins-SemiBold',
  },

  secondContainer: {
    alignItems: 'center',
    marginTop: 46,
    marginBottom: 24,
  },

  text3: {
    color: '#92929D',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
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

export default NewPassword;
