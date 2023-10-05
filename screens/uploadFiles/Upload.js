import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import firestore from "@react-native-firebase/firestore";

const Upload = ({ navigation }) => {
  const [documentContent, setDocumentContent] = useState("");
  const [documentContent2, setDocumentContent2] = useState("");

  const uploadDocument = async () => {
    if ((documentContent, documentContent2)) {
      try {
        await firestore().collection("documents").add({
          Name: documentContent,
          NICNumber: documentContent2,
          timestamp: firestore.FieldValue.serverTimestamp(),
        });
        setDocumentContent("");
        setDocumentContent2("");
        console.log("Document uploaded successfully.");
        navigation.replace("UploadDone");
      } catch (error) {
        console.error("Error uploading document:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.label}>Name</Text>
      <View style={styles.container2}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          value={documentContent}
          onChangeText={(name) => setDocumentContent(name)}
        />
      </View>

      <Text style={styles.label}>NIC Number</Text>
      <View style={styles.container2}>
        <TextInput
          style={styles.input}
          placeholder="Enter the NIC Number"
          value={documentContent2}
          onChangeText={(nic) => setDocumentContent2(nic)}
        />
        <TouchableOpacity style={styles.btn} onPress={uploadDocument}>
          <Text style={styles.btnText}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 50,
  },

  container2: {
    alignItems: "center",
  },

  label: {
    color: "grey",
    marginBottom: 5,
  },

  input: {
    width: "100%",
    marginBottom: 25,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
  },

  btn: {
    alignItems: "center",
    width: "50%",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
  },

  btnText: {
    color: "white",
  },
});

export default Upload;
