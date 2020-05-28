import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  Button,
  StatusBar,
} from "react-native";
import Swiper from "react-native-swiper";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import PageOne from "./page1";
import PageTwo from "./page2";
// import NewsDetail from "./src/screen/newsDetail";
// import Settings from "./src/screen/settings";
// import TandS from "./src/screen/termsConditions";
// import PandP from "./src/screen/privacyPolicy";
// import * as SplashScreen from "expo-splash-screen";

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper
        index={0}
        loop={false}
        style={styles.wrapper}
        showsButtons={false}
        paginationStyle={{ bottom: Platform.OS === "ios" ? "94%" : "97%" }}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
      >
        <View style={styles.slide1}>
          <PageOne navigation={this.props.navigation} />
        </View>
        <View style={styles.slide2}>
          <PageTwo navigation={this.props.navigation} />
        </View>
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
    backgroundColor: "#E5E5E5",
  },
  dot: {
    backgroundColor: "rgba(255,255,255,.3)",
    width: 60,
    height: 4,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: "rgba(255,255,255,1)",
    width: 60,
    height: 4,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
});
