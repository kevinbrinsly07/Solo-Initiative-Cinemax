import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const Onboarding2 = ({navigation}) => {
  const rightArrow = '../../assets/images/rightArrow.png';
  const slider2 = '../../assets/images/slider2.png';
  const progressBtn2 = '../../assets/images/progressBtn2.png';
  const tom = '../../assets/images/tom.png';

  

  const [activeIndex, setActiveIndex] = useState(1);

  const data = [
    {id: 1, image: require(tom)},
    {id: 2, image: require(tom)},
    {id: 3, image: require(tom)},
  ];

  const renderItem = ({item, index}) => {
    const isPresented = index === activeIndex;
    const marginBottomStyle = isPresented ? styles.imageWithMargin : null;

    return (
      <View style={styles.slide}>
        <Image source={item.image} style={[styles.image, marginBottomStyle]} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(23, 23, 37, 1)'} />
      <SafeAreaView>
        <View style={styles.upperPart}>
          <Carousel
            data={data}
            renderItem={renderItem}
            onSnapToItem={index => setActiveIndex(index)}
            sliderWidth={400}
            itemWidth={250}
            firstItem={1} 
          />
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
                <Image style={styles.slider} source={require(slider2)} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Onboarding3')}>
                <Image style={styles.nextBtn} source={require(progressBtn2)} />
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
    justifyContent: 'center',
    height: 420,
    flexDirection: 'row',
    width: '100%',
  },

  text1: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: 30,
    marginTop: 40,
    marginBottom: 14,
    lineHeight: 38.4,
  },

  text2: {
    color: '#92929D',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    paddingHorizontal: 30,
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

  slide: {
    width: 300,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  imageWithMargin: {
    marginBottom: 100,
  },
});

export default Onboarding2;
