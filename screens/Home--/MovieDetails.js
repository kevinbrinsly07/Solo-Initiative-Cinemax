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

const MovieDetails = ({navigation}) => {
  const leftArrow = '../../assets/images/leftArrow.png';
  const heart = '../../assets/images/heartIcon.png';

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(31, 29, 43, 1)'} />
      <View style={styles.top}>
        <TouchableOpacity>
          <Image style={styles.icon} source={require(leftArrow)} />
        </TouchableOpacity>
        <Text style={styles.title}>Spider-Man No Way..</Text>
        <TouchableOpacity style={styles.heartBorder}>
          <Image style={styles.icon} source={require(heart)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(31, 29, 43, 1)',
    flex: 1,
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 28,
    marginVertical: 30,
  },

  title: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },

  icon: {
    width: 24,
    height: 24,
  },

  heartBorder: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginTop: -8,
    backgroundColor: '#252836',
    borderRadius: 12,
  },
});

export default MovieDetails;
