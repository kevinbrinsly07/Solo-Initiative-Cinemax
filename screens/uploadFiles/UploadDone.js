import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
} from "react-native";

import firestore from "@react-native-firebase/firestore";

const UploadDone = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await firestore().collection("documents").get();
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(documents);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchData();
  }, []); 

  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.header}>All Data</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>Name:  {item.Name}</Text>
              <Text>NIC Number:  {item.NICNumber}</Text>
            </View>
          )}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },

  text: {
    fontSize: 30,
    textAlign: "center",
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  item: {
    padding: 10,
    marginBottom: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default UploadDone;
