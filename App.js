import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import Swiper from "react-native-swiper";
import PageOne from "./src/page1";

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dot={
          <View
            style={{
              backgroundColor: "rgba(255,255,255,.2)",
              width: 45,
              height: 4,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: Platform.OS === "ios" ? "197%" : "170%",
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "rgba(255,255,255,.8)",
              width: 45,
              height: 4,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: Platform.OS === "ios" ? "197%" : "170%",
            }}
          />
        }
      >
        <View style={styles.slide1}>
          <PageOne />
        </View>
        <View style={styles.slide2}></View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
});
