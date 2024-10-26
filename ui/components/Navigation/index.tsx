import React from "react";

import { Appbar } from "react-native-paper";
import { Platform } from "react-native";

const menuIcon = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const NavigationBar = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="SchoolBlog" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={menuIcon} onPress={() => {}} />
    </Appbar.Header>
  );
};

export default NavigationBar;
