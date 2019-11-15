import React, { Component, useState } from "react";
import { StyleSheet, Button, Image } from "react-native";
import { Container, View, Text, Form, Item, Label, Input, Textarea, Content } from "native-base";
import ImagePicker from "react-native-image-picker";

export const CreatePost = props => {
  const [ImageState, setImage] = useState({ uri: "" });
  const [postFormState, setPostForm] = useState({ title: "", description: "" });

  const { navigation } = props;
  const { navigate } = navigation;
  const { createPostFn } = navigation.state.params;

  const handleChange = (value, type) => {
    if (type === "TITLE") {
      setPostForm({ ...postFormState, title: value });
    } else if (type === "DESCRIPTION") {
      setPostForm({ ...postFormState, description: value });
    }
  };
  const handleImageUpload = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, res => {
      if (res.uri) {
        // console.log(res);
        setImage(() => {
          return {
            ...ImageState,
            uri: res.uri
          };
        });
      }
    });
  };

  return (
    <Container>
      <Content padder>
        <Form>
          <Item floatingLabel>
            <Label>Title for the post</Label>
            <Input onChangeText={value => handleChange(value, "TITLE")} />
          </Item>
          <View>
            <Image width={100} height={80} source={{ uri: ImageState.uri.length > 0 ? ImageState.uri : null }}></Image>
          </View>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Textarea
              onChangeText={value => handleChange(value, "DESCRIPTION")}
              rowSpan={8}
              bordered
              placeholder='Short description about your post...'
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Button title='choose a photo' onPress={() => handleImageUpload()}></Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button
              style={styles.createBtn}
              onPress={() => (createPostFn({ ...postFormState, ...ImageState }), navigate("Home"))}
              title={"Create"}></Button>
          </View>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  createBtn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    marginTop: 10
  }
});
