import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";

const Home = ({ navigation }) => {
  const profilePic = "../../assets/images/profilePic.png";
  const heartIcon = "../../assets/images/heartIcon.png";
  const poster = "../../assets/images/poster.png";

  const home = "../../assets/images/homeBlue.png";
  const searchIcon = "../../assets/images/searchIcon.png";
  const download = "../../assets/images/download.png";
  const person = "../../assets/images/person.png";

  const filterIcon = "../../assets/images/filterIcon.png";
  const line2 = "../../assets/images/line2.png";

  const poster1 = "../../assets/images/poster1.png";
  const poster2 = "../../assets/images/poster2.png";
  const poster3 = "../../assets/images/poster3.png";

  const [activeIndex, setActiveIndex] = useState(1);

  const data = [
    {
      id: 1,
      image: require(poster),
      text: "title",
      text2: "date",
    },
    {
      id: 2,
      image: require(poster),
      text: "Black Panther: Wakanda Forever",
      text2: "On March 2, 2022",
    },
    {
      id: 4,
      image: require(poster),
      text: "title4",
      text2: "date4",
    },
  ];

  const renderItem = ({ item, index }) => {
    const isPresented = index === activeIndex;
    const marginBottomStyle = isPresented ? styles.imageWithMargin : null;

    return (
      <View style={styles.slide}>
        <Image source={item.image} style={[styles.image, marginBottomStyle]} />
        <Text style={styles.CText}>{item.text}</Text>
        <Text style={styles.CText2}>{item.text2}</Text>
      </View>
    );
  };

  const movieData = [
    {
      id: "1",
      image: require(poster1),
      text: "Spider-Man No..",
      text2: "Action",
      navigation: "MovieDetails",
    },
    {
      id: "2",
      image: require(poster2),
      text: "Life of PI",
      text2: "Action",
      navigation: "MovieDetails",
    },
    {
      id: "3",
      image: require(poster3),
      text: "Riverdale",
      text2: "Action",
      navigation: "SerialDetails",
    },
    {
      id: "4",
      image: require(poster1),
      text: "Spider-Man No..",
      text2: "Action",
      navigation: "MovieDetails",
    },
    {
      id: "5",
      image: require(poster2),
      text: "Life of PI",
      text2: "Action",
      navigation: "MovieDetails",
    },
    {
      id: "6",
      image: require(poster3),
      text: "Riverdale",
      text2: "Action",
      navigation: "MovieDetails",
    },
  ];

  const renderItem2 = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.navigation)}
      style={styles.itemContainer}
    >
      <Image source={item.image} style={styles.posterImage} />
      <View style={styles.textContainer}>
        <Text style={styles.posterText}>{item.text}</Text>
        <Text style={styles.posterText2}>{item.text2}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={"rgba(31, 29, 43, 1)"} />
        <View style={styles.firstContainer}>
          <Image style={styles.logoCN} source={require(profilePic)} />
          <View style={styles.firstContainerSub}>
            <Text style={styles.heading1}>Hello, Smith</Text>
            <Text style={styles.heading2}>
              Let’s stream your favorite movie
            </Text>
          </View>
          <TouchableOpacity
            style={styles.heart}
            onPress={() => navigation.navigate("Wishlist")}
          >
            <Image style={styles.heartIcon} source={require(heartIcon)} />
          </TouchableOpacity>
        </View>

        <View style={styles.center}>
          <View style={styles.SearchBar}>
            <TouchableOpacity
              onPress={() => navigation.navigate("UpcomingMovie")}
            >
              <Image style={styles.Icon} source={require(searchIcon)} />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Search a title.."
              placeholderTextColor={"#92929D"}
            />
            <Image style={styles.line2} source={require(line2)} />
            <TouchableOpacity onPress={() => navigation.navigate("Genre")}>
              <Image style={styles.Icon} source={require(filterIcon)} />
            </TouchableOpacity>
          </View>
        </View>

        <Carousel
          data={data}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
          sliderWidth={500}
          itemWidth={245}
          firstItem={1}
        />
        <View style={styles.center}>
          <Pagination
            dotsLength={data.length}
            activeDotIndex={activeIndex}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotStyle={styles.paginationInactiveDot}
          />
        </View>

        <Text style={styles.heading3}>Categories</Text>

        <View style={styles.sliderContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={[styles.box1, styles.selected]}>
              <Text style={[styles.text1, styles.selectedText]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box1}>
              <Text style={styles.text1}>Comedy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box1}>
              <Text style={styles.text1}>Animation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box1}>
              <Text style={styles.text1}>Documentary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box1}>
              <Text style={styles.text1}>N/A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box1}>
              <Text style={styles.text1}>N/A</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.titles}>
          <Text style={styles.heading4}>Most Popular</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("MostPopularMovie")}
          >
            <Text style={styles.heading4Des}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.movieSlider}>
          <FlatList
            data={movieData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={renderItem2}
          />
        </View>

        <View style={styles.titles}>
          <Text style={styles.heading4}>Upcoming</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("UpcomingMovie")}
          >
            <Text style={styles.heading4Des}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.movieSlider}>
          <FlatList
            data={movieData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={renderItem2}
          />
        </View>

        <View style={styles.titles}>
          <Text style={styles.heading4}>Most Popular</Text>
          <TouchableOpacity>
            <Text style={styles.heading4Des}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.movieSlider, styles.lastSlide]}>
          <FlatList
            data={movieData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={renderItem2}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <View style={[styles.navSec1, styles.selectedOne]}>
          <Image style={styles.navIcon} source={require(home)} />
          <Text style={styles.selectedOneText}>Home</Text>
        </View>
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
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.navSec1}
        >
          <Image style={styles.navIcon} source={require(person)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(31, 29, 43, 1)",
    height: "100%",
  },

  firstContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 20,
  },

  firstContainerSub: {
    flexDirection: "column",
    marginRight: 100,
  },

  logoCN: {
    width: 40,
    height: 40,
  },

  heartIcon: {
    width: 24,
    height: 24,
  },

  heart: {
    backgroundColor: "#252836",
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    opacity: 0.8,
  },

  SearchBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#252836",
    borderRadius: 24,
    width: 327,
    height: 41,
  },

  Icon: {
    width: 16,
    height: 16,
    marginTop: 12,
  },

  line2: {
    marginTop: 12,
  },

  searchInput: {
    width: 239,
    color: "#92929D",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },

  heading1: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },

  heading2: {
    color: "#92929D",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
  },

  text: {
    color: "#12CDD9",
    fontSize: 28,
    fontFamily: "Montserrat-SemiBold",
    letterSpacing: 0.12,
  },

  slide: {
    width: 200,
    height: 164,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 14,
  },

  image: {
    height: 134,
    width: 275,
  },

  imageWithMargin: {
    height: 154,
    width: 295,
  },

  CText: {
    position: "absolute",
    top: 70,
    left: -20,
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    width: 214,
  },

  CText2: {
    color: "#EBEBEF",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
    position: "absolute",
    top: 110,
    left: -20,
  },

  paginationContainer: {
    position: "relative",
    top: -40,
  },

  paginationDot: {
    width: 24,
    height: 8,
    borderRadius: 8,
    backgroundColor: "#12CDD9",
  },

  paginationInactiveDot: {
    width: 12,
    height: 12,
    borderRadius: 100,
    opacity: 0.32,
    backgroundColor: "#12CDD9",
  },

  heading3: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    margin: 24,
    position: "relative",
    top: -76,
  },

  heading4: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },

  heading4Des: {
    color: "#12CDD9",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
    position: "relative",
    top: -5,
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

  center: {
    alignItems: "center",
  },

  sliderContainer: {
    position: "relative",
    top: -70,
    left: 24,
  },

  box1: {
    width: 100,
    height: 31,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  text1: {
    color: "white",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
  },

  selected: {
    backgroundColor: "#252836",
    borderRadius: 8,
  },

  selectedText: {
    color: "#12CDD9",
  },

  titles: {
    position: "relative",
    top: -30,
    left: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 380,
  },

  movieSlider: {
    marginBottom: 80,
    left: 15,
  },

  lastSlide: {
    marginBottom: 10,
  },

  itemContainer: {
    marginHorizontal: 10,
  },

  textContainer: {
    width: 135,
    height: 53,
    backgroundColor: "#252836",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: "center",
  },

  posterImage: {
    width: 135,
    height: 178,
  },

  posterText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    marginLeft: 8,
  },

  posterText2: {
    color: "#92929D",
    fontSize: 10,
    fontFamily: "Montserrat-Medium",
    marginLeft: 8,
  },
});

export default Home;
