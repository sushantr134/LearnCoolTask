import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { CreatePost as AddPostScreen } from "./components/postCreate";
import { PostScreen } from "./components/postsView";
import Home from "./components/Home";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home, navigationOptions: { title: "LearnCool Task" } },
    AddPost: { screen: AddPostScreen, navigationOptions: { title: "Create a new post" } },
    ViewPost: { screen: PostScreen }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AppContainer />;
  }
}
