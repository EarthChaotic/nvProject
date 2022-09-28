import { View, Text, ActivityIndicator, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [Data, setData] = useState([]);

  const getArticles = async () => {
    try {
      const reponse = await fetch("https://api.codingthailand.com/api/course");
      const json = await reponse.json();
      setData(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const _renderItem = ({ item }) => {
    let picture =
      item.picture !== null ? item.picture : "https://via.placeholder.com/150";
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
          <Image
            resizeMode="cover"
            source={{ uri: picture }}
            style={{ flex: 1, width: "100%", height: "100%", marginRight: 10 }}
          />
          <View style={{ width: 200, margin: 5 }}>
            <Text style={{ fontSize: 10, marginBottom: 5 }}>{item.title}</Text>
            <Text style={{ fontSize: 10 }}>{item.detail}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000FF" />
      ) : (
        <FlatList
          data={Data}
          keyExtractor={(item) => item.title}
          renderItem={_renderItem}
        />
      )}
    </View>
  );
};

export default App;
