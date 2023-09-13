import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const Wishlist = ({ navigation }) => {
  const leftArrow = "../../assets/images/leftArrow.png";
  const miniPoster = "../../assets/images/miniPoster.png";
  const group = "../../assets/images/group.png";
  const starOrange = "../../assets/images/starOrange.png";
  const heart = "../../assets/images/heartIcon.png";

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
          <Text style={styles.text}>Wishlist</Text>
        </View>

        <View style={styles.secondContainer}>
          <View style={styles.secondSubContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("BlankWishlist")}
              style={styles.poster}
            >
              <Image style={styles.miniPoster} source={require(miniPoster)} />
              <Image style={styles.group} source={require(group)} />
            </TouchableOpacity>
            <View style={styles.posterText}>
              <Text style={styles.posterText1}>Action</Text>
              <Text style={styles.posterText2}>Spider-Man No Way Home</Text>
              <View style={styles.posterIcons}>
                <Text style={styles.iconText}>Movie</Text>
                <Image style={styles.iconMini} source={require(starOrange)} />
                <Text style={styles.rating}>4.5</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Wishlist")}
                  style={styles.heartBorder}
                >
                  <Image style={styles.icon} source={require(heart)} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.secondSubContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("BlankWishlist")}
              style={styles.poster}
            >
              <Image style={styles.miniPoster} source={require(miniPoster)} />
              <Image style={styles.group} source={require(group)} />
            </TouchableOpacity>
            <View style={styles.posterText}>
              <Text style={styles.posterText1}>Action</Text>
              <Text style={styles.posterText2}>Spider-Man No Way Home</Text>
              <View style={styles.posterIcons}>
                <Text style={styles.iconText}>Movie</Text>
                <Image style={styles.iconMini} source={require(starOrange)} />
                <Text style={styles.rating}>4.5</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Wishlist")}
                  style={styles.heartBorder}
                >
                  <Image style={styles.icon} source={require(heart)} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.secondSubContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("BlankWishlist")}
              style={styles.poster}
            >
              <Image style={styles.miniPoster} source={require(miniPoster)} />
              <Image style={styles.group} source={require(group)} />
            </TouchableOpacity>
            <View style={styles.posterText}>
              <Text style={styles.posterText1}>Action</Text>
              <Text style={styles.posterText2}>Spider-Man No Way Home</Text>
              <View style={styles.posterIcons}>
                <Text style={styles.iconText}>Movie</Text>
                <Image style={styles.iconMini} source={require(starOrange)} />
                <Text style={styles.rating}>4.5</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Wishlist")}
                  style={styles.heartBorder}
                >
                  <Image style={styles.icon} source={require(heart)} />
                </TouchableOpacity>
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

  group: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 35,
    top: 15,
  },

  heartBorder: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginTop: -8,
    marginLeft: 54,
    backgroundColor: "#252836",
    borderRadius: 12,
  },

  posterIcons: {
    flexDirection: "row",
    width: 166,
    marginTop: 6,
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

  rating: {
    color: "#FF8700",
    fontSize: 12,
    fontFamily: "Montserrat-SemiBold",
    marginLeft: 4,
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
    marginRight: 8,
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

export default Wishlist;
