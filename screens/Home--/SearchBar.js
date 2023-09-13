import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SearchBar = ({ navigation }) => {
  const searchIcon = "../../assets/images/searchIcon.png";
  const filterIcon = "../../assets/images/filterIcon.png";
  const line2 = "../../assets/images/line2.png";

  return (
    <View style={styles.SearchBar}>
      <TouchableOpacity
      // onPress={() => navigation.navigate("Search")}
      >
        <Image style={styles.Icon} source={require(searchIcon)} />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Search a title.."
        placeholderTextColor={"#92929D"}
      />
      <Image style={styles.line2} source={require(line2)} />
      <TouchableOpacity>
        <Image style={styles.Icon} source={require(filterIcon)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default SearchBar;
