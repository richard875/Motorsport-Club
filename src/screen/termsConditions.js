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
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
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
  "sf-black": require("../../assets/fonts/sf-ui-display-black-58646a6b80d5a.otf"),
  "sf-bold": require("../../assets/fonts/sf-ui-display-bold-58646a511e3d9.otf"),
  "sf-heavy": require("../../assets/fonts/sf-ui-display-heavy-586470160b9e5.otf"),
  "sf-light": require("../../assets/fonts/sf-ui-display-light-58646b33e0551.otf"),
  "sf-medium": require("../../assets/fonts/sf-ui-display-medium-58646be638f96.otf"),
  "sf-semibold": require("../../assets/fonts/sf-ui-display-semibold-58646eddcae92.otf"),
  "sf-thin": require("../../assets/fonts/sf-ui-display-thin-58646e9b26e8b.otf"),
  "sf-ultralight": require("../../assets/fonts/sf-ui-display-ultralight-58646b19bf205.otf"),
};

export default class TandS extends Component {
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
    return (
      <View style={styles.wholePage}>
        <StatusBar barStyle="dark-content" />
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.goBack();
          }}
          //style={styles.backBox}
        >
          <View>
            <Image
              style={styles.backIcon}
              source={require("../../img/backBlack.png")}
            />
            {this.state.fontsLoaded ? (
              <Text style={styles.backToNews}>Terms &#38; Conditions</Text>
            ) : (
              <AppLoading />
            )}
          </View>
        </TouchableWithoutFeedback>
        <ScrollView style={styles.bigPolicy}>
          {this.state.fontsLoaded ? (
            <View style={styles.bigPolicyText}>
              <Text style={{ lineHeight: 20, textAlign: "justify" }}>
                By downloading or using the app, these terms will automatically
                apply to you – you should make sure therefore that you read them
                carefully before using the app. You’re not allowed to copy, or
                modify the app, any part of the app, or our trademarks in any
                way. You’re not allowed to attempt to extract the source code of
                the app, and you also shouldn’t try to translate the app into
                other languages, or make derivative versions. The app itself,
                and all the trade marks, copyright, database rights and other
                intellectual property rights related to it, still belong to
                Richard Lee.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ lineHeight: 20, textAlign: "justify" }}>
                Richard Lee is committed to ensuring that the app is as useful
                and efficient as possible. For that reason, we reserve the right
                to make changes to the app or to charge for its services, at any
                time and for any reason. We will never charge you for the app or
                its services without making it very clear to you exactly what
                you’re paying for.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ lineHeight: 20, textAlign: "justify" }}>
                The Piston Motorsport app stores and processes personal data
                that you have provided to us, in order to provide my Service.
                It’s your responsibility to keep your phone and access to the
                app secure. We therefore recommend that you do not jailbreak or
                root your phone, which is the process of removing software
                restrictions and limitations imposed by the official operating
                system of your device. It could make your phone vulnerable to
                malware/viruses/malicious programs, compromise your phone’s
                security features and it could mean that the Piston Motorsport
                app won’t work properly or at all.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ lineHeight: 20, textAlign: "justify" }}>
                The app does use third party services that declare their own
                Terms and Conditions.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ lineHeight: 20, textAlign: "justify" }}>
                Link to Terms and Conditions of third party service providers
                used by the app
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ color: "blue" }}
                onPress={() =>
                  Linking.openURL("https://policies.google.com/terms")
                }
              >
                {"      "}- Google Play Services
              </Text>
              <Text
                style={{ color: "blue" }}
                onPress={() => Linking.openURL("https://expo.io/terms")}
              >
                {"      "}- Expo
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ lineHeight: 20, textAlign: "justify" }}>
                You should be aware that there are certain things that Richard
                Lee will not take responsibility for. Certain functions of the
                app will require the app to have an active internet connection.
                The connection can be Wi-Fi, or provided by your mobile network
                provider, but Richard Lee cannot take responsibility for the app
                not working at full functionality if you don’t have access to
                Wi-Fi, and you don’t have any of your data allowance left.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ lineHeight: 20, textAlign: "justify" }}>
                If you’re using the app outside of an area with Wi-Fi, you
                should remember that your terms of the agreement with your
                mobile network provider will still apply. As a result, you may
                be charged by your mobile provider for the cost of data for the
                duration of the connection while accessing the app, or other
                third party charges. In using the app, you’re accepting
                responsibility for any such charges, including roaming data
                charges if you use the app outside of your home territory (i.e.
                region or country) without turning off data roaming. If you are
                not the bill payer for the device on which you’re using the app,
                please be aware that we assume that you have received permission
                from the bill payer for using the app.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ lineHeight: 20, textAlign: "justify" }}>
                Along the same lines, Richard Lee cannot always take
                responsibility for the way you use the app i.e. You need to make
                sure that your device stays charged – if it runs out of battery
                and you can’t turn it on to avail the Service, Richard Lee
                cannot accept responsibility.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ lineHeight: 20, textAlign: "justify" }}>
                With respect to Richard Lee’s responsibility for your use of the
                app, when you’re using the app, it’s important to bear in mind
                that although we endeavour to ensure that it is updated and
                correct at all times, we do rely on third parties to provide
                information to us so that we can make it available to you.
                Richard Lee accepts no liability for any loss, direct or
                indirect, you experience as a result of relying wholly on this
                functionality of the app.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ lineHeight: 20, textAlign: "justify" }}>
                At some point, we may wish to update the app. The app is
                currently available on Android &amp; iOS – the requirements for
                both systems(and for any additional systems we decide to extend
                the availability of the app to) may change, and you’ll need to
                download the updates if you want to keep using the app. Richard
                Lee does not promise that it will always update the app so that
                it is relevant to you and/or works with the Android &amp; iOS
                version that you have installed on your device. However, you
                promise to always accept updates to the application when offered
                to you, We may also wish to stop providing the app, and may
                terminate use of it at any time without giving notice of
                termination to you. Unless we tell you otherwise, upon any
                termination, (a) the rights and licenses granted to you in these
                terms will end; (b) you must stop using the app, and (if needed)
                delete it from your device.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ fontWeight: "bold" }}>
                Changes to This Terms and Conditions
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ lineHeight: 20, textAlign: "justify" }}>
                I may update our Terms and Conditions from time to time. Thus,
                you are advised to review this page periodically for any
                changes. I will notify you of any changes by posting the new
                Terms and Conditions on this page.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ lineHeight: 20, textAlign: "justify" }}>
                These terms and conditions are effective as of{" "}
                <Text style={{ fontWeight: "bold" }}>2020-05-20</Text>
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ fontWeight: "bold" }}>Contact Us</Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ lineHeight: 20, textAlign: "justify" }}>
                If you have any questions or suggestions about my Terms and
                Conditions, do not hesitate to contact me at richard_875@me.com.
              </Text>
            </View>
          ) : (
            <AppLoading />
          )}
        </ScrollView>
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
  backBox: {
    position: "relative",
    top: 200,
    left: 23,
  },
  backIcon: {
    height: 23,
    width: 23,
    position: "relative",
    top: 67,
    left: 23,
  },
  backToNews: {
    position: "relative",
    top: Platform.OS === "ios" ? "77%" : "72%",
    left: "17%",
    fontSize: 25,
    fontFamily: "sf-bold",
    color: "black",
  },
  bigPolicy: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 60,
    marginBottom: 30,
  },
  bigPolicyText: {
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "Merriweather-Regular",
    lineHeight: 25,
  },
});
