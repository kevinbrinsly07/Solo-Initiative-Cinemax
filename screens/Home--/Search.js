import React, {useState} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import Tab from './Tab';

const Search = ({navigation}) => {
  const searchIcon = '../../assets/images/searchIcon.png';
  const calendar = '../../assets/images/calendar.png';
  const clock = '../../assets/images/clock.png';
  const film = '../../assets/images/film.png';
  const line2 = '../../assets/images/line2.png';

  const poster1 = '../../assets/images/poster1.png';
  const poster2 = '../../assets/images/poster2.png';
  const poster3 = '../../assets/images/poster3.png';
  const poster4 = '../../assets/images/poster4.png';

  const home = '../../assets/images/home.png';
  const searchBlue = '../../assets/images/searchBlue.png';
  const download = '../../assets/images/download.png';
  const person = '../../assets/images/person.png';

  const movieData = [
    {
      id: '1',
      image: require(poster2),
      text: 'The Jungle Wa..',
      text2: 'Action',
    },
    {
      id: '2',
      image: require(poster4),
      text: 'Life of PI',
      text2: 'Action',
    },
    {
      id: '3',
      image: require(poster3),
      text: 'Riverdale',
      text2: 'Action',
    },
    {
      id: '4',
      image: require(poster1),
      text: 'Spider-Man No..',
      text2: 'Action',
    },
    {
      id: '5',
      image: require(poster2),
      text: 'Life of PI',
      text2: 'Action',
    },
    {
      id: '6',
      image: require(poster3),
      text: 'Riverdale',
      text2: 'Action',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.posterImage} />
      <View style={styles.textContainer}>
        <Text style={styles.posterText}>{item.text}</Text>
        <Text style={styles.posterText2}>{item.text2}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(31, 29, 43, 1)'} />
      <View style={styles.alignCenter}>
        <View style={styles.SearchBar}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchResults')}>
            <Image style={styles.Icon} source={require(searchIcon)} />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Type title, categories, years, etc"
            placeholderTextColor={'#92929D'}
          />
        </View>
      </View>
      <View style={styles.tab}>
        <Tab />
      </View>

      <View style={styles.todayContainer}>
        <Text style={[styles.heading, styles.addMargin]}>Today</Text>
        <TouchableOpacity
          style={styles.inline}
          onPress={() => navigation.navigate('MovieDetails')}>
          <Image style={styles.poster} source={require(poster1)} />
          <View style={styles.desSubOne}>
            <View style={[styles.premiumLogo, styles.justify]}>
              <Text style={styles.premiumText}>Premium</Text>
            </View>
            <Text style={[styles.heading, styles.justify]}>
              Spider-Man No Way..
            </Text>
            <View style={[styles.inline, styles.justify]}>
              <Image style={styles.Icon} source={require(calendar)} />
              <Text style={styles.text1}>2021</Text>
            </View>
            <View style={[styles.inline, styles.justify]}>
              <Image style={styles.Icon} source={require(clock)} />
              <Text style={styles.text1}>148 Minutes</Text>
              <View style={styles.pgBorder}>
                <Text style={styles.pg}>PG-13</Text>
              </View>
            </View>
            <View style={[styles.inline, styles.justify]}>
              <Image style={styles.Icon} source={require(film)} />
              <Text style={styles.text1}>Action</Text>
              <Image style={styles.leftMargin} source={require(line2)} />
              <Text style={styles.text1}>Movie</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.titleSection}>
        <Text style={styles.heading4}>Recommend for you</Text>
        <TouchableOpacity>
          <Text style={styles.heading4Des}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={movieData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navSec1}
          onPress={() => navigation.navigate('Home')}>
          <Image style={styles.navIcon} source={require(home)} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navSec1, styles.selectedOne]}>
          <Image style={styles.navIcon} source={require(searchBlue)} />
          <Text style={styles.selectedOneText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navSec1}>
          <Image style={styles.navIcon} source={require(download)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navSec1}>
          <Image style={styles.navIcon} source={require(person)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(31, 29, 43, 1)',
    height: '100%',
    flex: 1,
  },

  alignCenter: {
    alignItems: 'center',
  },

  SearchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252836',
    borderRadius: 24,
    width: 370,
    height: 41,
    marginTop: 18,
  },

  Icon: {
    width: 16,
    height: 16,
  },

  searchInput: {
    width: 239,
    color: '#92929D',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },

  tab: {
    position: 'absolute',
    top: 100,
    left: 25,
  },

  todayContainer: {
    marginTop: 120,
    left: 20,
  },

  inline: {
    flexDirection: 'row',
  },

  justify: {
    marginLeft: 10,
    marginBottom: 13,
  },

  leftMargin: {
    marginLeft: 10,
  },

  poster: {
    width: 112,
    height: 147,
  },

  addMargin: {
    marginBottom: 10,
  },

  text1: {
    color: '#92929D',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 10,
  },

  pg: {
    color: '#12CDD9',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },

  pgBorder: {
    borderWidth: 1,
    borderColor: '#12CDD9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginLeft: 10,
    width: 43,
    height: 20,
  },

  heading: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },

  premiumText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
  },

  premiumLogo: {
    width: 65,
    height: 20,
    backgroundColor: '#FF8700',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },

  heading4: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },

  heading4Des: {
    color: '#12CDD9',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },

  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 65,
  },

  listContainer: {
    marginTop: 16,
    marginLeft: 10,
  },

  itemContainer: {
    marginHorizontal: 10,
  },

  textContainer: {
    width: 135,
    height: 53,
    backgroundColor: '#252836',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: 'center',
  },

  posterImage: {
    width: 135,
    height: 178,
  },

  posterText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 8,
  },

  posterText2: {
    color: '#92929D',
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 8,
  },

  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 40,
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

export default Search;
