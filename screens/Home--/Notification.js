import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";

const Notification = ({ navigation }) => {
  const leftArrow = "../../assets/images/leftArrow.png";
  const line7 = "../../assets/images/line7.png";

  const [isEnabled, setIsEnabled] = useState(false);

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
        <Text style={styles.text}>Notification</Text>
      </View>

      <View style={styles.secondContainer}>
        <View style={styles.accContainerHeight}>
          <Text style={styles.accTitle}>Messages and Notification</Text>
          <TouchableOpacity style={styles.accMiniContainer}>
            <Text style={styles.memberText}>Show Notifications</Text>
            <Switch
              trackColor={{ false: "#767577", true: "rgba(18, 205, 217, 1)" }}
              onValueChange={() => setIsEnabled(!isEnabled)}
              value={isEnabled}
              style={styles.switch}
            />
          </TouchableOpacity>
          <Image style={styles.line7} source={require(line7)} />
          <TouchableOpacity style={styles.accMiniContainer}>
            <Text style={styles.memberText}>Exceptions</Text>
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

  accContainerHeight: {
    borderWidth: 1,
    borderColor: "rgba(37, 40, 54, 1) ",
    borderRadius: 16,
    marginTop: 24,
    width: 327,
    height: 163,
  },

  switch: {
    marginLeft: 90,
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

  memberText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    marginLeft: 16,
  },

  line7: {
    marginTop: 18,
    marginLeft: 16,
  },
});

export default Notification;
