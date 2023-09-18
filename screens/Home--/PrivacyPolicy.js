import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const PrivacyPolicy = ({ navigation }) => {

  const leftArrow = "../../assets/images/leftArrow.png";


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
        <Text style={styles.text}>Privacy Policy</Text>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.desTitle}>Terms</Text>
        <Text style={styles.des}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
          quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
          consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
          est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
        </Text>
        <Text style={styles.des}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
          quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
          consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
          est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
        </Text>
        <Text style={styles.desTitle}>Changes to the Service and/or Terms:</Text>
        <Text style={styles.des}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
          quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
          consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
          est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
        </Text>
        <Text style={styles.des}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
          quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
          consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
          est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
        </Text>
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
    marginLeft: 105,
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
    marginLeft: 54,
  },

  desTitle: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    marginTop: 24,
  },

  des: {
    color: "#92929D",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
    width: 327,
    height: 119,
    marginTop: 8,
  },
});

export default PrivacyPolicy;
