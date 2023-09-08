import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

const MoviePosterList = () => {
  const poster1 = '../../assets/images/poster1.png';
  const poster2 = '../../assets/images/poster2.png';
  const poster3 = '../../assets/images/poster3.png';

  const movieData = [
    {
      id: '1',
      image: require(poster1),
      text: 'Spider-Man No..',
      text2: 'Action',
    },
    {
      id: '2',
      image: require(poster2),
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
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.posterImage} />
      <View style={styles.textContainer}>
        <Text style={styles.posterText}>{item.text}</Text>
        <Text style={styles.posterText2}>{item.text2}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={movieData}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
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
});

export default MoviePosterList;
