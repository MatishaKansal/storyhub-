import * as React from "react";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import firebase from "firebase";
import db from "../config";

export default class ExchangeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      Iname: "",
      Idescription: "",
    };
  }

  addItem = (itemName, description) => {
    var userName = this.setState.userId;
    db.collection("exchange_requests").add({
      username: userName,
      item_name: this.state.Iname,
      item_description: this.state.Idescription,
    });
    this.setState({
      Iname: "",
      Idescription: "",
    });

    return Alert.alert("Item ready to exchange", "", [
      {
        text: "OK",
        onPress: () => {
          this.props.navigation.navigate("HomeScreen");
        },
      },
    ]);
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Item Name"
          onChangeText={(text) =>
            this.setState({
              Iname: text,
            })
          }
        ></TextInput>
        <TextInput
          placeholder="Item Description"
          onChangeText={(text) =>
            this.setState({
              Idescription: text,
            })
          }
        ></TextInput>
        <TouchableOpacity
          style={[styles.button, { marginTop: 10 }]}
          onPress={() => {
            this.addItem(this.state.Iname, this.state.Idescription);
          }}
        >
          <Text style={{ color: "#fffff", fontSize: 18, fontWeight: "bold" }}>
            Add Item
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
});
