import React, { Component, useCallback } from "react";
import qs from "qs";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
  StatusBar,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import TimeAgo from "../service/time";
const Device = require("react-native-device-detection");

let customFonts = {
  "Merriweather-Bold": require("../../assets/fonts/Merriweather-Bold.ttf"),
  "Merriweather-Black": require("../../assets/fonts/Merriweather-Black.ttf"),
  "Merriweather-BlackItalic": require("../../assets/fonts/Merriweather-BlackItalic.ttf"),
  "Merriweather-BoldItalic": require("../../assets/fonts/Merriweather-BoldItalic.ttf"),
  "Merriweather-Italic": require("../../assets/fonts/Merriweather-Italic.ttf"),
  "Merriweather-Light": require("../../assets/fonts/Merriweather-Light.ttf"),
  "Merriweather-LightItalic": require("../../assets/fonts/Merriweather-LightItalic.ttf"),
  "Merriweather-Regular": require("../../assets/fonts/Merriweather-Regular.ttf"),
  "sf-black": require("../../assets/fonts/sf-ui-display-black-58646a6b80d5a.otf"),
  "sf-bold": require("../../assets/fonts/sf-ui-display-bold-58646a511e3d9.otf"),
  "sf-heavy": require("../../assets/fonts/sf-ui-display-heavy-586470160b9e5.otf"),
  "sf-light": require("../../assets/fonts/sf-ui-display-light-58646b33e0551.otf"),
  "sf-medium": require("../../assets/fonts/sf-ui-display-medium-58646be638f96.otf"),
  "sf-semibold": require("../../assets/fonts/sf-ui-display-semibold-58646eddcae92.otf"),
  "sf-thin": require("../../assets/fonts/sf-ui-display-thin-58646e9b26e8b.otf"),
  "sf-ultralight": require("../../assets/fonts/sf-ui-display-ultralight-58646b19bf205.otf"),
};

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  // Loading Fonts
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    const OpenURLButton = ({ url }) => {
      const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      }, [url]);

      return (
        <TouchableOpacity onPress={handlePress} style={styles.generalTextBox}>
          <Text style={styles.generalText}>Join our club!</Text>
          <Image
            style={styles.forward}
            source={require("../../img/fowardBlack.png")}
          />
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.wholePage}>
        {Platform.OS === "ios" ? (
          <StatusBar barStyle="dark-content" />
        ) : (
          <StatusBar barStyle="light-content" translucent={false} />
        )}
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <View style={styles.topBar}>
            <View style={styles.backIconBox}>
              <Image
                style={styles.backIcon}
                source={require("../../img/backBlack.png")}
              />
            </View>
            {this.state.fontsLoaded ? (
              <View style={styles.backToNewsBox}>
                <Text style={styles.backToNews}>Piston</Text>
              </View>
            ) : (
              <AppLoading />
            )}
          </View>
        </TouchableWithoutFeedback>

        {this.state.fontsLoaded ? (
          <Text style={styles.general}>General</Text>
        ) : (
          <AppLoading />
        )}
        <View style={styles.breakLine} />

        {this.state.fontsLoaded ? (
          <OpenURLButton
            url={
              "https://auckland.campuslabs.com/engage/organization/uoamotorsportclub"
            }
          ></OpenURLButton>
        ) : (
          <AppLoading />
        )}
        {this.state.fontsLoaded ? (
          <View>
            <TouchableOpacity
              style={styles.generalText2Box}
              onPress={() =>
                Linking.openURL(
                  "mailto:motorsportclubuoa@gmail.com?subject=Hey Guys!"
                )
              }
            >
              <Text style={styles.generalText2}>Contact Us</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <AppLoading />
        )}
        {this.state.fontsLoaded ? (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("TandS");
            }}
            style={styles.generalText3Box}
          >
            <Text style={styles.generalText3}>Terms &#38; Conditions</Text>
          </TouchableOpacity>
        ) : (
          <AppLoading />
        )}
        {this.state.fontsLoaded ? (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("PandP");
            }}
            style={styles.generalText4Box}
          >
            <Text style={styles.generalText4}>Privacy Policy</Text>
          </TouchableOpacity>
        ) : (
          <AppLoading />
        )}
        {this.state.fontsLoaded ? (
          <Text style={styles.versionText}>Verison 1.0.0</Text>
        ) : (
          <AppLoading />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wholePage: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  topBar: {
    flexDirection: "row",
    top: Platform.OS === "ios" ? (Device.isIphoneX ? 60 : 47) : 35,
    height: 35,
    width: "100%",
    paddingLeft: 20,
    marginBottom: Platform.OS === "ios" ? 20 : 0,
  },
  backIconBox: {
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  backBox: {
    flex: 1,
    flexDirection: "row",
    //position: "relative",
    //top: 200,
    left: 13,
    marginBottom: 50,
  },
  backIcon: {
    height: Platform.OS === "ios" ? "60%" : "50%",
    width: Platform.OS === "ios" ? "60%" : "50%",
  },
  forward: {
    height: 23,
    width: 23,
    position: "relative",
    top: -21,
    left: "75%",
  },
  forwardBox: {
    position: "relative",
    top: "9%",
    left: 223,
  },
  backToNewsBox: {
    marginTop: Platform.OS === "ios" ? 0 : 1,
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  backToNews: {
    fontSize: 30,
    fontFamily: "sf-bold",
    color: "black",
  },
  general: {
    position: "relative",
    top: "10%",
    left: 33,
    fontSize: 20,
    fontFamily: "Merriweather-Bold",
    color: "black",
  },
  breakLine: {
    top: 100,
    borderBottomColor: "#707070",
    borderBottomWidth: 0.8,
    marginLeft: 20,
    marginRight: 20,
  },
  generalText: {
    fontSize: 15,
    fontFamily: "Merriweather-Light",
  },
  generalTextBox: {
    position: "relative",
    top: 130,
    left: 33,
  },
  generalText2: {
    fontSize: 15,
    fontFamily: "Merriweather-Light",
  },
  generalText2Box: {
    position: "relative",
    top: 145,
    left: 33,
  },
  generalText3: {
    fontSize: 15,
    fontFamily: "Merriweather-Light",
  },
  generalText3Box: {
    position: "relative",
    top: 179,
    left: 33,
  },
  generalText4: {
    fontSize: 15,
    fontFamily: "Merriweather-Light",
  },
  generalText4Box: {
    position: "relative",
    top: 213,
    left: 33,
  },
  versionText: {
    fontSize: 10,
    fontFamily: "Merriweather-Light",
    position: "absolute",
    top: "60%",
    right: "10%",
    color: "#B2B2B2",
  },
});
