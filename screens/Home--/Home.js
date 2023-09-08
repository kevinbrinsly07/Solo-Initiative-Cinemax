import React, {useState} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import SearchBar from './SearchBar';
import Tab from './Tab';
import MoviePosterList from './MoviePosterList';

const Home = ({navigation}) => {
  const profilePic = '../../assets/images/profilePic.png';
  const heartIcon = '../../assets/images/heartIcon.png';
  const poster = '../../assets/images/poster.png';

  const home = '../../assets/images/homeBlue.png';
  const searchIcon = '../../assets/images/searchIcon.png';
  const download = '../../assets/images/download.png';
  const person = '../../assets/images/person.png';

  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      id: 1,
      image: require(poster),
      text: 'title',
      text2: 'date',
    },
    {
      id: 2,
      image: require(poster),
      text: 'Black Panther: Wakanda Forever',
      text2: 'On March 2, 2022',
    },
    {
      id: 4,
      image: require(poster),
      text: 'title4',
      text2: 'date4',
    },
  ];

  const renderItem = ({item, index}) => {
    const isPresented = index === activeIndex;
    const marginBottomStyle = isPresented ? styles.imageWithMargin : null;

    return (
      <View style={styles.slide}>
        <Image source={item.image} style={[styles.image, marginBottomStyle]} />
        <Text style={styles.CText}>{item.text}</Text>
        <Text style={styles.CText2}>{item.text2}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(31, 29, 43, 1)'} />
      <View style={styles.content}>
        <View style={styles.firstContainer}>
          <Image style={styles.logoCN} source={require(profilePic)} />
          <View style={styles.firstContainerSub}>
            <Text style={styles.heading1}>Hello, Smith</Text>
            <Text style={styles.heading2}>
              Let’s stream your favorite movie
            </Text>
          </View>
          <TouchableOpacity
            style={styles.heart}
            onPress={() => navigation.navigate('Search')}>
            <Image style={styles.heartIcon} source={require(heartIcon)} />
          </TouchableOpacity>
        </View>

        <View style={styles.SearchBar}>
          <SearchBar />
        </View>

        <View style={styles.AlignCenter}>
          <Carousel
            data={data}
            renderItem={renderItem}
            onSnapToItem={index => setActiveIndex(index)}
            sliderWidth={500}
            itemWidth={245}
          />
          <Pagination
            dotsLength={data.length}
            activeDotIndex={activeIndex}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotStyle={styles.paginationInactiveDot}
          />
        </View>

        <View>
          <Text style={styles.heading3}>Categories</Text>
        </View>

        <View style={styles.tab}>
          <Tab />
        </View>

        <Text style={styles.heading4}>Most Popular</Text>
        <Text style={styles.heading4Des}>See All</Text>
        <View style={styles.moviePosterList}>
          <MoviePosterList />
        </View>

        <View style={styles.bottomNav}>
          <TouchableOpacity style={[styles.navSec1, styles.selectedOne]}>
            <Image style={styles.navIcon} source={require(home)} />
            <Text style={styles.selectedOneText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navSec1}
            onPress={() => navigation.navigate('Search')}>
            <Image style={styles.navIcon} source={require(searchIcon)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navSec1}>
            <Image style={styles.navIcon} source={require(download)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navSec1}>
            <Image style={styles.navIcon} source={require(person)} />
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

  content: {
    height: '100%',
  },

  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  firstContainerSub: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: 16,
  },

  logoCN: {
    width: 40,
    height: 40,
  },

  heartIcon: {
    width: 24,
    height: 24,
  },

  heart: {
    backgroundColor: '#252836',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    opacity: 0.8,
  },

  heading1: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },

  heading2: {
    color: '#92929D',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },

  text: {
    color: '#12CDD9',
    fontSize: 28,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: 0.12,
  },

  SearchBar: {
    position: 'absolute',
    top: 80,
    left: 50,
  },

  slide: {
    width: 200,
    height: 154,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },

  image: {
    width: 275,
    height: 134,
  },

  imageWithMargin: {
    height: 154,
    width: 295,
  },

  AlignCenter: {
    position: 'absolute',
    left: 0,
    top: -50,
  },

  CText: {
    position: 'absolute',
    top: 70,
    left: -20,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    width: 214,
  },

  CText2: {
    color: '#EBEBEF',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    position: 'absolute',
    top: 110,
    left: -20,
  },

  paginationContainer: {
    position: 'absolute',
    left: 150,
    top: 330,
  },

  paginationDot: {
    width: 30,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#12CDD9',
  },

  paginationInactiveDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    opacity: 0.32,
    backgroundColor: '#12CDD9',
  },

  heading3: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    position: 'absolute',
    top: 280,
    left: 24,
  },

  tab: {
    position: 'absolute',
    top: 400,
    left: 28,
  },

  heading4: {
    position: 'absolute',
    top: 464,
    left: 24,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },

  heading4Des: {
    position: 'absolute',
    top: 464,
    right: 24,
    color: '#12CDD9',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },

  moviePosterList: {
    position: 'absolute',
    top: 500,
    left: 14,
  },

  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 660,
  },

  navIcon: {
    width: 24,
    height: 24,
  },

  selectedOne: {
    backgroundColor: 'rgba(37, 40, 54, 1)',
    width: 98,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },

  selectedOneText: {
    color: '#12CDD9',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 5,
  },
});

export default Home;
