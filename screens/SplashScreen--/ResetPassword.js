import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import auth from "@react-native-firebase/auth";


const ResetPassword = ({ navigation }) => {
  const leftArrow = "../../assets/images/leftArrow.png";

  const [email, setEmail] = useState("");

  const sendPasswordResetEmail = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        "Password Reset Email Sent",
        "Check your email for a password reset link."
      );
      navigation.replace('LoginScreen');
    } catch (error) {
      Alert.alert("Password Reset Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"rgba(31, 29, 43, 1)"} />
      <View style={styles.border}>
        <View style={styles.firstContainer}>
          <TouchableOpacity
            style={styles.arrowBtn}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Image style={styles.icon} source={require(leftArrow)} />
          </TouchableOpacity>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.text2}>Reset Password</Text>
          <Text style={styles.text3}>Recover your account password</Text>
        </View>
        <View style={styles.textBox1}>
          <Text style={styles.text4}>Email Address</Text>
          <View style={styles.inputSection}>
            <TextInput
              style={styles.inputName}
              placeholder="Tiffanyjearsey@gmail.com"
              placeholderTextColor="#92929D"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
        </View>
        <View style={styles.bottomPart}>
          <TouchableOpacity
            style={styles.btn}
            // onPress={() => navigation.navigate("Verification")}
            onPress={sendPasswordResetEmail}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(31, 29, 43, 1)",
    height: "100%",
  },

  border: {
    marginHorizontal: 20,
    marginVertical: 20,
  },

  firstContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: 28,
    fontFamily: "Montserrat-Medium",
    letterSpacing: 0.12,
  },

  secondContainer: {
    alignItems: "center",
    marginTop: 46,
  },

  text3: {
    color: "#92929D",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
    letterSpacing: 0.12,
  },

  text4: {
    color: "#EBEBEF",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
    letterSpacing: 0.12,
    position: "absolute",
    top: -8,
    left: 50,
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

  bottomPart: {
    alignItems: "center",
    marginTop: 40,
  },

  btn: {
    backgroundColor: "#12CDD9",
    width: 327,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
  },

  btnText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    letterSpacing: 0.12,
  },
});

export default ResetPassword;
