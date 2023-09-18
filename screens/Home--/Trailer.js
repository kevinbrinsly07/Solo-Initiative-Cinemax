import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Trailer = ({ navigation }) => {
  const leftArrow = "../../assets/images/leftArrow.png";
  const heart = "../../assets/images/heartIcon.png";
  const video = "../../assets/images/Video.png";
  const calendar = "../../assets/images/calendar.png";
  const film = "../../assets/images/film.png";
  const line2 = "../../assets/images/line2.png";

  const person1 = "../../assets/images/person1.png";
  const person2 = "../../assets/images/person2.png";
  const person3 = "../../assets/images/person3.png";

  const gallery1 = "../../assets/images/gallery1.png";
  const gallery2 = "../../assets/images/gallery2.png";
  const gallery3 = "../../assets/images/gallery3.png";

  const home = "../../assets/images/homeBlue.png";
  const searchIcon = "../../assets/images/searchIcon.png";
  const download = "../../assets/images/download.png";
  const person = "../../assets/images/person.png";

  return (
    <View style={styles.container}>
      <StatusBar
        // hidden={true}
        backgroundColor={"rgba(31, 29, 43, 1)"}
      />
      <ScrollView>
        <View style={styles.top}>
          <TouchableOpacity onPress={() => navigation.navigate("UpcomingMovie")}>
            <Image style={styles.icon} source={require(leftArrow)} />
          </TouchableOpacity>
          <Text style={styles.title}>Trailer</Text>
          <TouchableOpacity
            // onPress={() => navigation.navigate("Wishlist")}
            style={styles.heartBorder}
          >
            <Image style={styles.icon} source={require(heart)} />
          </TouchableOpacity>
        </View>
        <View style={styles.alignItemCenter}>
          <Image style={styles.video} source={require(video)} />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>The Batman</Text>
          <View style={styles.infoMini}>
            <Image style={styles.iconMini} source={require(calendar)} />
            <Text style={styles.infoText}>Release Date: March 2, 2022 </Text>
            <Image style={styles.iconMini} source={require(film)} />
            <Image source={require(line2)} />
            <Text style={styles.infoText}>Action</Text>
          </View>
        </View>
        <View style={styles.storyLine}>
          <Text style={styles.storyTitle1}>Story Line</Text>
          <Text style={styles.storyTitle2}>
            THE BATMAN is an edgy, action-packed thriller that depicts Batman in
            his early years, struggling to balance rage with righteousness as he
            investigates a disturbing mystery that has terrorized Gotham. Robert
            Pattinson delivers a raw, intense portrayal of Batman as a
            disillusioned, desperate vigilante awakened by the realization..
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

        <View style={styles.gallery}>
          <Text style={styles.storyTitle1}>Gallery</Text>
          <View style={styles.galleryContents}>
            <Image style={styles.galleryImg} source={require(gallery1)} />
            <Image style={styles.galleryImg} source={require(gallery2)} />
            <Image style={styles.galleryImg} source={require(gallery3)} />
          </View>
          <View style={[styles.galleryContents,styles.LastGalleryContents]}>
            <Image style={styles.galleryImg} source={require(gallery3)} />
            <Image style={styles.galleryImg} source={require(gallery2)} />
            <Image style={styles.galleryImg} source={require(gallery1)} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={[styles.navSec1, styles.selectedOne]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(31, 29, 43, 1)",
    flex: 1,
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

  alignItemCenter: {
    alignItems: "center",
  },

  video: {
    width: 327,
    height: 180,
  },

  iconMini: {
    width: 16,
    height: 16,
  },

  info: {
    marginLeft: 56,
    marginTop: 12,
  },

  infoMini: {
    flexDirection: "row",
    width: 277,
    justifyContent: "space-between",
    marginTop: 9,
  },

  infoText: {
    color: "#92929D",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
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
    height: 136,
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

  gallery:{
    marginLeft: 54,
    marginTop: 24,
  },

  galleryContents: {
    flexDirection: "row",
    width: 327,
    justifyContent: 'space-between',
    marginTop: 16,
  },

  LastGalleryContents:{
    marginBottom: 20,
  },

  galleryImg: {
    width: 100,
    height: 100,
  },

  bottomNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
    bottom: 0,
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

export default Trailer;
