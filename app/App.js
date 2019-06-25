import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "./screens/Home";
import RateCat from "./screens/RateCat";

const AppStack = createStackNavigator(
  {
    home: {
      screen: Home,
      navigationOptions: { headerTitle: "Cats With Hats" }
    },
    rateCat: {
      screen: RateCat,
      navigationOptions: { headerTitle: "Rate This Cat" }
    }
  },
  {
    //
  }
);

export const RootNavigator = createAppContainer(AppStack);

export default RootNavigator;
