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

  const home = "../../assets/images/home.png";
  const searchIcon = "../../assets/images/searchIcon.png";
  const download = "../../assets/images/downloadBlue.png";
  const person = "../../assets/images/person.png";

  const HD = "../../assets/images/hd2.png";
  const remove = "../../assets/images/remove.png";
  const closed = "../../assets/images/closed.png";
  const audio = "../../assets/images/audio.png";
  const downloadWhite = "../../assets/images/downloadWhite.png";
  const devices = "../../assets/images/devices.png";

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
          <Text style={styles.text}>VIP</Text>
        </View>

        <View style={styles.secondContainer}>
          <View style={styles.premiumBtn}>
            <Text style={styles.premiumText}>Access Premium</Text>
          </View>
          <Text style={styles.desText}>
            The latest movies and series are here
          </Text>
          <View style={styles.cardSec}>
            <View style={[styles.card, styles.cardSelected]}>
              <Text style={styles.cardText1}>Monthly Subscription</Text>
              <Text style={styles.cardText2}>
                <Text style={styles.rp}>Rp</Text>54.000
                <Text style={styles.rp}>/Month</Text>
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardText1}>Annual Subscription</Text>
              <Text style={styles.cardText2}>
                <Text style={styles.rp}>Rp</Text>200.000
                <Text style={styles.rp}>/Years</Text>
              </Text>
            </View>
          </View>

          <View style={styles.features}>
            <View style={styles.feature1}>
              <Image style={styles.icon} source={require(HD)} />
              <Text style={styles.featureText}>Streaming in high quality</Text>
            </View>
            <View style={styles.feature1}>
              <Image style={styles.icon} source={require(remove)} />
              <Text style={styles.featureText}>Ad-free viewing experience</Text>
            </View>
          </View>
          <View style={styles.features}>
            <View style={styles.feature1}>
              <Image style={styles.icon} source={require(downloadWhite)} />
              <Text style={styles.featureText}>Download to watch later</Text>
            </View>
            <View style={styles.feature1}>
              <Image style={styles.icon} source={require(closed)} />
              <Text style={styles.featureText}>
                Text of different languages
              </Text>
            </View>
          </View>
          <View style={styles.features}>
            <View style={styles.feature1}>
              <Image style={styles.icon} source={require(devices)} />
              <Text style={styles.featureText}>Stream on multiple devices</Text>
            </View>
            <View style={styles.feature1}>
              <Image style={styles.icon} source={require(audio)} />
              <Text style={styles.featureText}>
                With the best audio quality
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("PaymentMethod")}
            style={styles.paymentBtn}
          >
            <Text style={styles.paymentBtnText}>Payment Method</Text>
          </TouchableOpacity>

          <Text style={styles.forgetText}>
            Already subscribed? <Text style={styles.loginText}>Login</Text>
          </Text>
        </View>
      </View>

      {/* <View style={styles.bottomNav}>
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
      </View> */}
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
    flex: 1,
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
    marginHorizontal: 160,
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
    marginTop: 42,
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
    textAlign: "center",
    marginTop: 8,
  },

  // bottomNav: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-evenly",
  //   height: 72,
  //   position: "relative",
  //   bottom: 0,
  // },

  // navIcon: {
  //   width: 24,
  //   height: 24,
  // },

  // selectedOne: {
  //   backgroundColor: "rgba(37, 40, 54, 1)",
  //   width: 116,
  //   height: 40,
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 16,
  // },

  // selectedOneText: {
  //   color: "#12CDD9",
  //   fontSize: 12,
  //   fontFamily: "Montserrat-Medium",
  //   marginLeft: 5,
  // },

  premiumBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF8700",
    width: 186,
    height: 28,
    borderRadius: 32,
  },

  premiumText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },

  desText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    width: 221,
    textAlign: "center",
    marginTop: 16,
  },

  cardSec: {
    flexDirection: "row",
    width: 327,
    justifyContent: "space-between",
    marginTop: 32,
  },

  cardSelected: {
    backgroundColor: "#12CDD9",
  },

  card: {
    width: 156,
    height: 137,
    borderWidth: 1,
    borderColor: "#252836",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  cardText1: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
  },

  cardText2: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
    width: 108,
    marginTop: 16,
  },

  rp: {
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
  },

  features: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 48,
    marginBottom: -16,
    width: 327,
  },

  feature1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  featureText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
    width: 112,
    marginLeft: 4,
  },

  paymentBtn: {
    width: 327,
    height: 56,
    backgroundColor: "#12CDD9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    marginTop: 64,
  },

  paymentBtnText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },

  forgetText: {
    marginTop: 34,
    color: "#92929D",
    fontSize: 16,
    fontFamily: "Montserrat-Medium,",
  },

  loginText: {
    color: "#12CDD9",
  },
});

export default BlankWishlist;
