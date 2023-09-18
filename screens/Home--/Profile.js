import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Modal,
} from "react-native";

// import { BlurView } from "@react-native-community/blur";

const Profile = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const home = "../../assets/images/home.png";
  const searchIcon = "../../assets/images/searchIcon.png";
  const download = "../../assets/images/download.png";
  const person = "../../assets/images/personBlue.png";

  const person3 = "../../assets/images/person3.png";
  const editBlue = "../../assets/images/editBlue.png";

  const pattern1 = "../../assets/images/pattern.png";
  const workspace = "../../assets/images/workspace.png";
  const workspaceBg = "../../assets/images/workspaceBg.png";

  const padlock = "../../assets/images/padlock.png";
  const profileBlue = "../../assets/images/profileBlue.png";
  const rightArrowBlue = "../../assets/images/rightArrowBlue.png";
  const line5 = "../../assets/images/line5.png";

  const bell = "../../assets/images/bell.png";
  const globe = "../../assets/images/globe.png";
  const flag = "../../assets/images/flag.png";
  const bin = "../../assets/images/bin.png";

  const shield = "../../assets/images/shield.png";
  const question = "../../assets/images/question.png";
  const information = "../../assets/images/information.png";

  const questionImg = "../../assets/images/questionImg.png";

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"rgba(31, 29, 43, 1)"} />
      <ScrollView>
        <View style={styles.secondContainer}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.profileContainer}>
            <Image style={styles.personPic} source={require(person3)} />
            <View>
              <Text style={styles.profileName}>Tiffany</Text>
              <Text style={styles.profileMail}>Tiffanyjearsey@gmail.com</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Image style={styles.navIcon} source={require(editBlue)} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.PremiumMemberContainer}>
            <ImageBackground style={styles.bg} source={require(pattern1)}>
              <ImageBackground
                style={styles.badge}
                source={require(workspaceBg)}
              >
                <Image style={styles.navIcon} source={require(workspace)} />
              </ImageBackground>
              <View>
                <Text style={styles.profileName}>Premium Member</Text>
                <Text style={styles.PremiumDes}>
                  New movies are coming for you, Download Now!
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <View style={styles.accContainer}>
            <Text style={styles.accTitle}>Account</Text>
            <TouchableOpacity style={styles.accMiniContainer}>
              <View style={styles.midIconBorder}>
                <Image style={styles.midIcon} source={require(profileBlue)} />
              </View>
              <Text style={styles.memberText}>Member</Text>
              <Image
                style={[styles.navIcon, styles.marginLeft]}
                source={require(rightArrowBlue)}
              />
            </TouchableOpacity>
            <Image style={styles.line5} source={require(line5)} />
            <TouchableOpacity style={styles.accMiniContainer}>
              <View style={styles.midIconBorder}>
                <Image style={styles.midIcon} source={require(padlock)} />
              </View>
              <Text style={styles.memberText}>Change Password</Text>
              <Image
                style={[styles.navIcon, styles.marginLeft2]}
                source={require(rightArrowBlue)}
              />
            </TouchableOpacity>
          </View>

          <View style={[styles.accContainer, styles.accContainerHeight2]}>
            <Text style={styles.accTitle}>General</Text>
            <TouchableOpacity  onPress={() => navigation.navigate("Notification")} style={styles.accMiniContainer}>
              <View style={styles.midIconBorder}>
                <Image style={styles.midIcon} source={require(bell)} />
              </View>
              <Text style={styles.memberText}>Notification</Text>
              <Image
                style={[styles.navIcon, styles.marginLeft3]}
                source={require(rightArrowBlue)}
              />
            </TouchableOpacity>
            <Image style={styles.line5} source={require(line5)} />
            <TouchableOpacity
              onPress={() => navigation.navigate("Language")}
              style={styles.accMiniContainer}
            >
              <View style={styles.midIconBorder}>
                <Image style={styles.midIcon} source={require(globe)} />
              </View>
              <Text style={styles.memberText}>Language</Text>
              <Image
                style={[styles.navIcon, styles.marginLeft4]}
                source={require(rightArrowBlue)}
              />
            </TouchableOpacity>
            <Image style={styles.line5} source={require(line5)} />
            <TouchableOpacity style={styles.accMiniContainer}>
              <View style={styles.midIconBorder}>
                <Image style={styles.midIcon} source={require(flag)} />
              </View>
              <Text style={styles.memberText}>Country</Text>
              <Image
                style={[styles.navIcon, styles.marginLeft5]}
                source={require(rightArrowBlue)}
              />
            </TouchableOpacity>
            <Image style={styles.line5} source={require(line5)} />
            <TouchableOpacity style={styles.accMiniContainer}>
              <View style={styles.midIconBorder}>
                <Image style={styles.midIcon} source={require(bin)} />
              </View>
              <Text style={styles.memberText}>Clear Cache</Text>
              <Image
                style={[styles.navIcon, styles.marginLeft6]}
                source={require(rightArrowBlue)}
              />
            </TouchableOpacity>
          </View>

          <View style={[styles.accContainer, styles.accContainerHeight3]}>
            <Text style={styles.accTitle}>More</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("PrivacyPolicy")}
              style={styles.accMiniContainer}
            >
              <View style={styles.midIconBorder}>
                <Image style={styles.midIcon} source={require(shield)} />
              </View>
              <Text style={styles.memberText}>Legal and Policies</Text>
              <Image
                style={[styles.navIcon, styles.marginLeft7]}
                source={require(rightArrowBlue)}
              />
            </TouchableOpacity>
            <Image style={styles.line5} source={require(line5)} />
            <TouchableOpacity style={styles.accMiniContainer}>
              <View style={styles.midIconBorder}>
                <Image style={styles.midIcon} source={require(question)} />
              </View>
              <Text style={styles.memberText}>Help & Feedback</Text>
              <Image
                style={[styles.navIcon, styles.marginLeft8]}
                source={require(rightArrowBlue)}
              />
            </TouchableOpacity>
            <Image style={styles.line5} source={require(line5)} />
            <TouchableOpacity style={styles.accMiniContainer}>
              <View style={styles.midIconBorder}>
                <Image style={styles.midIcon} source={require(information)} />
              </View>
              <Text style={styles.memberText}>About Us</Text>
              <Image
                style={[styles.navIcon, styles.marginLeft9]}
                source={require(rightArrowBlue)}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={toggleModal} style={styles.LogOutBtn}>
            <Text style={styles.LogOutBtnText}>Log Out</Text>
          </TouchableOpacity>

          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
          >
            <View style={styles.modalBackground}>
              {/* <BlurView style={styles.modalBackground} blurType="dark"> */}
              <View style={styles.modalContent}>
                <Image
                  style={styles.questionImg}
                  source={require(questionImg)}
                />
                <Text style={styles.modalText1}>Are you sure ?</Text>
                <Text style={styles.modalText2}>
                  Ullamcorper imperdiet urna id non sed est sem. Rhoncus amet,
                  enim purus gravida donec aliquet.
                </Text>
                <View style={styles.modalBtn}>
                  <TouchableOpacity
                    style={styles.logOutBtn}
                    onPress={() => navigation.navigate("LoginScreen")}
                  >
                    <Text style={styles.logOutBtnText}>Log Out</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.logOutBtn, styles.logOutBtnSelected]}
                    onPress={toggleModal}
                  >
                    <Text
                      style={[
                        styles.logOutBtnText,
                        styles.logOutBtnTextSelected,
                      ]}
                    >
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* </BlurView> */}
            </View>
          </Modal>
        </View>
      </ScrollView>

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

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(31, 29, 43, 1)",
  },

  modalContent: {
    width: 327,
    height: 418,
    backgroundColor: "#252836",
    padding: 30,
    borderRadius: 32,
    alignItems: "center",
  },

  modalText1: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    lineHeight: 28.8,
    marginTop: 32,
  },

  modalText2: {
    color: "#92929D",
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    lineHeight: 19.2,
    width: 271,
    textAlign: "center",
    marginTop: 12,
  },

  questionImg: {
    width: 125,
    height: 125,
  },

  modalBtn: {
    flexDirection: "row",
  },

  logOutBtn: {
    width: 130,
    height: 60,
    borderWidth: 1,
    borderColor: "#12CDD9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    marginTop: 33,
    marginHorizontal: 6,
  },

  logOutBtnSelected: {
    backgroundColor: "#12CDD9",
  },

  icon: {
    width: 24,
    height: 24,
  },

  secondContainer: {
    alignItems: "center",
    flex: 1,
  },

  logOutBtnText: {
    color: "#12CDD9",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },

  logOutBtnTextSelected: {
    color: "white",
  },

  title: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    marginTop: 8,
  },

  profileContainer: {
    width: 327,
    height: 86,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#252836",
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  personPic: {
    width: 54,
    height: 54,
  },

  profileName: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },

  profileMail: {
    color: "#B1B1B1",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },

  PremiumMemberContainer: {
    width: 327,
    height: 110,
    backgroundColor: "rgba(255, 135, 0, 1)",
    borderRadius: 16,
    marginTop: 24,
  },

  PremiumDes: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    width: 231,
  },

  badge: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  bg: {
    width: 327,
    height: 110,
    flexDirection: "row",
    justifyContent: "space-evenly",
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
    height: 322,
  },

  accContainerHeight3: {
    height: 259,
  },

  accTitle: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    marginTop: 23,
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
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
    marginLeft: 16,
  },

  midIcon: {
    width: 20,
    height: 20,
  },

  midIconBorder: {
    width: 32,
    height: 32,
    backgroundColor: "#252836",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 27,
    marginLeft: 18,
  },

  marginLeft: {
    marginLeft: 156,
  },

  marginLeft2: {
    marginLeft: 88,
  },

  marginLeft3: {
    marginLeft: 132,
  },

  marginLeft4: {
    marginLeft: 145,
  },

  marginLeft5: {
    marginLeft: 160,
  },

  marginLeft6: {
    marginLeft: 132,
  },

  marginLeft7: {
    marginLeft: 88,
  },

  marginLeft8: {
    marginLeft: 96,
  },

  marginLeft9: {
    marginLeft: 151,
  },

  line5: {
    marginTop: 16,
    marginLeft: 31,
  },

  LogOutBtn: {
    width: 327,
    height: 56,
    borderColor: "#12CDD9",
    borderWidth: 1,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 16,
  },

  LogOutBtnText: {
    color: "#12CDD9",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
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

export default Profile;
