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

const Onboarding3 = ({navigation}) => {
  const rightArrow = '../../assets/images/rightArrow.png';
  const slider3 = '../../assets/images/slider3.png';
  const progressBtn3 = '../../assets/images/progressBtn3.png';
  const woman2 = '../../assets/images/woman2.png';
  const star_icon = '../../assets/images/star_icon.png';
  const clock_icon = '../../assets/images/clock_icon.png';

  return (
    <View style={styles.container}>
      <StatusBar  hidden={true}/>
      <SafeAreaView>
        <View style={styles.upperPart}>
          <Svg style={styles.color} height="380" width="100%">
            <Circle cx="225" cy="225" r="135" fill="#1B1B28" />
            <Image style={styles.woman2} source={require(woman2)} />
          </Svg>
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
                <Image style={styles.slider} source={require(slider3)} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Onboarding4')}>
                <Image style={styles.nextBtn} source={require(progressBtn3)} />
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
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: 420,
  },

  text1: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: 30,
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

  woman2: {
    width: 250,
    height: 351,
    position: 'absolute',
    left: 100,
    top: 28,
  },

  icon: {
    width: 16,
    height: 16,
  },

  firstContainer: {
    position: 'absolute',
    right: 100,
    top: -400,
  },

  secondContainer: {
    position: 'absolute',
    left: 100,
    top: -380,
  },

  iconBorder: {
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.10)',
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
});

export default Onboarding3;
