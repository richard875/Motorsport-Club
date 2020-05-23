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

export default class PandP extends Component {
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
        {Platform.OS === "ios" ? (
          <StatusBar barStyle="dark-content" />
        ) : (
          <StatusBar barStyle="light-content" />
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
                <Text style={styles.backToNews}>Privacy Policy</Text>
              </View>
            ) : (
              <AppLoading />
            )}
          </View>
        </TouchableWithoutFeedback>
        <ScrollView style={styles.bigPolicy}>
          {this.state.fontsLoaded ? (
            <View style={styles.bigPolicyText}>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                Richard Lee built the Piston Motorsport app as an Open Source
                app. This SERVICE is provided by Richard Lee at no cost and is
                intended for use as is. This application is belonged to Richard
                Lee. However, the University of Auckland Motorsport Club has the
                rights to use the application with no date limit.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                This page is used to inform visitors regarding my policies with
                the collection, use, and disclosure of Personal Information if
                anyone decided to use my Service.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                If you choose to use my Service, then you agree to the
                collection and use of information in relation to this policy.
                The Personal Information that I collect is used for providing
                and improving the Service. I will not use or share your
                information with anyone except as described in this Privacy
                Policy.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                The terms used in this Privacy Policy have the same meanings as
                in our Terms and Conditions, which is accessible at Piston
                Motorsport unless otherwise defined in this Privacy Policy.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  lineHeight: 23,
                  textAlign: "justify",
                  fontSize: 17,
                }}
              >
                Information Collection and Use
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                For a better experience, while using our Service, I may require
                you to provide us with certain personally identifiable
                information. The information that I request will be retained on
                your device and is not collected by me in any way.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                The app does use third party services that may collect
                information used to identify you.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                Link to privacy policy of third party service providers used by
                the app
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{
                  color: "blue",
                  lineHeight: 23,
                  textAlign: "justify",
                  fontSize: 15,
                }}
                onPress={() =>
                  Linking.openURL("https://www.google.com/policies/privacy/")
                }
              >
                {"      "}•{"  "}Google Play Services
              </Text>
              <Text
                style={{
                  color: "blue",
                  lineHeight: 23,
                  textAlign: "justify",
                  fontSize: 15,
                }}
                onPress={() => Linking.openURL("https://expo.io/privacy")}
              >
                {"      "}•{"  "}Expo
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  lineHeight: 23,
                  textAlign: "justify",
                  fontSize: 17,
                }}
              >
                Log Data
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                I want to inform you that whenever you use my Service, in a case
                of an error in the app I collect data and information (through
                third party products) on your phone called Log Data. This Log
                Data may include information such as your device Internet
                Protocol (“IP”) address, device name, operating system version,
                the configuration of the app when utilizing my Service, the time
                and date of your use of the Service, and other statistics.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  lineHeight: 23,
                  textAlign: "justify",
                  fontSize: 17,
                }}
              >
                Cookies
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                Cookies are files with a small amount of data that are commonly
                used as anonymous unique identifiers. These are sent to your
                browser from the websites that you visit and are stored on your
                device's internal memory.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                This Service does not use these “cookies” explicitly. However,
                the app may use third party code and libraries that use
                “cookies” to collect information and improve their services. You
                have the option to either accept or refuse these cookies and
                know when a cookie is being sent to your device. If you choose
                to refuse our cookies, you may not be able to use some portions
                of this Service.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  lineHeight: 23,
                  textAlign: "justify",
                  fontSize: 17,
                }}
              >
                Service Providers
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                I may employ third-party companies and individuals due to the
                following reasons:
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                {""}- To facilitate our Service;
              </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                {""}- To provide the Service on our behalf;
              </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                {""}- To perform Service-related services; or
              </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                {""}- To assist us in analyzing how our Service is used.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                I want to inform users of this Service that these third parties
                have access to your Personal Information. The reason is to
                perform the tasks assigned to them on our behalf. However, they
                are obligated not to disclose or use the information for any
                other purpose.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  lineHeight: 23,
                  textAlign: "justify",
                  fontSize: 17,
                }}
              >
                Security
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                I value your trust in providing us your Personal Information,
                thus we are striving to use commercially acceptable means of
                protecting it. But remember that no method of transmission over
                the internet, or method of electronic storage is 100% secure and
                reliable, and I cannot guarantee its absolute security.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  lineHeight: 23,
                  textAlign: "justify",
                  fontSize: 17,
                }}
              >
                Links to Other Sites
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                This Service may contain links to other sites. If you click on a
                third-party link, you will be directed to that site. Note that
                these external sites are not operated by me. Therefore, I
                strongly advise you to review the Privacy Policy of these
                websites. I have no control over and assume no responsibility
                for the content, privacy policies, or practices of any
                third-party sites or services.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  lineHeight: 23,
                  textAlign: "justify",
                  fontSize: 17,
                }}
              >
                Children’s Privacy
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                These Services do not address anyone under the age of 13. I do
                not knowingly collect personally identifiable information from
                children under 13. In the case I discover that a child under 13
                has provided me with personal information, I immediately delete
                this from our servers. If you are a parent or guardian and you
                are aware that your child has provided us with personal
                information, please contact me so that I will be able to do
                necessary actions.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  lineHeight: 23,
                  textAlign: "justify",
                  fontSize: 17,
                }}
              >
                Changes to This Privacy Policy
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                I may update our Privacy Policy from time to time. Thus, you are
                advised to review this page periodically for any changes. I will
                notify you of any changes by posting the new Privacy Policy on
                this page.
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                This policy is effective as of{" "}
                <Text style={{ fontWeight: "bold" }}>2020-05-20</Text>
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  lineHeight: 23,
                  textAlign: "justify",
                  fontSize: 17,
                }}
              >
                Contact Us
              </Text>
              <Text style={{ fontWeight: "bold" }}> </Text>
              <Text
                style={{ lineHeight: 23, textAlign: "justify", fontSize: 15 }}
              >
                If you have any questions or suggestions about my Privacy
                Policy, do not hesitate to contact me at richard_875@me.com.
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
  topBar: {
    flexDirection: "row",
    top: Platform.OS === "ios" ? 50 : 20,
    height: 35,
    width: "100%",
    paddingLeft: 20,
  },
  backBox: {
    position: "relative",
    top: 200,
    left: 23,
  },
  backIconBox: {
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  backIcon: {
    height: Platform.OS === "ios" ? "60%" : "50%",
    width: Platform.OS === "ios" ? "60%" : "50%",
  },
  backToNewsBox: {
    paddingTop: 1,
    paddingLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  backToNews: {
    fontSize: 23,
    fontFamily: "sf-bold",
    color: "black",
  },
  bigPolicy: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: Platform.OS === "ios" ? "20%" : "10%",
    marginBottom: 30,
  },
  bigPolicyText: {
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "Merriweather-Regular",
    lineHeight: 25,
  },
});
