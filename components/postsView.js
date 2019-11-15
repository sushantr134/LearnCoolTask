import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Textarea, Image } from "native-base";

export const PostScreen = props => {
  const { navigation } = props;
  const { params } = navigation.state;
  const postData = params;
  return (
    <View>
      <Text>Post Title :- {postData.title} </Text>
      <Image source={{ uri: postData.uri }} style={{ width: "100%", height: 200, resizeMode: "cover" }}></Image>
      <Textarea rowSpan={8} bordered disabled>
        {postData.description}
      </Textarea>
    </View>
  );
};

const styles = StyleSheet.create({});
