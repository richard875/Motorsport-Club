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
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

// Customer Fonts
let customFonts = {
  "Merriweather-Bold": require("../assets/fonts/Merriweather-Bold.ttf"),
  "Merriweather-Black": require("../assets/fonts/Merriweather-Black.ttf"),
  "Merriweather-BlackItalic": require("../assets/fonts/Merriweather-BlackItalic.ttf"),
  "Merriweather-BoldItalic": require("../assets/fonts/Merriweather-BoldItalic.ttf"),
  "Merriweather-Italic": require("../assets/fonts/Merriweather-Italic.ttf"),
  "Merriweather-Light": require("../assets/fonts/Merriweather-Light.ttf"),
  "Merriweather-LightItalic": require("../assets/fonts/Merriweather-LightItalic.ttf"),
  "Merriweather-Regular": require("../assets/fonts/Merriweather-Regular.ttf"),
};

// Dummy Data
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
    // gradient for top himage overlay
    const gradientHeight = 350;
    const gradientBackground = "#3E3E3E";
    const data = Array.from({ length: gradientHeight });
    return (
      <View style={styles.wholePage}>
        <StatusBar barStyle="default" translucent={true} />
        <ScrollView>
          <View style={styles.topBox}>
            {/* image */}
            <ImageBackground
              style={styles.topPic}
              source={{
                uri:
                  "https://www.formula1.com/content/dam/fom-website/manual/Misc/F2%20&%20GP3/1017566322-LAT-20190623-_R3I3315.jpg.transform/9col/image.jpg",
              }}
            >
              {/* gradient */}
              <View style={{ flex: 1 }}>
                {data.map((_, i) => (
                  <View
                    key={i}
                    style={{
                      position: "absolute",
                      backgroundColor: gradientBackground,
                      height: 1,
                      bottom: gradientHeight - i - 1,
                      right: 0,
                      left: 0,
                      zIndex: 2,
                      opacity: (1 / gradientHeight) * (i + 1),
                    }}
                  />
                ))}
              </View>
              {/* Text */}
              <View style={styles.textBigBox}>
                {this.state.fontsLoaded ? (
                  <Text style={styles.textBig}>
                    To whom we lost, Anthoine Hubert 1996-2019
                  </Text>
                ) : (
                  <AppLoading />
                )}
              </View>
              <View style={styles.timeBox}>
                {this.state.fontsLoaded ? (
                  <Text style={styles.time}>34 minutes ago</Text>
                ) : (
                  <AppLoading />
                )}
              </View>
            </ImageBackground>
          </View>
          <View style={styles.bottomBox}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  {this.state.fontsLoaded ? (
                    <View style={styles.listPic}>
                      <Image
                        style={styles.listImageInit}
                        source={{
                          uri: `${item.image}`,
                        }}
                      />
                    </View>
                  ) : (
                    <AppLoading />
                  )}

                  {this.state.fontsLoaded ? (
                    <View style={styles.listTextBox}>
                      <Text style={styles.listTitle}>{item.title}</Text>
                    </View>
                  ) : (
                    <AppLoading />
                  )}

                  {this.state.fontsLoaded ? (
                    <View style={styles.listTimeBox}>
                      <Text style={styles.listTime}>{item.time}</Text>
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
            <Image style={styles.icon} source={require("../img/1.png")} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
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
    backgroundColor: "red",
    height: 565,
    width: "100%",
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
