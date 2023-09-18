import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const PaymentMethod = ({ navigation }) => {
  const leftArrow = "../../assets/images/leftArrow.png";

  const VISA = "../../assets/images/VISA.png";
  const MASTER = "../../assets/images/MASTER.png";
  const plus = "../../assets/images/plus.png";

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"rgba(31, 29, 43, 1)"} />
      <View style={styles.border}>
        <View style={styles.firstContainer}>
          <TouchableOpacity
            style={styles.arrowBtn}
            onPress={() => navigation.navigate("PremiumAcc")}
          >
            <Image style={styles.icon} source={require(leftArrow)} />
          </TouchableOpacity>
          <Text style={styles.text}>Payment Method</Text>
        </View>

        <View style={styles.secondContainer}>
          <View style={styles.premiumBtn}>
            <Text style={styles.premiumText}>Payment Confirm</Text>
          </View>
          <Text style={styles.desText}>
            Enjoy the viewing experience after you confirm the payment
          </Text>

          <View style={styles.cardSec}>
            <TouchableOpacity style={styles.card}>
              <Image style={styles.VISA} source={require(VISA)} />
              <Text style={styles.cardText}> •••• •••• •••• 87652 </Text>
              <View style={styles.circleTic}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image style={styles.MASTER} source={require(MASTER)} />
              <Text style={styles.cardText}> •••• •••• •••• 87652 </Text>
              <View style={styles.circleTic}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <View style={styles.addNew}>
                <Image style={styles.icon} source={require(plus)} />
                <Text style={styles.addNewText}>Add New</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.paymentBtn}>
            <Text style={styles.paymentBtnText}>Purchase Now</Text>
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
    marginHorizontal: 90,
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

  secondContainer: {
    alignItems: "center",
    marginTop: 42,
  },

  premiumBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF8700",
    width: 195,
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
    width: 270,
    textAlign: "center",
    marginTop: 16,
  },

  cardSec: {
    marginTop: 48,
  },

  card: {
    width: 327,
    height: 79,
    backgroundColor: "#252836",
    marginBottom: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  addNew: {
    flexDirection: "row",
  },

  addNewText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    marginLeft: 8,
  },

  VISA: {
    width: 45,
    height: 16,
  },

  MASTER: {
    width: 40,
    height: 31,
  },

  circleTic: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
  },

  cardText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
  },

  paymentBtn: {
    width: 327,
    height: 56,
    backgroundColor: "#12CDD9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    marginTop: 160,
  },

  paymentBtnText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
});

export default PaymentMethod;
