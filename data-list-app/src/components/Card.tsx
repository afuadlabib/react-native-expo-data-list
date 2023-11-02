import { StyleSheet, Image } from "react-native";
import { Button, Card, Title } from "react-native-paper";

const CardComponent = (props: any) => {
  return (
    <Card style={styles.container}>
      <Card.Cover style={{flex: 1,}} width={200} source={{ uri: props.item.thumbnailUrl}} />
      <Card.Content>
        <Title 
        style={{ fontWeight: "bold", textAlign: "center" }}
        >
          {props.item.title.toUpperCase()}
        </Title>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() =>
            props.navigation.navigate("DetailScreen", { ...props.item })
          }
        >
          {" "}
          Detail{" "}
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 3
    },
});

export default CardComponent;
