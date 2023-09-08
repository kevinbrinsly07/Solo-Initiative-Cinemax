import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';

//add navigator

const Tab = () => {
  // const searchIcon = '../../assets/images/searchIcon.png';
  // const filterIcon = '../../assets/images/filterIcon.png';
  // const line2 = '../../assets/images/line2.png';

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={[styles.box1, styles.selected]}>
        <Text style={[styles.text1, styles.selectedText]}>All</Text>
      </View>
      <View style={styles.box1}>
        <Text style={styles.text1}>Comedy</Text>
      </View>
      <View style={styles.box1}>
        <Text style={styles.text1}>Animation</Text>
      </View>
      <View style={styles.box1}>
        <Text style={styles.text1}>Documentary</Text>
      </View>
      <View style={styles.box1}>
        <Text style={styles.text1}>N/A</Text>
      </View>
      <View style={styles.box1}>
        <Text style={styles.text1}>N/A</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box1: {
    width: 100,
    height: 31,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },

  selected: {
    backgroundColor: '#252836',
    borderRadius: 8,
  },

  selectedText: {
    color: '#12CDD9',
  },
});

export default Tab;
