import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Modal,
} from "react-native";

// import { BlurView } from "@react-native-community/blur";

const SerialDetails = ({ navigation }) => {
  const leftArrow = "../../assets/images/leftArrow.png";
  const heart = "../../assets/images/heartIcon.png";
  const bg2 = "../../assets/images/Bg2.png";
  const overlay = "../../assets/images/Overlay2.png";
  const bigPoster2 = "../../assets/images/bigPoster2.png";
  const calendar = "../../assets/images/calendar.png";
  const clock = "../../assets/images/clock.png";
  const film = "../../assets/images/film.png";
  const line = "../../assets/images/line2.png";
  const starOrange = "../../assets/images/starOrange.png";
  const play = "../../assets/images/play.png";
  const downloadBlue = "../../assets/images/downloadBlue.png";
  const downloadOrange = "../../assets/images/downloadOrange.png";
  const share = "../../assets/images/share.png";
  const closeGrey = "../../assets/images/closeGrey.png";
  const line3 = "../../assets/images/line3.png";

  const home = "../../assets/images/homeBlue.png";
  const searchIcon = "../../assets/images/searchIcon.png";
  const download = "../../assets/images/download.png";
  const person = "../../assets/images/person.png";

  const circle1 = "../../assets/images/circle1.png";
  const circle2 = "../../assets/images/circle2.png";
  const circle3 = "../../assets/images/circle3.png";
  const circle4 = "../../assets/images/circle4.png";
  const fb = "../../assets/images/fb.png";
  const ig = "../../assets/images/ig.png";
  const messenger = "../../assets/images/messenger.png";
  const sendLogo = "../../assets/images/sendLogo.png";

  const person1 = "../../assets/images/person1.png";
  const person2 = "../../assets/images/person2.png";
  const person3 = "../../assets/images/person3.png";

  const downArrow = "../../assets/images/downArrow.png";
  const episode1 = "../../assets/images/episode1.png";
  const group = "../../assets/images/group.png";

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"rgba(31, 29, 43, 1)"} />
      <ScrollView  showsVerticalScrollIndicator={false}>
        <ImageBackground source={require(bg2)} style={styles.bg}>
          <ImageBackground style={styles.overlay} source={require(overlay)}>
            <View style={styles.top}>
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image style={styles.icon} source={require(leftArrow)} />
              </TouchableOpacity>
              <Text style={styles.title}>Riverdale</Text>
              <TouchableOpacity
                // onPress={() => navigation.navigate("Wishlist")}
                style={styles.heartBorder}
              >
                <Image style={styles.icon} source={require(heart)} />
              </TouchableOpacity>
            </View>
            <View style={styles.posterSec}>
              <Image style={styles.bigPoster1} source={require(bigPoster2)} />
              <View style={styles.iconSec}>
                <Image style={styles.iconMini} source={require(calendar)} />
                <Text style={styles.iconText}>2021</Text>
                <Image style={styles.line} source={require(line)} />
                <Image style={styles.iconMini} source={require(clock)} />
                <Text style={styles.iconText}>148 Minutes</Text>
                <Image style={styles.line} source={require(line)} />
                <Image style={styles.iconMini} source={require(film)} />
                <Text style={styles.iconText}>Action</Text>
              </View>
              <View style={styles.ratingSec}>
                <Image style={styles.iconMini} source={require(starOrange)} />
                <Text style={styles.ratingText}>4.5</Text>
              </View>
              <View style={styles.btnSec}>
                <TouchableOpacity style={styles.btnPlay}>
                  <Image style={styles.icon} source={require(play)} />
                  <Text style={styles.playText}>Trailer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Download")}
                  style={styles.otherBtn}
                >
                  <Image style={styles.icon} source={require(downloadBlue)} />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal} style={styles.otherBtn}>
                  <Image style={styles.icon} source={require(share)} />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </ImageBackground>
        <View style={styles.storyLine}>
          <Text style={styles.storyTitle1}>Story Line</Text>
          <Text style={styles.storyTitle2}>
            Originally a story from Archie Comics which started in 1941,
            Riverdale centres around a group of high school students who are
            shocked by the death of classmate, Jason Blossom. Together
            theyunravel the secrets of Riverdale and who More
            <Text style={styles.blueText}> More</Text>
          </Text>
        </View>
        <View style={styles.castAndCrew}>
          <Text style={styles.storyTitle1}>Cast and Crew</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.crew}
          >
            <View style={styles.des}>
              <Image style={styles.person} source={require(person1)} />
              <View style={styles.desAllText}>
                <Text style={styles.desText1}>Matt Reeves</Text>
                <Text style={styles.desText2}>Directors</Text>
              </View>
            </View>
            <View style={styles.des}>
              <Image style={styles.person} source={require(person2)} />
              <View style={styles.desAllText}>
                <Text style={styles.desText1}>Matt Reeves</Text>
                <Text style={styles.desText2}>Writers</Text>
              </View>
            </View>
            <View style={styles.des}>
              <Image style={styles.person} source={require(person3)} />
              <View style={styles.desAllText}>
                <Text style={styles.desText1}>Matt Reeves</Text>
                <Text style={styles.desText2}>Directors</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.episodeSection}>
          <Text style={styles.storyTitle1}>Episode</Text>
          <View style={styles.seasonContainer}>
            <Text style={styles.seasonTitle}>Season 1</Text>
            <Image style={styles.icon} source={require(downArrow)} />
          </View>
          <View style={styles.episode}>
            <View style={styles.episodeTop}>
              <ImageBackground
                source={require(episode1)}
                style={styles.episode1}
              >
                <Image style={styles.playBtn} source={require(group)} />
              </ImageBackground>
              <View style={styles.epiInfo}>
                <View style={styles.premiumLogo}>
                  <Text style={styles.premiumText}>Premium</Text>
                </View>
                <Text style={[styles.iconText, styles.align]}>1h30m</Text>
                <Text style={styles.desText1}>Episode 1</Text>
              </View>
              <TouchableOpacity style={styles.downloadOrangeBtn}>
                <Image style={styles.icon} source={require(downloadOrange)} />
              </TouchableOpacity>
            </View>
            <Text style={styles.epiDes}>
              Football player who longs to write his own music. It’s not all
              smiles for this hunk though after he gets involved with his music
              teacher.
            </Text>
          </View>

          <View style={[styles.episode, styles.lastEpisode]}>
            <View style={styles.episodeTop}>
              <ImageBackground
                source={require(episode1)}
                style={styles.episode1}
              >
                <Image style={styles.playBtn} source={require(group)} />
              </ImageBackground>
              <View style={styles.epiInfo}>
                <View style={styles.premiumLogo}>
                  <Text style={styles.premiumText}>Premium</Text>
                </View>
                <Text style={[styles.iconText, styles.align]}>1h30m</Text>
                <Text style={styles.desText1}>Episode 2</Text>
              </View>
              <TouchableOpacity style={styles.downloadOrangeBtn}>
                <Image style={styles.icon} source={require(downloadOrange)} />
              </TouchableOpacity>
            </View>
            <Text style={styles.epiDes}>
              Football player who longs to write his own music. It’s not all
              smiles for this hunk though after he gets involved with his music
              teacher.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navSec1, styles.selectedOne]}>
          <Image style={styles.navIcon} source={require(home)} />
          <Text style={styles.selectedOneText}>Home</Text>
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
        <TouchableOpacity style={styles.navSec1}>
          <Image style={styles.navIcon} source={require(person)} />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          {/* <BlurView
            style={styles.modalBlur}
            blurType="dark" // You can adjust the blur type as needed
            blurAmount={10} // Adjust the blur amount
          > */}
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Image style={styles.iconMini} source={require(closeGrey)} />
            </TouchableOpacity>
            <Text style={styles.modalText}>Share to</Text>
            <Image style={styles.line6} source={require(line3)} />
            <View style={styles.socialContent}>
              <TouchableOpacity>
                <ImageBackground
                  style={styles.circle}
                  source={require(circle1)}
                >
                  <Image style={styles.icon} source={require(fb)} />
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity>
                <ImageBackground
                  style={styles.circle}
                  source={require(circle2)}
                >
                  <Image style={styles.icon} source={require(ig)} />
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity>
                <ImageBackground
                  style={styles.circle}
                  source={require(circle3)}
                >
                  <Image style={styles.icon} source={require(messenger)} />
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity>
                <ImageBackground
                  style={styles.circle}
                  source={require(circle4)}
                >
                  <Image style={styles.icon} source={require(sendLogo)} />
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

          {/* </BlurView> */}
        </View>
      </Modal>
    </View>
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

  bg: {
    height: 500,
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

  iconSec: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 274,
    marginTop: 16,
  },

  iconMini: {
    width: 16,
    height: 16,
  },

  iconText: {
    color: "#92929D",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
  },

  ratingSec: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 55,
    height: 24,
    borderRadius: 8,
    backgroundColor: "rgba(37, 40, 54, 0.32)",
    marginTop: 8,
  },

  ratingText: {
    color: "#FF8700",
    fontSize: 12,
    fontFamily: "Montserrat-SemiBold",
  },

  btnSec: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 243,
    marginTop: 24,
  },

  playText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    marginLeft: 8,
  },

  btnPlay: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 115,
    height: 48,
    borderRadius: 32,
    backgroundColor: "rgba(18, 205, 217, 1)",
  },

  otherBtn: {
    width: 48,
    height: 48,
    borderRadius: 99,
    backgroundColor: "#252836",
    alignItems: "center",
    justifyContent: "center",
  },

  storyLine: {
    marginTop: 32,
    marginLeft: 54,
  },

  storyTitle1: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },

  storyTitle2: {
    color: "#EBEBEF",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    marginTop: 8,
    width: 327,
  },

  blueText: {
    color: "#12CDD9",
    fontFamily: "Montserrat-SemiBold",
  },

  castAndCrew: {
    marginTop: 24,
    marginLeft: 54,
  },

  des: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 138,
    marginTop: 16,
    marginRight: 16,
  },

  person: {
    width: 40,
    height: 40,
  },

  desText1: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
  },

  desText2: {
    color: "#92929D",
    fontSize: 10,
    fontFamily: "Montserrat-Medium",
  },

  desAllText: {
    marginLeft: 8,
  },

  episodeSection: {
    marginTop: 24,
    marginLeft: 54,
  },

  seasonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 93,
    marginTop: 16,
  },

  seasonTitle: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },

  episode: {
    width: 327,
    height: 212,
    backgroundColor: "#252836",
    borderRadius: 16,
    marginTop: 16,
    padding: 12,
  },

  lastEpisode: {
    marginBottom: 16,
  },

  episodeTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  playBtn: {
    width: 50,
    height: 50,
  },

  episode1: {
    width: 121,
    height: 83,
    alignItems: "center",
    justifyContent: "center",
  },

  epiInfo: {
    marginRight: 30,
  },

  premiumText: {
    color: "white",
    fontSize: 10,
    fontFamily: "Montserrat-Medium",
  },

  premiumLogo: {
    width: 65,
    height: 20,
    backgroundColor: "#FF8700",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },

  align: {
    marginTop: 8,
    marginBottom: 4,
  },

  downloadOrangeBtn: {
    width: 48,
    height: 48,
    backgroundColor: "#1F1D2B",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  epiDes: {
    color: "#EBEBEF",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    lineHeight: 22.4,
    width: 282,
    marginTop: 11,
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

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },

  modalBlur: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    width: 327,
    height: 234,
    borderRadius: 16,
    alignItems: "center",
    backgroundColor: "#252836",
    padding: 20,
  },

  modalText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    marginTop: 19,
  },

  line6: {
    marginTop: 16,
  },

  closeButton: {
    backgroundColor: "#1F1D2B",
    padding: 8,
    borderRadius: 12,
    marginLeft: 250,
  },

  closeButtonText: {
    color: "white",
    fontSize: 16,
  },

  socialContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 244,
    marginTop: 32,
  },

  circle: {
    width: 49,
    height: 49,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SerialDetails;
