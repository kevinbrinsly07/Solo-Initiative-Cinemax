import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Svg, {Circle} from 'react-native-svg';

const Onboarding6 = ({navigation}) => {
  const rightArrow = '../../assets/images/rightArrow.png';
  const slider2 = '../../assets/images/slider3.png';
  const progressBtn2 = '../../assets/images/progressBtn3.png';
  const woman2 = '../../assets/images/woman2.png';
  const star_icon = '../../assets/images/star_icon.png';
  const clock_icon = '../../assets/images/clock_icon.png';

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <View style={styles.upperPart}>
        <Svg style={styles.color} height="380" width="100%">
          <View style={styles.imgPart}>
            <Image style={styles.womanImg} source={require(woman2)} />
            <Circle cx="225" cy="170" r="120" fill="orange" />
          </View>
          <Circle cx="130" cy="7" r="7" fill="#12CDD9" />
          <Circle cx="280" cy="20" r="5" fill="#12CDD9" />
          <Circle cx="360" cy="70" r="5" fill="#12CDD9" fillOpacity="0.4" />
          <Circle cx="390" cy="150" r="5" fill="#12CDD9" fillOpacity="0.4" />
          <Circle cx="120" cy="320" r="10" fill="#12CDD9" fillOpacity="0.6" />
        </Svg>
      </View>
      <View style={styles.iconContainer}>
        <View style={[styles.firstContainer, styles.iconBorder]}>
          <Image style={styles.icon} source={require(star_icon)} />
          <Text style={styles.iconText1}>Rating</Text>
          <Text style={styles.iconText2}>9 / 10</Text>
        </View>
        <View style={[styles.secondContainer, styles.iconBorder]}>
          <Image style={styles.icon} source={require(clock_icon)} />
          <Text style={styles.iconText1}>Duration</Text>
          <Text style={styles.iconText2}>1h 20m</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contentOne}>
          <Text style={[styles.text1, styles.textCus]}>
            Offers ad-free viewing of high quality
          </Text>
          <Text style={[styles.text2, styles.textCus]}>
            Semper in cursus magna et eu varius nunc adipiscing. Elementum
            justo, laoreet id sem semper parturient.
          </Text>
          <View style={styles.lastBottom}>
            <TouchableOpacity style={styles.sliderSection}>
              <Image style={styles.slider} source={require(slider2)} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('SplashScreen')}>
              <Image style={styles.nextBtn} source={require(progressBtn2)} />
              <Image style={styles.rightArrow} source={require(rightArrow)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(31, 29, 43, 1)',
    height: '100%',
  },

  upperPart: {
    marginTop: 70,
    height: '50%',
    width: '100%',
    //alignItems: 'center',
  },

  womanImg: {
    width: 207,
    height: 292,
    position: 'absolute',
    left: 116,
    borderBottomLeftRadius: 109,
    borderBottomRightRadius: 98,
  },

  icon: {
    width: 16,
    height: 16,
  },

  firstContainer: {
    position: 'absolute',
    left: 60,
    top: -360,
  },

  secondContainer: {
    position: 'absolute',
    right: 60,
    top: -200,
  },

  iconBorder: {
    backgroundColor: '#252836',
    borderRadius: 12,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconText1: {
    color: '#92929D',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 28.8,
  },

  iconText2: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
  },

  lastBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
  },

  rightArrow: {
    width: 24,
    height: 24,
    position: 'absolute',
    bottom: 28,
    left: 28,
  },

  slider: {
    width: 76,
    height: 10,
    marginRight: 100,
  },

  nextBtn: {
    width: 80,
    height: 80,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },

  contentOne: {
    backgroundColor: '#171725',
    width: 327,
    height: 341,
    borderRadius: 32,
    alignItems: 'center',
  },

  text1: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 28.8,
    paddingHorizontal: 40,
    marginTop: 32,
  },

  text2: {
    color: '#92929D',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    paddingHorizontal: 35,
    marginTop: 14,
    textAlign: 'center',
  },

  textCus: {
    textAlign: 'center',
    letterSpacing: 0.12,
  },
});

export default Onboarding6;
