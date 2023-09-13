import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const Download = ({ navigation }) => {
  const leftArrow = "../../assets/images/leftArrow.png";
  const miniPoster = "../../assets/images/miniPoster.png";
  const miniPoster2 = "../../assets/images/miniPoster2.png";
  const downloadGrey = "../../assets/images/downloadGrey.png";
  const line2 = "../../assets/images/line2.png";

  const home = "../../assets/images/home.png";
  const searchIcon = "../../assets/images/searchIcon.png";
  const download = "../../assets/images/downloadBlue.png";
  const person = "../../assets/images/person.png";

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"rgba(31, 29, 43, 1)"} />
      <View style={styles.border}>
        <View style={styles.firstContainer}>
          <TouchableOpacity
            style={styles.arrowBtn}
            onPress={() => navigation.navigate("MovieDetails")}
          >
            <Image style={styles.icon} source={require(leftArrow)} />
          </TouchableOpacity>
          <Text style={styles.text}>Download</Text>
        </View>

        <View style={styles.secondContainer}>
          <View style={styles.secondSubContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("BlankDownload")} style={styles.poster}>
              <Image style={styles.miniPoster} source={require(miniPoster2)} />
            </TouchableOpacity>
            <View style={styles.posterText}>
              <Text style={styles.posterText1}>Action</Text>
              <Text style={styles.posterText2}>Spider-Man No Way Home</Text>
              <View style={styles.posterIcons}>
                <Image style={styles.iconMini} source={require(downloadGrey)} />
                <Text style={styles.iconText}>1.25 of 1.78 GB </Text>
                <Image source={require(line2)} />
                <Text style={styles.iconText}>75%</Text>
              </View>
            </View>
          </View>

          <View style={styles.secondSubContainer}>
            <TouchableOpacity style={styles.poster}>
              <Image style={styles.miniPoster} source={require(miniPoster)} />
            </TouchableOpacity>
            <View style={styles.posterText}>
              <Text style={styles.posterText1}>Action</Text>
              <Text style={styles.posterText2}>Spider-Man No Way Home</Text>
              <View style={[styles.posterIcons, styles.posterIcons2]}>
                <Text style={styles.iconText}>Movie</Text>
                <Image source={require(line2)} />
                <Text style={styles.iconText}>1.78 GB</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.navSec1}
        >
          <Image style={styles.navIcon} source={require(home)} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navSec1}
          onPress={() => navigation.navigate("Search")}
        >
          <Image style={styles.navIcon} source={require(searchIcon)} />
        </TouchableOpacity>
        <View style={[styles.navSec1, styles.selectedOne]}>
          <Image style={styles.navIcon} source={require(download)} />
          <Text style={styles.selectedOneText}>Download</Text>
        </View>
        <TouchableOpacity style={styles.navSec1}>
          <Image style={styles.navIcon} source={require(person)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(31, 29, 43, 1)",
    flex: 1,
  },

  border: {
    marginHorizontal: 20,
    marginVertical: 20,
  },

  firstContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    letterSpacing: 0.12,
    marginHorizontal: 125,
  },

  icon: {
    width: 24,
    height: 24,
  },

  arrowBtn: {
    width: 32,
    height: 32,
    backgroundColor: "rgba(37, 40, 54, 1)",
    opacity: 0.8,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  text2: {
    color: "white",
    fontSize: 24,
    fontFamily: "Montserrat-SemiBold",
    letterSpacing: 0.12,
  },

  secondContainer: {
    alignItems: "center",
    marginTop: 22,
    height: 620,
  },

  secondSubContainer: {
    flexDirection: "row",
    width: 327,
    height: 107,
    backgroundColor: "#252836",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 8,
  },

  miniPoster: {
    width: 121,
    height: 83,
  },

  posterIcons: {
    flexDirection: "row",
    width: 146,
    justifyContent: "space-between",
    marginTop: 12,
  },

  posterIcons2: {
    width: 97,
  },

  iconMini: {
    width: 16,
    height: 16,
  },

  posterText1: {
    color: "#EBEBEF",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
  },

  posterText2: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    width: 166,
    marginTop: 4,
  },

  iconText: {
    color: "#92929D",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
  },

  bottomNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 72,
  },

  navIcon: {
    width: 24,
    height: 24,
  },

  selectedOne: {
    backgroundColor: "rgba(37, 40, 54, 1)",
    width: 116,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },

  selectedOneText: {
    color: "#12CDD9",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
    marginLeft: 5,
  },
});

export default Download;
