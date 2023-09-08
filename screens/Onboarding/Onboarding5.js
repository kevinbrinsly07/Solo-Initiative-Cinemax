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

const Onboarding5 = ({navigation}) => {
  const rightArrow = '../../assets/images/rightArrow.png';
  const slider2 = '../../assets/images/slider2.png';
  const progressBtn2 = '../../assets/images/progressBtn2.png';
  const womanImg = '../../assets/images/woman.png';
  const HD = '../../assets/images/HD.png';
  const downloadLogo = '../../assets/images/downloadLogo.png';

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(31, 29, 43, 1)'} />
      <View style={styles.upperPart}>
        <Svg style={styles.color} height="380" width="100%">
          <View style={styles.imgPart}>
            <Image style={styles.womanImg} source={require(womanImg)} />
            <Image style={styles.HD} source={require(HD)} />
            <Image style={styles.downloadLogo} source={require(downloadLogo)} />
            <Circle cx="225" cy="170" r="125" fill="orange" />
          </View>
          <Circle cx="130" cy="20" r="20" fill="#12CDD9" />
          <Circle cx="345" cy="300" r="15" fill="#12CDD9" />
          <Circle cx="330" cy="10" r="5" fill="#12CDD9" />
          <Circle cx="380" cy="60" r="5" fill="#12CDD9" fillOpacity="0.4" />
          <Circle cx="380" cy="240" r="5" fill="#12CDD9" fillOpacity="0.4" />
          <Circle cx="50" cy="80" r="10" fill="#12CDD9" fillOpacity="0.8" />
          <Circle cx="120" cy="320" r="10" fill="#12CDD9" fillOpacity="0.6" />
        </Svg>
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
              onPress={() => navigation.navigate('Onboarding6')}>
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
    width: 259,
    height: 333,
    position: 'absolute',
    top: -38,
    left: 70,
    borderBottomLeftRadius: 155,
    borderBottomRightRadius: 95,
  },

  HD: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 7,
    left: 118,
  },

  downloadLogo: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 290,
    right: 77,
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

export default Onboarding5;
