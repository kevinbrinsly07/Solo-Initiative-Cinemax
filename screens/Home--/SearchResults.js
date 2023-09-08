import React, {useState} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import Tab from './Tab';

const SearchResults = ({navigation}) => {
  const searchIcon = '../../assets/images/searchIcon.png';
  const calendar = '../../assets/images/calendar.png';
  const clock = '../../assets/images/clock.png';
  const film = '../../assets/images/film.png';
  const line2 = '../../assets/images/line2.png';

  const poster1 = '../../assets/images/poster1.png';
  const poster2 = '../../assets/images/poster2.png';
  const poster3 = '../../assets/images/poster3.png';
  const poster4 = '../../assets/images/poster4.png';

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(31, 29, 43, 1)'} />
      <View style={styles.alignCenter}>
        <View style={styles.SearchBar}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchByActor')}>
            <Image style={styles.Icon} source={require(searchIcon)} />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Type title, categories, years, etc"
            placeholderTextColor={'#92929D'}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.cancelBtn}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TouchableOpacity style={styles.todayContainer}>
          <View style={styles.inline}>
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
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.todayContainer}>
          <View style={styles.inline}>
            <Image style={styles.poster} source={require(poster3)} />
            <View style={styles.desSubOne}>
              <View
                style={[styles.premiumLogo, styles.justify, styles.freeText]}>
                <Text style={styles.premiumText}>Free</Text>
              </View>
              <Text style={[styles.heading, styles.justify]}>Riverdale</Text>
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
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.todayContainer}>
          <View style={styles.inline}>
            <Image style={styles.poster} source={require(poster4)} />
            <View style={styles.desSubOne}>
              <View style={[styles.premiumLogo, styles.justify]}>
                <Text style={styles.premiumText}>Premium</Text>
              </View>
              <Text style={[styles.heading, styles.justify]}>Life of PI</Text>
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
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.todayContainer}>
          <View style={styles.inline}>
            <Image style={styles.poster} source={require(poster2)} />
            <View style={styles.desSubOne}>
              <View style={[styles.premiumLogo, styles.justify]}>
                <Text style={styles.premiumText}>Premium</Text>
              </View>
              <Text style={[styles.heading, styles.justify]}>
                The Jungle Waiting
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
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.todayContainer, styles.lastContainer]}>
          <View style={styles.inline}>
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
          </View>
        </TouchableOpacity>
      </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 70,
  },

  SearchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252836',
    borderRadius: 24,
    width: 276,
    height: 41,
    marginTop: 18,
  },

  cancelBtn: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
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
    marginTop: 32,
    marginBottom: -16,
    left: 24,
  },

  lastContainer: {
    marginBottom: 16,
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
    borderRadius: 8,
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

  freeText: {
    backgroundColor: '#12CDD9',
  },
});

export default SearchResults;
