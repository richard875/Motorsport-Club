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
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import TimeAgo from "../service/time";

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

export default class pageOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this._loadFontsAsync();
    return fetch(
      "https://7om6jkddc8.execute-api.ap-southeast-2.amazonaws.com/dev/posts"
    )
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
  render() {
    // gradient for top himage overlay
    const gradientHeightBottom = 350;
    const dataButtom = Array.from({ length: gradientHeightBottom });
    const gradientHeightTop = 80;
    const dataTop = Array.from({ length: gradientHeightTop });

    if (this.state.isLoading) {
      return (
        <View
          styles={{
            flex: 1,
            backgroundColor: "fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="small" style={{ marginBottom: 10 }} />
          <Text>Loading, please wait...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.wholePage}>
          <StatusBar barStyle="light-content" translucent={true} />
          <ScrollView
            refreshControl={
              <View style={{ marginBottom: 0 }}>
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh.bind(this)}
                />
              </View>
            }
          >
            <View style={styles.topBox}>
              {/* image */}
              <ImageBackground
                style={styles.topPic}
                source={{
                  uri: `${this.state.dataSource[1].imageVer}`,
                }}
              >
                {/* gradient */}
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
                        opacity: (1 / gradientHeightBottom) * (i + 1),
                      }}
                    />
                  ))}
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
                </View>
                {/* Text */}
                <View style={styles.textBigBox}>
                  {this.state.fontsLoaded ? (
                    <Text numberOfLines={5} style={styles.textBig}>
                      {this.state.dataSource[1].title}
                    </Text>
                  ) : (
                    <AppLoading />
                  )}
                </View>
                <View style={styles.timeBox}>
                  {this.state.fontsLoaded ? (
                    <Text style={styles.time}>
                      <TimeAgo time={this.state.dataSource[1].createdAt} /> |{" "}
                      {this.state.dataSource[1].source}
                    </Text>
                  ) : (
                    <AppLoading />
                  )}
                </View>
              </ImageBackground>
            </View>
            <View style={styles.bottomBox}>
              <FlatList
                data={this.state.dataSource.slice(2)}
                renderItem={({ item }) => (
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
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.icon} source={require("../../img/1.png")} />
            </TouchableOpacity>
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
    marginTop: "14%",
    marginHorizontal: "78%",
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
  },
  time: {
    color: "white",
    fontSize: 10,
    fontFamily: "Merriweather-Regular",
  },
  bottomBox: {
    marginTop: 585,
    marginBottom: 30,
  },
  listItem: {
    backgroundColor: "white",
    width: "100%",
    height: 345,
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
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
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
});
