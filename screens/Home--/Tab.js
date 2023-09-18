import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView, TouchableOpacity} from 'react-native';


const Tab = () => {

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={[styles.box1, styles.selected]}>
        <Text style={[styles.text1, styles.selectedText]}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
        <Text style={styles.text1}>Comedy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
        <Text style={styles.text1}>Animation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
        <Text style={styles.text1}>Documentary</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
        <Text style={styles.text1}>N/A</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
        <Text style={styles.text1}>N/A</Text>
      </TouchableOpacity>
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
