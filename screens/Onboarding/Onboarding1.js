import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Svg, {Circle} from 'react-native-svg';

const Onboarding1 = ({navigation}) => {
  const womanImg = '../../assets/images/woman.png';
  const rightArrow = '../../assets/images/rightArrow.png';
  const slider = '../../assets/images/slider.png';
  const progressBtn = '../../assets/images/progressBtn.png';

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(23, 23, 37, 1)'} />
      <SafeAreaView>
        <View style={styles.upperPart}>
          <Svg style={styles.color} height="380" width="100%">
            <Circle cx="225" cy="165" r="145" fill="#1B1B28" />
            <Circle cx="100" cy="30" r="20" fill="orange" />
            <Circle cx="345" cy="300" r="15" fill="orange" />
            <Circle cx="330" cy="10" r="10" fill="#94D4FF" />
            <Circle cx="380" cy="60" r="10" fill="#94D4FF" />
            <Circle cx="380" cy="240" r="10" fill="#94D4FF" />
            <Circle cx="50" cy="80" r="10" fill="#94D4FF" />
            <Circle cx="120" cy="320" r="10" fill="#94D4FF" />
            <View style={styles.centerImg}>
              <Image style={styles.womanImg} source={require(womanImg)} />
            </View>
          </Svg>
        </View>
        <View style={styles.border}>
          <View style={styles.bottomPart}>
            <Text style={[styles.text1, styles.textAlign]}>
              Lorem ipsum dolor sit amet consecteur esplicit
            </Text>
            <Text style={[styles.text2, styles.textAlign]}>
              Semper in cursus magna et eu varius nunc adipiscing. Elementum
              justo, laoreet id sem semper parturient.
            </Text>
            <View style={styles.lastBottom}>
              <TouchableOpacity style={styles.sliderSection}>
                <Image style={styles.slider} source={require(slider)} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Onboarding2')}>
                <Image style={styles.nextBtn} source={require(progressBtn)} />
                <Image style={styles.rightArrow} source={require(rightArrow)} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(31, 29, 43, 1)',
    height: '100%',
  },

  border: {
    marginHorizontal: 30,
  },

  upperPart: {
    backgroundColor: 'rgba(23, 23, 37, 1)',
    justifyContent: 'flex-end',
    height: 420,
    width: '100%',
  },

  womanImg: {
    width: 300,
    height: 380,
  },

  text1: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 40,
    marginBottom: 14,
    lineHeight: 28.8,
    letterSpacing: 0.12,
  },

  text2: {
    color: '#92929D',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    paddingHorizontal: 60,
    letterSpacing: 0.12,
  },

  textAlign: {
    textAlign: 'center',
  },

  centerImg: {
    position: 'absolute',
    left: 65,
  },

  lastBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  },

  nextBtn: {
    width: 80,
    height: 80,
  },
});

export default Onboarding1;
