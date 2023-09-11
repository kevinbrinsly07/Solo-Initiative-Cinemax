import React from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";

// import LinearGradient from "react-native-linear-gradient";

const MovieDetails = ({ navigation }) => {
  const leftArrow = "../../assets/images/leftArrow.png";
  const heart = "../../assets/images/heartIcon.png";
  const bg = "../../assets/images/bgSpiderman.png";
  const bigPoster1 = "../../assets/images/bigPoster1.png";

  return (
    // <LinearGradient
    //   colors={["rgba(31, 29, 43, 0.8)", "transparent"]}
    //   style={styles.gradient} // Add a new style for the LinearGradient
    // >
      <View style={styles.container}>
        <StatusBar backgroundColor={"rgba(31, 29, 43, 1)"} />

        <ImageBackground source={require(bg)} style={styles.bg}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Image style={styles.icon} source={require(leftArrow)} />
            </TouchableOpacity>
            <Text style={styles.title}>Spider-Man No Way..</Text>
            <TouchableOpacity style={styles.heartBorder}>
              <Image style={styles.icon} source={require(heart)} />
            </TouchableOpacity>
          </View>
          <View style={styles.posterSec}>
            <Image style={styles.bigPoster1} source={require(bigPoster1)} />
          </View>
        </ImageBackground>
      </View>
    // </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(31, 29, 43, 1)",
    flex: 1,
  },

  posterSec: {
    alignItems: "center",
  },
  gradient: {
    flex: 1, // Make the LinearGradient fill the entire screen
  },

  bg: {
    height: 552,
    // borderBottomLeftRadius: 100,
    // borderBottomRightRadius: 100,
    // overflow: 'hidden',
  },

  bigPoster1: {
    width: 205,
    height: 287,
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 28,
    marginVertical: 30,
  },

  title: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },

  icon: {
    width: 24,
    height: 24,
  },

  heartBorder: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginTop: -8,
    backgroundColor: "#252836",
    borderRadius: 12,
  },
});

export default MovieDetails;
