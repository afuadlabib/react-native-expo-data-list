import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import CardComponent from "../components/Card";

const DataListScreen = (props: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (!data[0]) {
    return (
      <View style={styles.loading}>
            <Text>Loading ...</Text>
          </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => {
        return <CardComponent item={item} navigation={props.navigation}/>;
      }}
      keyExtractor={(item, i) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 5,
    padding: 8,
  },
  loading:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
}
});

export default DataListScreen;
