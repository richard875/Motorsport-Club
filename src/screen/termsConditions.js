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
            <Text style={styles.bigPolicyText}>
              The post has just arrived and in it a very nice surprise, the
              discovery that Jacques Seguela, one-time adviser to President
              Mitterrand, now close confidant of President and Madame Sarkozy
              (indeed he intoduced them), and something of a legend in French
              political communications, has dedicated his latest book to little
              old moi. With apologies for the missing accents here and in the
              French bits of the long posting which follows – the dedication to
              ‘Le Pouvoir dans la Peau‘ (Power in the skin) reads ‘A Alastair
              Campbell, mon spin doctor prefere’ (three missing accents in one
              word – mes excuses sinceres). So what did I do for this honour,
              you are asking? Well, perhaps the fact that he asked me to read
              his book, and write a ‘postface’ assessment both of his writing
              and of the issues he covers, and the fact that I said yes, has
              something to do with it. He says some blushmakingly kind things in
              his ‘preface to the postface’, which I will have to leave to
              French readers of the whole thing (published by Plon). But for the
              largely Anglophone visitors of this blog, I thought some of you
              might like to read the said ‘postface’ in English (apart from the
              bits where I quote direct from his book). I hope all those
              students who write asking for help with dissertations will find
              something quotable in it. Meanwhile I am off to Norway for a
              conference and a meeting with the Norwegian Labour Party. I’m
              looking forward to being in the country with the highest ‘human
              development index’ in the world, and which showed such a mature
              response to the recent massacre of Oslo and Utoya. Here is the
              postface to Le Pouvoir dans la Peau Jacques Seguela writes about
              political campaigns and communications not merely as an expert
              analyst, but as an experienced practitioner. Hence his latest book
              contains both insights worth heeding, but also enlivening tales of
              his own experience. He is observer and participant; outsider
              looking in, and insider looking out. There is much to look at, not
              least in France with a Presidential election looming, and the
              outcome far from easy to predict. We live in a world defined by
              the pace of change, and whilst the velocity of that change has not
              always impacted upon our political institutions, many of which
              would remain recognisable to figures of history, it most certainly
              has impacted upon political communications. As Seguela writes: ‘En
              5 ans le monde de la communication a plus evolue que dans les
              cents dernieres annees. ‘ Google, Youtube, Twitter, Facebook have
              quickly entered our language and changed the way we communicate,
              live our private lives, do business, do politics. People do not
              believe politicians as much as they once did. Nor do they believe
              the media. So who do we believe? We believe each other. The power
              and the political potential of social networks flows from that
              reality. Though fiercely modern in their application, social
              networks in some ways take us back to the politics of the village
              square. They are an electronic word of mouth on a sometimes global
              scale. This has changed the way people interact with each other
              and with their politicians. My first campaign as spokesman and
              strategist for Tony Blair was in 1997, three years in the planning
              after he had become leader of the Opposition Labour Party. Some of
              the principles of strategy we applied back then would certainly
              apply to a modern day election. But their tactical execution
              almost certainly would not. Politicians and their strategists have
              to adapt to change as well as lead it. Seguela gives some
              interesting insights into those who have adapted well, and those
              who have done less well. He clearly adores former President Lula
              of Brazil and you can feel his yearning for a French leader who
              can somehow combine hard-headed strategy with human empathy in the
              same way as a man who left office with satisfaction ratings of
              87percent. Seguela probably remains best known in political
              circles for his role advising Francois Mitterrand. Yet wheras I am
              ‘tribal Labour’, and could not imagine supporting a Conservative
              Party candidate in the UK, Seguela came out as a major supporter
              of Nicolas Sarkozy. I wonder if one of the reasons was not a
              frustration that large parts of the left in France remain
              eternally suspicious of modern communications techniques and
              styles which, frankly, no modern leader in a modern democracy can
              ignore. How he or she adapts to, or uses, them is up to them. But
              you cannot stand aside and imagine the world has not changed. If
              Lula is a star of this book, so too is Barack Obama. American
              elections are of enormous interest to all political campaign
              junkies, a category in which both Seguela and I would almost
              certainly qualify. Much is made of Obama’s use of the internet, a
              relatively new phenomenon in historical terms and one the young
              Senator used brilliantly in his quest to become President. Yet
              though it was an accurate expression of his modernity,
              underpinning its use were some very old-fashioned campaign
              principles. He used it to turn supporters into activists who both
              gave funds and also took his campaign materials and ideas and ran
              their own campaigns for him. Somehow he managed to make one of the
              most professional, most disciplined and best funded campaigns in
              history look like an enormous act of democratic participation. It
              was less command and control – the model we certainly adopted in
              1997 and 2001, Labour’s two landslide victories, easing off a
              little for our third win in 2005 – than ‘inspire and empower.’
              ‘Yes we can’ not ‘yes I can’. His supporters were more than
              supporters. They were an active part of the campaign, and of the
              message. The key to this was something that had nothing to do with
              politicians and everything to do with science, technology and the
              internet. Ask me who has had the most influence on campaigns in
              recent times and I might be tempted to reply Tim Berners-Lee, the
              man credited with gifting the web to the world. Its implications
              have been far reaching in virtually all aspects of our lives,
              politics and political campaigns foremost. The new household brand
              names of the cyber era have not replaced good policy work,
              messaging and organisation. But they have become essential
              components of the execution of them in the campaign. Mainstream
              conventional media remains important and influential, not least
              because, bizarrely, in most democracies the broadcasters continue
              to let the press set their agenda for them. But a candidate who
              tries to stand against the tide of new media will be making a big
              mistake, and missing big opportunities. If it has changed so much
              in the last five years, how much more will it change in the next
              five years?
            </Text>
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
    top: Platform.OS === "ios" ? "77%" : "63%",
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
