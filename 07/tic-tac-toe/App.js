import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';


export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: "https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }} />
                <Body>
                  <Text>Aniket Pradhan</Text>
                  <Text note>Coder</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: "https://images.pexels.com/photos/3532556/pexels-photo-3532556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "orange",
    color: "#fff",
  },
});
