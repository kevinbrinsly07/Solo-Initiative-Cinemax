import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";

import Tab from "./Tab";

const UpcomingMovie = ({ navigation }) => {
  const leftArrow = "../../assets/images/leftArrow.png";
  const upcomingPoster1 = "../../assets/images/upcomingPoster1.png";
  const upcomingPoster2 = "../../assets/images/upcomingPoster2.png";
  const film = "../../assets/images/film.png";
  const calendar = "../../assets/images/calendar.png";
  const line2 = "../../assets/images/line2.png";
  const group = "../../assets/images/group.png";

  const home = "../../assets/images/homeBlue.png";
  const searchIcon = "../../assets/images/searchIcon.png";
  const download = "../../assets/images/download.png";
  const person = "../../assets/images/person.png";

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"rgba(31, 29, 43, 1)"} />
        <View style={styles.border}>
          <View style={styles.firstContainer}>
            <TouchableOpacity
              style={styles.arrowBtn}
              onPress={() => navigation.navigate("Home")}
            >
              <Image style={styles.icon} source={require(leftArrow)} />
            </TouchableOpacity>
            <Text style={styles.text}>Upcoming Movie</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>

          <View style={styles.secondContainer}>
            <Tab />
            
              <TouchableOpacity onPress={() => navigation.navigate("Trailer")} style={styles.card}>
                <ImageBackground
                  style={styles.poster}
                  source={require(upcomingPoster1)}
                >
                  <Image style={styles.playBtn} source={require(group)} />
                </ImageBackground>
                <Text style={styles.title}>The Batman</Text>
                <View style={styles.info}>
                  <Image style={styles.iconMini} source={require(calendar)} />
                  <Text style={styles.title2}>March 2, 2022 </Text>
                  <Image source={require(line2)} />
                  <Image style={styles.iconMini} source={require(film)} />
                  <Text style={styles.title2}>Action</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <ImageBackground
                  style={styles.poster}
                  source={require(upcomingPoster2)}
                >
                  <Image style={styles.playBtn} source={require(group)} />
                </ImageBackground>
                <Text style={styles.title}>Black Panther: Wakanda Forever</Text>
                <View style={[styles.info, styles.info2]}>
                  <Image style={styles.iconMini} source={require(calendar)} />
                  <Text style={styles.title2}>November 11, 2022</Text>
                  <Image source={require(line2)} />
                  <Image style={styles.iconMini} source={require(film)} />
                  <Text style={styles.title2}>Action</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <ImageBackground
                  style={styles.poster}
                  source={require(upcomingPoster1)}
                >
                  <Image style={styles.playBtn} source={require(group)} />
                </ImageBackground>
                <Text style={styles.title}>The Batman</Text>
                <View style={styles.info}>
                  <Image style={styles.iconMini} source={require(calendar)} />
                  <Text style={styles.title2}>March 2, 2022 </Text>
                  <Image source={require(line2)} />
                  <Image style={styles.iconMini} source={require(film)} />
                  <Text style={styles.title2}>Action</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <ImageBackground
                  style={styles.poster}
                  source={require(upcomingPoster2)}
                >
                  <Image style={styles.playBtn} source={require(group)} />
                </ImageBackground>
                <Text style={styles.title}>Black Panther: Wakanda Forever</Text>
                <View style={[styles.info, styles.info2]}>
                  <Image style={styles.iconMini} source={require(calendar)} />
                  <Text style={styles.title2}>November 11, 2022</Text>
                  <Image source={require(line2)} />
                  <Image style={styles.iconMini} source={require(film)} />
                  <Text style={styles.title2}>Action</Text>
                </View>
              </TouchableOpacity>
           
          </View>
          </ScrollView>
        </View>

      <View style={styles.bottomNav}>
        <View style={[styles.navSec1, styles.selectedOne]}>
          <Image style={styles.navIcon} source={require(home)} />
          <Text style={styles.selectedOneText}>Home</Text>
        </View>
        <TouchableOpacity
          style={styles.navSec1}
          onPress={() => navigation.navigate("Search")}
        >
          <Image style={styles.navIcon} source={require(searchIcon)} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Download")}
          style={styles.navSec1}
        >
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
    paddingBottom: 20,
  },

  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    letterSpacing: 0.12,
    marginHorizontal: 100,
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
    marginTop: 10,
    marginBottom: 120,
  },

  card: {
    marginTop: 24,
  },

  poster: {
    width: 327,
    height: 168,
    alignItems: "center",
    justifyContent: "center",
  },

  playBtn: {
    width: 50,
    height: 50,
  },

  title: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    marginTop: 12,
  },

  title2: {
    color: "#92929D",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
  },

  iconMini: {
    width: 16,
    height: 16,
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 190,
    marginTop: 9,
  },

  info2: {
    width: 218,
  },

  bottomNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 72,
    position: "relative",
    backgroundColor: "rgba(31, 29, 43, 1)",
    bottom: 124,
  },

  navIcon: {
    width: 24,
    height: 24,
  },

  selectedOne: {
    backgroundColor: "rgba(37, 40, 54, 1)",
    width: 90,
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

export default UpcomingMovie;
