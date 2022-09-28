import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ItemSeparatorView = () => {
  return (
    // Flat List Item Separator
    <View
      style={{
        height: 0.5,
        width: "100%",
        backgroundColor: "#C8C8C8",
      }}
    />
  );
};

const ProductScreen = () => {
  const [Product, setProduct] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://api.codingthailand.com/api/course");
      setProduct(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const _renderItem = ({ item }) => {
    let picture =
      item.picture !== null ? item.picture : "https://via.placeholder.com/150";
    return (
      <View style={styles.datacontainer}>
        <View style={styles.container}>
          <Image source={{ uri: picture }} style={styles.thumbnail} />
          <View style={styles.dataContent}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.detail}>{item.detail}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={Product}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 10,
  },
  dataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },
});
