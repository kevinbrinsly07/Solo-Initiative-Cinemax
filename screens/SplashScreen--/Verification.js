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

const Verification = ({navigation}) => {
  const leftArrow = '../../assets/images/leftArrow.png';

  // const [otp, setOtp] = useState("");
  // const [newPassword, setNewPassword] = useState("");

  

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
          <Text style={styles.text2}>Verifying your account</Text>
          <Text style={styles.text3}>
            We have just sent you 4 digit code via your email{' '}
            <Text style={styles.text3Color}>example@gmail.com</Text>
          </Text>
        </View>
        <View style={styles.thirdContainer}>
          <TextInput
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => setOtp(text)}
            value={otp}
          />
          <TextInput
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
        <View style={styles.bottomPart}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('NewPassword')}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.text4}>
            Didn’t receive code?<Text style={styles.text5Color}> Resend</Text>
          </Text>
        </TouchableOpacity>
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
    marginHorizontal: 26,
    marginVertical: 20,
  },

  firstContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 28,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.12,
  },

  secondContainer: {
    alignItems: 'center',
    marginTop: 46,
  },

  text3: {
    color: '#92929D',
    fontSize: 14,
    width: 324,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.12,
    lineHeight: 22.4,
    textAlign: 'center',
    marginTop: 16,
  },

  text3Color: {
    color: 'white',
  },

  thirdContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  box: {
    width: 64,
    height: 64,
    backgroundColor: '#252836',
    borderWidth: 1,
    borderColor: '#12CDD9',
    borderRadius: 12,
    color: 'white',
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginHorizontal: 8,
    // justifyContent: 'center',
  },

  bottomPart: {
    alignItems: 'center',
    marginTop: 64,
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

  text4: {
    color: '#92929D',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.12,
    textAlign: 'center',
    marginTop: 42,
  },

  text5Color: {
    color: '#12CDD9',
  },
});

export default Verification;
