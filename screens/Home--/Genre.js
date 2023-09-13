import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Genre = ({ navigation }) => {
  const leftArrow = "../../assets/images/leftArrow.png";
  const genrePoster1 = "../../assets/images/genrePoster1.png";
  const genrePoster2 = "../../assets/images/genrePoster2.png";
  const genrePoster3 = "../../assets/images/genrePoster3.png";
  const genrePoster4 = "../../assets/images/genrePoster4.png";
  const genrePoster5 = "../../assets/images/genrePoster5.png";
  const genrePoster6 = "../../assets/images/genrePoster6.png";
  const genrePoster7 = "../../assets/images/genrePoster7.png";
  const genrePoster8 = "../../assets/images/genrePoster8.png";
  const genreOverlay = "../../assets/images/genreOverlay.png";
  const checkBlue = "../../assets/images/checkBlue.png";

  const [imageVisible, setImageVisible] = useState(false);
  const [imageVisible2, setImageVisible2] = useState(false);
  const [imageVisible3, setImageVisible3] = useState(false);
  const [imageVisible4, setImageVisible4] = useState(false);
  const [imageVisible5, setImageVisible5] = useState(false);
  const [imageVisible6, setImageVisible6] = useState(false);
  const [imageVisible7, setImageVisible7] = useState(false);
  const [imageVisible8, setImageVisible8] = useState(false);

  const [borderColor, setBorderColor] = useState("#EBEBEF");
  const [borderColor2, setBorderColor2] = useState("#EBEBEF");
  const [borderColor3, setBorderColor3] = useState("#EBEBEF");
  const [borderColor4, setBorderColor4] = useState("#EBEBEF");
  const [borderColor5, setBorderColor5] = useState("#EBEBEF");
  const [borderColor6, setBorderColor6] = useState("#EBEBEF");
  const [borderColor7, setBorderColor7] = useState("#EBEBEF");
  const [borderColor8, setBorderColor8] = useState("#EBEBEF");

  const handlePress = () => {
    setImageVisible(!imageVisible);
    setBorderColor(imageVisible ? "#EBEBEF" : "#12CDD9");
  };

  const handlePress2 = () => {
    setImageVisible2(!imageVisible2);
    setBorderColor2(imageVisible2 ? "#EBEBEF" : "#12CDD9");
  };

  const handlePress3 = () => {
    setImageVisible3(!imageVisible3);
    setBorderColor3(imageVisible3 ? "#EBEBEF" : "#12CDD9");
  };

  const handlePress4 = () => {
    setImageVisible4(!imageVisible4);
    setBorderColor4(imageVisible4 ? "#EBEBEF" : "#12CDD9");
  };

  const handlePress5 = () => {
    setImageVisible5(!imageVisible5);
    setBorderColor5(imageVisible5 ? "#EBEBEF" : "#12CDD9");
  };

  const handlePress6 = () => {
    setImageVisible6(!imageVisible6);
    setBorderColor6(imageVisible6 ? "#EBEBEF" : "#12CDD9");
  };

  const handlePress7 = () => {
    setImageVisible7(!imageVisible7);
    setBorderColor7(imageVisible7 ? "#EBEBEF" : "#12CDD9");
  };

  const handlePress8 = () => {
    setImageVisible8(!imageVisible8);
    setBorderColor8(imageVisible8 ? "#EBEBEF" : "#12CDD9");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"rgba(31, 29, 43, 1)"} />
      <View style={styles.border}>
        <View style={styles.firstContainer}>
          <TouchableOpacity
            style={styles.arrowBtn}
            onPress={() => navigation.navigate("UpcomingMovie")}
          >
            <Image style={styles.icon} source={require(leftArrow)} />
          </TouchableOpacity>
          <Text style={styles.text}>Genre</Text>
        </View>

        <View style={styles.secondContainer}>
          <View style={styles.secondSubContainer}>
            <TouchableOpacity onPress={handlePress}>
              <ImageBackground
                style={styles.label}
                source={require(genrePoster1)}
              >
                <ImageBackground
                  style={styles.label}
                  source={require(genreOverlay)}
                >
                  <View style={styles.des}>
                    <View style={[styles.checkbox, { borderColor }]}>
                      {imageVisible && (
                        <Image
                          source={require(checkBlue)}
                          style={styles.image}
                        />
                      )}
                    </View>
                    <Text style={styles.posterText1}>Action</Text>
                  </View>
                </ImageBackground>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress2}>
              <ImageBackground
                style={styles.label}
                source={require(genrePoster2)}
              >
                <ImageBackground
                  style={styles.label}
                  source={require(genreOverlay)}
                >
                  <View style={styles.des}>
                    <View
                      style={[styles.checkbox, { borderColor: borderColor2 }]}
                    >
                      {imageVisible2 && (
                        <Image
                          source={require(checkBlue)}
                          style={styles.image}
                        />
                      )}
                    </View>
                    <Text style={styles.posterText1}>Horror</Text>
                  </View>
                </ImageBackground>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={styles.secondSubContainer}>
            <TouchableOpacity onPress={handlePress3}>
              <ImageBackground
                style={styles.label}
                source={require(genrePoster3)}
              >
                <ImageBackground
                  style={styles.label}
                  source={require(genreOverlay)}
                >
                  <View style={styles.des}>
                    <View
                      style={[styles.checkbox, { borderColor: borderColor3 }]}
                    >
                      {imageVisible3 && (
                        <Image
                          source={require(checkBlue)}
                          style={styles.image}
                        />
                      )}
                    </View>
                    <Text style={styles.posterText1}>Fantasy</Text>
                  </View>
                </ImageBackground>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress4}>
              <ImageBackground
                style={styles.label}
                source={require(genrePoster4)}
              >
                <ImageBackground
                  style={styles.label}
                  source={require(genreOverlay)}
                >
                  <View style={styles.des}>
                    <View
                      style={[styles.checkbox, { borderColor: borderColor4 }]}
                    >
                      {imageVisible4 && (
                        <Image
                          source={require(checkBlue)}
                          style={styles.image}
                        />
                      )}
                    </View>
                    <Text style={styles.posterText1}>Anime</Text>
                  </View>
                </ImageBackground>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={styles.secondSubContainer}>
            <TouchableOpacity onPress={handlePress5}>
              <ImageBackground
                style={styles.label}
                source={require(genrePoster5)}
              >
                <ImageBackground
                  style={styles.label}
                  source={require(genreOverlay)}
                >
                  <View style={styles.des}>
                    <View
                      style={[styles.checkbox, { borderColor: borderColor5 }]}
                    >
                      {imageVisible5 && (
                        <Image
                          source={require(checkBlue)}
                          style={styles.image}
                        />
                      )}
                    </View>
                    <Text style={styles.posterText1}>Romance</Text>
                  </View>
                </ImageBackground>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress6}>
              <ImageBackground
                style={styles.label}
                source={require(genrePoster6)}
              >
                <ImageBackground
                  style={styles.label}
                  source={require(genreOverlay)}
                >
                  <View style={styles.des}>
                    <View
                      style={[styles.checkbox, { borderColor: borderColor6 }]}
                    >
                      {imageVisible6 && (
                        <Image
                          source={require(checkBlue)}
                          style={styles.image}
                        />
                      )}
                    </View>
                    <Text style={styles.posterText1}>Sci-fi</Text>
                  </View>
                </ImageBackground>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={styles.secondSubContainer}>
            <TouchableOpacity onPress={handlePress7}>
              <ImageBackground
                style={styles.label}
                source={require(genrePoster7)}
              >
                <ImageBackground
                  style={styles.label}
                  source={require(genreOverlay)}
                >
                  <View style={styles.des}>
                    <View
                      style={[styles.checkbox, { borderColor: borderColor7 }]}
                    >
                      {imageVisible7 && (
                        <Image
                          source={require(checkBlue)}
                          style={styles.image}
                        />
                      )}
                    </View>
                    <Text style={styles.posterText1}>comedy</Text>
                  </View>
                </ImageBackground>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress8}>
              <ImageBackground
                style={styles.label}
                source={require(genrePoster8)}
              >
                <ImageBackground
                  style={styles.label}
                  source={require(genreOverlay)}
                >
                  <View style={styles.des}>
                    <View
                      style={[styles.checkbox, { borderColor: borderColor8 }]}
                    >
                      {imageVisible8 && (
                        <Image
                          source={require(checkBlue)}
                          style={styles.image}
                        />
                      )}
                    </View>
                    <Text style={styles.posterText1}>Adventures</Text>
                  </View>
                </ImageBackground>
              </ImageBackground>
            </TouchableOpacity>
          </View>
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
    marginHorizontal: 138,
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
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },

  label: {
    width: 155,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  des: {
    flexDirection: "row",
    alignItems: "center",
  },

  // button: {
  //   padding: 10,
  //   borderWidth: 2,
  //   borderColor: 'gray',
  //   borderRadius: 5,
  // },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    // borderColor: "#EBEBEF",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 24,
    height: 24,
  },

  posterText1: {
    color: "white",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
    marginLeft: 8,
  },
});

export default Genre;
