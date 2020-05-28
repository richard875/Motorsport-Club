import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
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
import LottieView from "lottie-react-native";
import TimeAgo from "../service/time";
import api from "../service/api";
const Device = require("react-native-device-detection");

// Customer Fonts
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

// Dummy Data, dont need it rn
const DATA = [
  {
    id: "1",
    title:
      "Where it went wrong for Ferrari and Sebastian Vettel in 2018 – can they catch Mercedes?",
    time: "3 hours ago",
    image:
      "https://www.racefans.net/wp-content/uploads/2016/02/vett-ferr-4.jpg",
  },
  {
    id: "2",
    title: "How Chinese GP’s Q3 mess brought up F1’s ‘gentleman’s rule’",
    time: "4 hours ago",
    image:
      "https://cdn1.formulaspy.com/v3/wp-content/uploads/2019/04/14080623/D4GHHkaW0AAgkh5.jpg",
  },
  {
    id: "3",
    title: "Golding reprimanded, Whincup fined",
    time: "A Day ago",
    image:
      "https://media.speedcafe.com/wp-content/uploads/2016/03/Whincup-penalty.png",
  },
];
// -----------

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

export default class PageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isLoading: true,
      dataSource: null,
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

  // For both Fonts and News
  componentDidMount() {
    this.animation.play();
    this._loadFontsAsync();
    return fetch(api())
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  _onRefresh() {
    this.setState({ refreshing: true });
    this.componentDidMount().then(() => {
      this.setState({ refreshing: false });
    });
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    // gradient for top himage overlay
    const gradientHeightBottom = 350;
    const dataButtom = Array.from({ length: gradientHeightBottom });
    const gradientHeightTop = 80;
    const dataTop = Array.from({ length: gradientHeightTop });

    if (this.state.isLoading) {
      return (
        <View style={styles.animationContainer}>
          <LottieView
            ref={(animation) => {
              this.animation = animation;
            }}
            style={styles.lottie}
            source={require("../../assets/7233-car-animation.json")}
            speed={2}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.wholePage}>
          <StatusBar barStyle="light-content" translucent={false} />
          {dataTop.map((_, i) => (
            <View
              key={i}
              style={{
                position: "absolute",
                backgroundColor: "#3E3E3E",
                height: 1,
                top: gradientHeightTop - i - 1,
                bottom: 10,
                right: 0,
                left: 0,
                zIndex: 2,
                opacity: (1 / gradientHeightTop) * (i + 1),
              }}
            />
          ))}

          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
          >
            <TouchableWithoutFeedback
              onPress={() => {
                this.props.navigation.navigate("Details", {
                  itemWhole: this.state.dataSource.filter(
                    (x) => x.appCategory == 2
                  )[0],
                });
              }}
            >
              <View style={styles.topBox}>
                {/* image */}
                <ImageBackground
                  style={styles.topPic}
                  source={{
                    uri: `${
                      this.state.dataSource.filter((x) => x.appCategory == 2)[0]
                        .imageVer
                    }`,
                  }}
                >
                  {/* gradient */}
                  {Platform.OS === "ios" ? (
                    <View style={{ flex: 1 }}>
                      {dataButtom.map((_, i) => (
                        <View
                          key={i}
                          style={{
                            position: "absolute",
                            backgroundColor: "#3E3E3E",
                            height: 1,
                            bottom: gradientHeightBottom - i - 1,
                            right: 0,
                            left: 0,
                            zIndex: 2,
                            opacity: (0.5 / gradientHeightBottom) * (i + 1),
                          }}
                        />
                      ))}
                    </View>
                  ) : (
                    <View></View>
                  )}

                  {/* Text */}
                  <View style={styles.textBigBox}>
                    {this.state.fontsLoaded ? (
                      <Text numberOfLines={5} style={styles.textBig}>
                        {
                          this.state.dataSource.filter(
                            (x) => x.appCategory == 2
                          )[0].title
                        }
                      </Text>
                    ) : (
                      <AppLoading />
                    )}
                  </View>
                  <View style={styles.timeBox}>
                    {this.state.fontsLoaded ? (
                      <Text style={styles.time}>
                        <TimeAgo
                          time={
                            this.state.dataSource.filter(
                              (x) => x.appCategory == 2
                            )[0].createdAt
                          }
                        />{" "}
                        |{" "}
                        {
                          this.state.dataSource.filter(
                            (x) => x.appCategory == 2
                          )[0].source
                        }
                      </Text>
                    ) : (
                      <AppLoading />
                    )}
                  </View>
                  {Platform.OS === "ios" ? (
                    <View></View>
                  ) : (
                    <View style={{ flex: 1 }}>
                      {dataButtom.map((_, i) => (
                        <View
                          key={i}
                          style={{
                            position: "absolute",
                            backgroundColor: "#3E3E3E",
                            height: 1,
                            bottom: gradientHeightBottom - i - 1,
                            right: 0,
                            left: 0,
                            zIndex: 2,
                            opacity: (0.5 / gradientHeightBottom) * (i + 1),
                          }}
                        />
                      ))}
                    </View>
                  )}
                </ImageBackground>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate("Settings")}
                >
                  <Image
                    style={styles.icon}
                    source={require("../../img/1.png")}
                  />
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>

            <View style={styles.bottomBox}>
              <FlatList
                data={this.state.dataSource
                  .filter((x) => x.appCategory == 2)
                  .slice(1)}
                renderItem={({ item }) => (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      this.props.navigation.navigate("Details", {
                        itemWhole: item,
                      });
                    }}
                  >
                    <View style={styles.listItem}>
                      {this.state.fontsLoaded ? (
                        <View style={styles.listPic}>
                          <Image
                            style={styles.listImageInit}
                            source={{
                              uri: `${item.imageHor}`,
                            }}
                          />
                        </View>
                      ) : (
                        <AppLoading />
                      )}

                      {this.state.fontsLoaded ? (
                        <View>
                          <Text style={styles.listCategory}>
                            {newsCategory(item.newsCategory)}
                          </Text>
                        </View>
                      ) : (
                        <AppLoading />
                      )}

                      {this.state.fontsLoaded ? (
                        <View style={styles.listTextBox}>
                          <Text numberOfLines={3} style={styles.listTitle}>
                            {item.title}
                          </Text>
                        </View>
                      ) : (
                        <AppLoading />
                      )}

                      {this.state.fontsLoaded ? (
                        <View style={styles.listTimeBox}>
                          <Text style={styles.listTime}>
                            <TimeAgo time={item.createdAt} /> | {item.source}
                          </Text>
                        </View>
                      ) : (
                        <AppLoading />
                      )}
                    </View>
                  </TouchableWithoutFeedback>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  wholePage: {
    width: "100%",
    height: "100%",
  },
  topPic: {
    height: "100%",
    width: "100%",
  },
  icon: {
    width: 56,
    height: 56,
    borderRadius: 60,
  },
  button: {
    position: "absolute",
    //marginTop: "17%",
    //marginHorizontal: "78%",
    top: Platform.OS === "ios" ? (Device.isIphoneX ? "10%" : "8%") : "8%",
    left: "80%",
  },
  topBox: {
    position: "absolute",
    backgroundColor: "grey",
    height: 565,
    width: "100%",
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
  textBigBox: {
    position: "absolute",
    left: "5%",
    bottom: "10%",
    width: "60%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    zIndex: 1000,
  },
  textBig: {
    color: "white",
    fontSize: 25,
    fontFamily: "Merriweather-Bold",
    //textAlign: "justify",
  },
  timeBox: {
    position: "absolute",
    left: "5%",
    bottom: "5%",
    width: "60%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    zIndex: 1000,
  },
  time: {
    color: "white",
    fontSize: 10,
    fontFamily: "Merriweather-Regular",
  },
  topCat: {
    position: "relative",
    bottom: 200,
    color: "white",
    fontSize: 13,
    fontFamily: "Merriweather-Regular",
  },
  bottomBox: {
    marginTop: 585,
    marginBottom: 30,
  },
  listItem: {
    backgroundColor: "white",
    width: "100%",
    height: 400,
    alignItems: "stretch",
    marginVertical: 14,
  },
  listTitle: {
    fontSize: 20,
    fontFamily: "Merriweather-Bold",
    lineHeight: 30,
  },
  listPic: {
    //backgroundColor: "blue",
    height: "58%",
    width: "100%",
  },
  listTextBox: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  listCategory: {
    position: "relative",
    top: 13,
    left: 20,
    fontSize: 13,
    fontFamily: "Merriweather-Regular",
    color: "#ff4141",
  },
  listTime: {
    fontSize: 10,
    fontFamily: "Merriweather-Regular",
    color: "#5A5A5A",
  },
  listTimeBox: {
    paddingLeft: 20,
    paddingRight: 20,
    bottom: "-3%",
  },
  listImageInit: {
    width: "100%",
    height: "100%",
  },
  lottie: {
    width: 300,
    height: 300,
    backgroundColor: "transparent",
  },
});
