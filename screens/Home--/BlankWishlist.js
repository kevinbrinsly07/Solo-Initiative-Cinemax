import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const BlankWishlist = ({ navigation }) => {
  const leftArrow = "../../assets/images/leftArrow.png";
  const boxBlue = "../../assets/images/boxBlue.png";

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
            onPress={() => navigation.navigate("Genre")}
          >
            <Image style={styles.icon} source={require(leftArrow)} />
          </TouchableOpacity>
          <Text style={styles.text}>Wishlist</Text>
        </View>

        <View style={styles.secondContainer}>
          <Image style={styles.folder} source={require(boxBlue)} />
          <Text style={styles.folderText}>There is no movie yet!</Text>
          <Text style={styles.folderText2}>
            Find your movie by Type title, categories, years, etc{" "}
          </Text>
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
    marginTop: 150,
    height: 495,
  },

  folder: {
    width: 76,
    height: 76,
  },

  folderText: {
    color: "#EBEBEF",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    textTransform: "capitalize",
    lineHeight: 25.6,
    marginTop: 16,
  },

  folderText2: {
    color: "#92929D",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
    lineHeight: 19.2,
    paddingHorizontal: 80,
    textAlign: 'center',
    marginTop: 8,
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

export default BlankWishlist;
