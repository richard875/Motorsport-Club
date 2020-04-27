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
} from "react-native";
import Swiper from "react-native-swiper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PageOne from "./src/screen/page1";
import PageTwo from "./src/screen/page2";
import NewsDetail from "./src/screen/newsDetail";
import Settings from "./src/screen/settings";

class SwiperComponent extends Component {
  render() {
    return (
      <Swiper
        loop={false}
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
          <PageOne navigation={this.props.navigation} />
        </View>
        <View style={styles.slide2}>
          <PageTwo navigation={this.props.navigation} />
          {/* <Settings /> */}
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator headerMode="none" initialRouteName="Home">
      <MainStack.Screen name="Home" component={SwiperComponent} />
      <MainStack.Screen name="Details" component={NewsDetail} />
    </MainStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="Settings" component={Settings} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
});
