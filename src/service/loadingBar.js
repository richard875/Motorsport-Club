import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Animated } from "react-native";

export default class ProgressBarExample extends Component {
  state = {
    progressStatusValue: 0,
  };
  animation = new Animated.Value(0);
  componentDidMount() {
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
    return (
      <Animated.View
        style={[
          progressStyles.innerStyle,
          { width: this.state.progressStatusValue + "%" },
        ]}
      />
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
});
