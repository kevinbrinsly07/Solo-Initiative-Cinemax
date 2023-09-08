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

const SearchBlank = ({navigation}) => {
  const searchIcon = '../../assets/images/searchIcon.png';
  const bigSearch = '../../assets/images/bigSearch.png';

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
      <View style={styles.body}>
        <Image style={styles.bigSearch} source={require(bigSearch)} />
        <Text style={styles.text1}>
          We Are Sorry, We Can Not Find The Movie :(
        </Text>
        <Text style={styles.text2}>
          Find your movie by Type title, categories, years, etc{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(31, 29, 43, 1)',
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
    marginTop: 15,
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

  body: {
    flex: 1,
    alignItems: 'center',
    marginTop: 165,
  },

  bigSearch: {
    width: 76,
    height: 76,
  },

  text1: {
    color: '#EBEBEF',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 25.6,
    width: 188,
    textAlign: 'center',
  },

  text2: {
    color: '#92929D',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 19.2,
    width: 188,
    textAlign: 'center',
  },
});

export default SearchBlank;
