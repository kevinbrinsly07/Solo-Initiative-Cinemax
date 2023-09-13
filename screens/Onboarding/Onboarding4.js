import React from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Onboarding4 = ({ navigation }) => {
  const rightArrow = "../../assets/images/rightArrow.png";
  const slider = "../../assets/images/slider.png";
  const progressBtn = "../../assets/images/progressBtn.png";
  const bg = "../../assets/images/bg.png";

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={true}
        // backgroundColor={'rgba(31, 29, 43, 1)'}
      />
      <ImageBackground source={require(bg)} style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentOne}>
            <Text style={[styles.text1, styles.textCus]}>
              The biggest international and local film streaming
            </Text>
            <Text style={[styles.text2, styles.textCus]}>
              Semper in cursus magna et eu varius nunc adipiscing. Elementum
              justo, laoreet id sem semper parturient.
            </Text>
            <View style={styles.lastBottom}>
              <TouchableOpacity style={styles.sliderSection}>
                <Image style={styles.slider} source={require(slider)} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Onboarding5")}
              >
                <Image style={styles.nextBtn} source={require(progressBtn)} />
                <Image style={styles.rightArrow} source={require(rightArrow)} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(31, 29, 43, 1)",
  },

  lastBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
  },

  rightArrow: {
    width: 24,
    height: 24,
    position: "absolute",
    bottom: 28,
    left: 28,
  },

  slider: {
    width: 76,
    height: 10,
    marginRight: 100,
  },

  nextBtn: {
    width: 80,
    height: 80,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },

  contentOne: {
    backgroundColor: "#171725",
    width: 327,
    height: 341,
    borderRadius: 32,
    alignItems: "center",
  },

  text1: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    lineHeight: 28.8,
    paddingHorizontal: 40,
    marginTop: 32,
  },

  text2: {
    color: "#92929D",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
    paddingHorizontal: 35,
    marginTop: 14,
    textAlign: "center",
  },

  textCus: {
    textAlign: "center",
    letterSpacing: 0.12,
  },
});

export default Onboarding4;
