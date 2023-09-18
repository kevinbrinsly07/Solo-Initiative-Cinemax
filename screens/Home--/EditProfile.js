import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

const EditProfile = ({ navigation }) => {
  const home = "../../assets/images/home.png";
  const searchIcon = "../../assets/images/searchIcon.png";
  const download = "../../assets/images/download.png";
  const person = "../../assets/images/personBlue.png";

  const person3 = "../../assets/images/person3.png";

  const leftArrow = "../../assets/images/leftArrow.png";

  const eyeOff = "../../assets/images/eyeOff.png";

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"rgba(31, 29, 43, 1)"} />
      <View style={styles.firstContainer}>
        <TouchableOpacity
          style={styles.arrowBtn}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image style={styles.icon} source={require(leftArrow)} />
        </TouchableOpacity>
        <Text style={styles.text}>Edit Profile</Text>
      </View>
      <View style={styles.secondContainer}>
        <Image style={styles.person} source={require(person3)} />
        <Text style={styles.name}>Tiffany</Text>
        <Text style={styles.mail}>Tiffanyjearsey@gmail.com</Text>

        <View style={styles.textBox1}>
          <Text style={styles.text4}>Full Name</Text>
          <View style={styles.inputSection}>
            <TextInput
              style={styles.inputName}
              placeholder="Tiffany"
              placeholderTextColor="#92929D"
            />
          </View>
        </View>
        <View style={styles.textBox2}>
          <Text style={styles.text4}>Email</Text>
          <View style={styles.inputSection}>
            <TextInput
              style={styles.inputName}
              placeholder="Tiffanyjearsey@gmail.com"
              placeholderTextColor="#92929D"
            />
          </View>
        </View>
        <View style={styles.textBox2}>
          <Text style={styles.text4}>Password</Text>
          <View style={styles.inputSection}>
            <TextInput
              secureTextEntry={true}
              style={styles.inputName}
              placeholder="Password"
              placeholderTextColor="#92929D"
            />
          </View>
        </View>
        <View style={styles.textBox2}>
          <Text style={styles.text4}>Phone Number</Text>
          <View style={styles.inputSection}>
            <TextInput
              style={styles.inputName}
              placeholder="+1 82120142305"
              placeholderTextColor="#92929D"
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.saveBtn}
        >
          <Text style={styles.saveText}>Save Changes</Text>
        </TouchableOpacity>
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
        <TouchableOpacity
          onPress={() => navigation.navigate("Download")}
          style={styles.navSec1}
        >
          <Image style={styles.navIcon} source={require(download)} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navSec1, styles.selectedOne]}>
          <Image style={styles.navIcon} source={require(person)} />
          <Text style={styles.selectedOneText}>Profile</Text>
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

  firstContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },

  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    marginLeft: 115,
  },

  icon: {
    width: 24,
    height: 24,
  },

  arrowBtn: {
    width: 32,
    height: 32,
    backgroundColor: "rgba(37, 40, 54, 1)",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 24,
  },

  secondContainer: {
    alignItems: "center",
    // justifyContent: 'center',
    flex: 1,
    marginTop: 30,
  },

  person: {
    width: 72,
    height: 72,
  },

  name: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    marginTop: 21,
  },

  mail: {
    color: "#B1B1B1",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
    marginTop: 8,
  },

  text4: {
    color: "#EBEBEF",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
    letterSpacing: 0.12,
    position: "absolute",
    top: -8,
    left: 16,
    zIndex: 1,
  },

  inputName: {
    borderWidth: 1,
    borderColor: "#252836",
    borderRadius: 24,
    width: 327,
    height: 53,
    paddingLeft: 16,
    color: "#92929D",
  },

  inputSection: {
    alignItems: "center",
  },

  textBox1: {
    marginTop: 48,
  },

  textBox2: {
    marginTop: 32,
  },

  saveBtn: {
    width: 327,
    height: 56,
    backgroundColor: "#12CDD9",
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },

  saveText: {
    color: "white",
    fontSize: 16,
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
    width: 98,
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

export default EditProfile;
