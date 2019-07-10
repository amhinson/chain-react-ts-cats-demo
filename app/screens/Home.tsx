import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native-elements";
import { getCats } from "../services/catService";
import { NavigationScreenComponent } from "react-navigation";

interface Props {}

const Home: NavigationScreenComponent<null, null, Props> = props => {
  const [catsWithHats, setCatsWithHats] = useState<Cat[]>([]);

  useEffect(() => {
    async function init() {
      const cats = await getCats();
      setCatsWithHats(cats);
    }
    init();
  }, []);

  function onCatPress(cat: Cat) {
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
