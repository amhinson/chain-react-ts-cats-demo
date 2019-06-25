import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Card, ListItem, Button, Image, Icon } from "react-native-elements";
import { getCats } from "../services/catService";

const Home = props => {
  const [catsWithHats, setCatsWithHats] = useState([]);

  useEffect(() => {
    async function init() {
      const cats = await getCats();
      setCatsWithHats(cats);
    }
    init();
  }, []);

  function onCatPress(cat) {
    props.navigation.navigate("rateCat", { cat });
  }

  return (
    <FlatList
      data={catsWithHats}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => onCatPress(item)}
        >
          <Image source={{ uri: item.url }} style={styles.image} />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover"
  },
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20
  }
});

export default Home;
