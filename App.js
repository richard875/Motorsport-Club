import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "aqua"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gainsboro"
  }
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dot={
          <View
            style={{
              backgroundColor: "rgba(0,0,0,.2)",
              width: 45,
              height: 4,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: "197%"
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "rgba(0,0,0,.8)",
              width: 45,
              height: 4,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: "197%"
            }}
          />
        }
      >
        <View style={styles.slide1}></View>
        <View style={styles.slide2}></View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
