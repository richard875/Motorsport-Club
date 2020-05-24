import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Animated } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export default class ProgressBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  state = {
    progressStatusValue: 0,
  };
  animation = new Animated.Value(0);
  componentDidMount() {
    setInterval(() => {
      this.setState({
        visible: !this.state.visible,
      });
    }, 2000);
    this.onAnimation();
  }
  onAnimation = () => {
    this.animation.addListener(({ value }) => {
      this.setState({ progressStatusValue: parseInt(value, 10) });
    });
    Animated.timing(this.animation, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  render() {
    const { visible } = this.state;
    return (
      <Animated.View
        style={[
          progressStyles.innerStyle,
          { width: this.state.progressStatusValue + "%" },
        ]}
      />
      // <AnimatedLoader
      //   visible={visible}
      //   overlayColor="#E5E5E5"
      //   source={require("../../assets/7233-car-animation.json")}
      //   animationStyle={progressStyles.lottie}
      //   speed={2}
      // />
    );
  }
}
//basic styles for creation of progress bar
const progressStyles = StyleSheet.create({
  innerStyle: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 3,
    borderRadius: 0,
    backgroundColor: "#fcba03",
  },
  lottie: {
    width: 300,
    height: 300,
  },
});
