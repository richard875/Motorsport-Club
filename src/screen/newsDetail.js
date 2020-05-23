import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Share,
  ScrollView,
  StatusBar,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { WebView } from "react-native-webview";
import TimeAgo from "../service/time";

let customFonts = {
  "Merriweather-Bold": require("../../assets/fonts/Merriweather-Bold.ttf"),
  "Merriweather-Black": require("../../assets/fonts/Merriweather-Black.ttf"),
  "Merriweather-BlackItalic": require("../../assets/fonts/Merriweather-BlackItalic.ttf"),
  "Merriweather-BoldItalic": require("../../assets/fonts/Merriweather-BoldItalic.ttf"),
  "Merriweather-Italic": require("../../assets/fonts/Merriweather-Italic.ttf"),
  "Merriweather-Light": require("../../assets/fonts/Merriweather-Light.ttf"),
  "Merriweather-LightItalic": require("../../assets/fonts/Merriweather-LightItalic.ttf"),
  "Merriweather-Regular": require("../../assets/fonts/Merriweather-Regular.ttf"),
};

const newsCategory = (num) => {
  if (num === 1) {
    return "Formula 1";
  }
  if (num === 2) {
    return "Formula E";
  }
  if (num === 3) {
    return "Supercars";
  }
  if (num === 4) {
    return "WEC";
  }
  if (num === 5) {
    return "NASCAR";
  }
  if (num === 6) {
    return "Indycar";
  }
  if (num === 7) {
    return "Esports";
  }
  if (num === 8) {
    return "Open wheel";
  }
  if (num === 9) {
    return "Enduro";
  }
  if (num === 10) {
    return "Stock";
  }
  if (num === 11) {
    return "Drag";
  }
  if (num === 12) {
    return "Rally";
  }
  if (num === 13) {
    return "Off-road";
  }
  if (num === 14) {
    return "Touring";
  }
  if (num === 15) {
    return "Moto GP";
  }
  if (num === 16) {
    return "Motocross";
  }
  if (num === 17) {
    return "Events";
  }
};

