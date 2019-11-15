import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";

import { Container, Text, Button, Card, CardItem, Left, Icon, View, Content, List, ListItem, Right } from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createPost } from "../redux/actions/postsActions";

const { height } = Dimensions.get("window");

const Home = props => {
  const { navigate } = props.navigation;
  const { createPost, postsData } = props;
  //console.log(postsData);
  const [scrollHeight, setScrollHeight] = useState({ screenHeight: 0 });
  const onContentSizeChange = (contentWidth, contentHeight) => {
    setScrollHeight({
      ...scrollHeight,
      screenHeight: contentHeight
    });
  };
  const scrollEnabled = scrollHeight.screenHeight > height;
  return (
    <Container style={{ position: "relative" }}>
      <Content onContentSizeChange={onContentSizeChange} scrollEnabled={scrollEnabled} contentContainerStyle={styles.container}>
        {postsData.length > 0 ? (
          <Content style={{ width: "100%" }}>
            {postsData.map((post, i) => (
              <Card key={i}>
                <CardItem header bordered button onPress={() => navigate("ViewPost", { ...post })}>
                  <Left>
                    <Text>{post.title}</Text>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{ uri: post.uri }} style={{ resizeMode: "cover", width: "100%", height: 200, flex: 1 }}></Image>
                </CardItem>
                <CardItem bordered>
                  <Left>
                    <Button transparent>
                      <Icon name='thumbs-up' fontSize={20} />
                      <Text>1 Like</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            ))}
          </Content>
        ) : (
          <Text>No recent posts added...</Text>
        )}
      </Content>
      <View>
        <Button style={styles.addButton} onPress={() => navigate("AddPost", { createPostFn: createPost })}>
          <Text style={styles.addButtonText}>+</Text>
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#ecf0f1",
    flex: 1,
    zIndex: -1,
    overflow: "scroll",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 10,
    alignItems: "center"
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: "#3742fa",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 10,
    zIndex: 100,
    justifyContent: "center",
    borderRadius: 100
  },
  addButtonText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default connect(
  state => ({ postsData: state.posts.data }),
  dispatch => bindActionCreators({ createPost }, dispatch)
)(Home);
