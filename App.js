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
  Share,
  ActivityIndicator,
} from "react-native";
import Swiper from "react-native-swiper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PageOne from "./src/screen/page1";
import PageTwo from "./src/screen/page2";
import NewsDetail from "./src/screen/newsDetail";
import Settings from "./src/screen/settings";
import TandS from "./src/screen/termsConditions";
import PandP from "./src/screen/privacyPolicy";
import * as SplashScreen from "expo-splash-screen";
import SwiperComponent from "./src/screen/swiper";
import AnimatedLoader from "react-native-animated-loader";

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator headerMode="none" initialRouteName="Home">
      <MainStack.Screen name="Home" component={SwiperComponent} />
      <MainStack.Screen name="Details" component={NewsDetail} />
    </MainStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator headerMode="none" initialRouteName="Settings">
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="TandS" component={TandS} />
      <SettingsStack.Screen name="PandP" component={PandP} />
    </SettingsStack.Navigator>
  );
}

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }

  prepareResources = async () => {
    await performAPICalls();
    await downloadAssets();

    this.setState({ appIsReady: true }, async () => {
      await SplashScreen.hideAsync();
    });
  };
  render() {
    if (!this.state.appIsReady) {
      return null;
    }

    return (
      <NavigationContainer>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen name="Main" component={MainStackScreen} />
          <RootStack.Screen name="Settings" component={SettingsStackScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

async function performAPICalls() {}
async function downloadAssets() {}
