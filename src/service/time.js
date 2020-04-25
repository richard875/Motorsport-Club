import React, { Component } from "react";
import { Text } from "react-native";
import moment from "moment";

class Time extends Component {
  constructor(props) {
    super(props);
    this.date = props.time;
  }

  render() {
    const time = moment(this.date || moment.now()).fromNow();
    return (
      <Text note style={{ marginHorizontal: 10 }}>
        {time}
      </Text>
    );
  }
}

//make this component available to the app
export default Time;
