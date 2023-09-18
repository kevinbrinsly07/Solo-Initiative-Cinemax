import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import checkmarkBlue from "../../assets/images/checkmarkBlue.png";

const Language = ({ navigation }) => {
  const leftArrow = "../../assets/images/leftArrow.png";
  const line5 = "../../assets/images/line6.png";

  const initialSelectedOption = 'option1'; 
  const [selectedOption, setSelectedOption] = useState(initialSelectedOption);

  const handleOptionPress = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

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
        <Text style={styles.text}>Language</Text>
      </View>

      <View style={styles.secondContainer}>
        <View style={[styles.accContainer, styles.accContainerHeight2]}>
          <Text style={styles.accTitle}>Suggested Languages</Text>
          <TouchableOpacity
            onPress={() => handleOptionPress("option1")}
            style={styles.accMiniContainer}
          >
            <Text style={styles.memberText}>English (UK)</Text>
            <Image
              source={selectedOption === "option1" ? checkmarkBlue : null}
              style={[styles.icon, styles.checkmarkBlue]}
            />
          </TouchableOpacity>
          <Image style={styles.line5} source={require(line5)} />
          <TouchableOpacity
            onPress={() => handleOptionPress("option2")}
            style={styles.accMiniContainer}
          >
            <Text style={styles.memberText}>English</Text>
            <Image
              source={selectedOption === "option2" ? checkmarkBlue : null}
              style={[styles.icon, styles.checkmarkBlue2]}
            />
          </TouchableOpacity>
          <Image style={styles.line5} source={require(line5)} />
          <TouchableOpacity
            onPress={() => handleOptionPress("option3")}
            style={styles.accMiniContainer}
          >
            <Text style={styles.memberText}>Bahasa Indonesia</Text>
            <Image
              source={selectedOption === "option3" ? checkmarkBlue : null}
              style={[styles.icon, styles.checkmarkBlue3]}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.accContainer, styles.accContainerHeight3]}>
          <Text style={styles.accTitle}>Other Languages</Text>
          <TouchableOpacity
            style={styles.accMiniContainer}
          >
            <Text style={styles.memberText}>Chineses</Text>
          </TouchableOpacity>
          <Image style={styles.line5} source={require(line5)} />
          <TouchableOpacity style={styles.accMiniContainer}>
            <Text style={styles.memberText}>Croatian</Text>
          </TouchableOpacity>
          <Image style={styles.line5} source={require(line5)} />
          <TouchableOpacity style={styles.accMiniContainer}>
            <Text style={styles.memberText}>Czech</Text>
          </TouchableOpacity>
          <Image style={styles.line5} source={require(line5)} />
          <TouchableOpacity style={styles.accMiniContainer}>
            <Text style={styles.memberText}>Danish</Text>
          </TouchableOpacity>
          <Image style={styles.line5} source={require(line5)} />
          <TouchableOpacity style={styles.accMiniContainer}>
            <Text style={styles.memberText}>Filipino</Text>
          </TouchableOpacity>
          <Image style={styles.line5} source={require(line5)} />
          <TouchableOpacity style={styles.accMiniContainer}>
            <Text style={styles.memberText}>Finnish</Text>
          </TouchableOpacity>
        </View>
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
    flex: 1,
    marginTop: 24,
    alignItems: "center",
  },

  accContainer: {
    width: 327,
    height: 188,
    borderWidth: 1,
    borderColor: "rgba(37, 40, 54, 1) ",
    borderRadius: 16,
    marginTop: 24,
  },

  accContainerHeight2: {
    height: 217,
  },

  accContainerHeight3: {
    height: 400,
  },

  accTitle: {
    color: "#696974",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
    marginTop: 20,
    marginLeft: 18,
  },

  accMiniContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },

  checkmarkBlue: {
    marginLeft: 147,
  },

  checkmarkBlue2: {
    marginLeft: 188,
  },

  checkmarkBlue3: {
    marginLeft: 105,
  },

  memberText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    marginLeft: 33,
  },

  line5: {
    marginTop: 16,
    marginLeft: 21,
  },
});

export default Language;