export default class NewsDetail extends Component {
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
    const { itemWhole } = this.props.route.params;
    const onShare = async () => {
      try {
        const result = await Share.share({
          url: `${itemWhole.url}`,
          title: "Share this arc!",
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };
    return (
      <View style={styles.wholePage}>
        {itemWhole.appCategory === 1 ? (
          <View style={styles.topBar}>
            <View style={styles.topRow}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack();
                }}
                style={styles.backBox}
              >
                <Image
                  style={styles.backIcon}
                  source={require("../../img/back.png")}
                />
              </TouchableOpacity>
              {this.state.fontsLoaded ? (
                <View style={styles.backToNewsBox}>
                  <Text style={styles.backToNews}>News</Text>
                </View>
              ) : (
                <AppLoading />
              )}
              <TouchableOpacity onPress={onShare} style={styles.shareIconBox}>
                <Image
                  style={styles.shareIcon}
                  source={
                    Platform.OS === "ios"
                      ? require("../../img/shareIos.png")
                      : require("../../img/shareAndroid.png")
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.topBarEvents}>
            <View style={styles.topRow}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack();
                }}
                style={styles.backBox}
              >
                <Image
                  style={styles.backIcon}
                  source={require("../../img/back.png")}
                />
              </TouchableOpacity>
              {this.state.fontsLoaded ? (
                <View style={styles.backToNewsBox}>
                  <Text style={styles.backToNews}>Events</Text>
                </View>
              ) : (
                <AppLoading />
              )}
              <TouchableOpacity onPress={onShare} style={styles.shareIconBox}>
                <Image
                  style={styles.shareIcon}
                  source={
                    Platform.OS === "ios"
                      ? require("../../img/shareIos.png")
                      : require("../../img/shareAndroid.png")
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {itemWhole.appCategory === 1 ? (
          <WebView
            source={{ uri: `${itemWhole.url}` }}
            //Enable Javascript support
            javaScriptEnabled={true}
            //For the Cache
            domStorageEnabled={true}
            //View to show while loading the webpage
            //renderLoading={this.ActivityIndicatorLoadingView}
            //Want to show the view or not
            startInLoadingState={true}
          />
        ) : (
          <ScrollView>
            <View style={styles.topTopPic}>
              <Image
                style={styles.topBigPic}
                source={{
                  uri: `${itemWhole.imageVer}`,
                }}
              />
            </View>
            {this.state.fontsLoaded ? (
              <View style={styles.listCategoryBox}>
                <Text style={styles.listCategory}>
                  {newsCategory(itemWhole.newsCategory)}
                </Text>
              </View>
            ) : (
              <AppLoading />
            )}
            {this.state.fontsLoaded ? (
              <View style={styles.title}>
                <Text style={styles.titleText}>{itemWhole.title}</Text>
              </View>
            ) : (
              <AppLoading />
            )}
            {this.state.fontsLoaded ? (
              <View style={styles.authorBox}>
                <Text style={styles.author}>
                  {itemWhole.author === " " || !itemWhole.author
                    ? "Unknown Author"
                    : itemWhole.author}
                </Text>
              </View>
            ) : (
              <AppLoading />
            )}
            {this.state.fontsLoaded ? (
              <View style={styles.timeSourceBox}>
                <Text style={styles.timeSource}>
                  <TimeAgo time={itemWhole.createdAt} /> | {itemWhole.source}
                </Text>
              </View>
            ) : (
              <AppLoading />
            )}
            <View style={styles.breakLine} />

            {itemWhole.description ? (
              <View>
                {this.state.fontsLoaded ? (
                  <View style={styles.descriptionBox}>
                    <Text style={styles.description}>
                      {itemWhole.description}
                    </Text>
                  </View>
                ) : (
                  <AppLoading />
                )}

                {this.state.fontsLoaded ? (
                  <View style={styles.bodyBox}>
                    <Text style={styles.body}>{itemWhole.body}</Text>
                  </View>
                ) : (
                  <AppLoading />
                )}
              </View>
            ) : (
              <View>
                {this.state.fontsLoaded ? (
                  <View style={styles.eventBodyBox}>
                    <Text style={styles.body}>{itemWhole.body}</Text>
                  </View>
                ) : (
                  <AppLoading />
                )}
              </View>
            )}

            <View style={styles.bottomBox}></View>
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wholePage: {
    width: "100%",
    height: "100%",
  },
  scrollBox: {
    marginTop: 0,
    height: "100%",
  },
  topBar: {
    width: "100%",
    height: Platform.OS === "ios" ? "10%" : "7%",
    backgroundColor: "#ff4141",
    justifyContent: "center",
    alignItems: "center",
  },
  topBarEvents: {
    width: "100%",
    height: Platform.OS === "ios" ? "10%" : "7%",
    backgroundColor: "#4141FF",
    justifyContent: "center",
    alignItems: "center",
  },
  topRow: {
    flexDirection: "row",
    top: Platform.OS === "ios" ? "4.5%" : "0%",
    height: Platform.OS === "ios" ? 35 : 30,
    width: "100%",
    paddingLeft: "4%",
  },
  backBox: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  backIcon: {
    aspectRatio: 1,
    height: Platform.OS === "ios" ? "60%" : "60%",
  },
  shareIconBox: {
    position: "absolute",
    right: Platform.OS === "ios" ? "5%" : "5%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  shareIcon: {
    aspectRatio: 1,
    height: Platform.OS === "ios" ? "70%" : "70%",
  },
  backToNewsBox: {
    paddingLeft: 7,
    marginTop: Platform.OS === "ios" ? 1 : 0,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  backToNews: {
    fontSize: Platform.OS === "ios" ? 22 : 19,
    fontFamily: "Merriweather-Light",
    color: "white",
  },
  topTopPic: {
    //position: "absolute",
    //top: "0%",
    height: 399,
    width: "100%",
    backgroundColor: "grey",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    elevation: 8,
  },
  topBigPic: {
    height: "100%",
    width: "100%",
  },
  title: {
    //position: "absolute",
    top: 35,
    width: 250,
    left: 20,
  },
  titleText: {
    fontFamily: "Merriweather-Bold",
    fontSize: 25,
  },
  listCategoryBox: {
    top: 20,
    width: "100%",
    left: 20,
  },
  listCategory: {
    fontSize: 13,
    fontFamily: "Merriweather-Regular",
    color: "#ff4141",
  },
  authorBox: {
    top: 49,
    width: "100%",
    left: 20,
  },
  author: {
    fontSize: 13,
    fontFamily: "Merriweather-Regular",
    //color: "#ff4141",
  },
  timeSourceBox: {
    top: 55,
    width: "100%",
    left: 20,
  },
  timeSource: {
    fontSize: 13,
    fontFamily: "Merriweather-Regular",
    //color: "#ff4141",
  },
  bottomBox: {
    width: "100%",
    height: 160,
  },
  breakLine: {
    top: 80,
    borderBottomColor: "#707070",
    borderBottomWidth: 0.8,
    marginLeft: 20,
    marginRight: 20,
  },
  descriptionBox: {
    top: 100,
    //width: "100%",
    marginLeft: 20,
    marginRight: 20,
    //textAlign: "justify",
  },
  description: {
    fontSize: 17,
    fontFamily: "Merriweather-Bold",
    textAlign: "justify",
    lineHeight: 30,
  },
  bodyBox: {
    top: 130,
    //width: "100%",
    marginLeft: 20,
    marginRight: 20,
    //textAlign: "justify",
  },
  eventBodyBox: {
    top: 90,
    //width: "100%",
    marginLeft: 20,
    marginRight: 20,
    //textAlign: "justify",
  },
  body: {
    fontSize: 17,
    fontFamily: "Merriweather-Regular",
    textAlign: "justify",
    lineHeight: 30,
  },
});
