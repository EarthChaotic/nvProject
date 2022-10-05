import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const DetailScreen = ({ navigation, route }) => {
  const { id, title } = route.params;

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [error, setError] = useState(null);

  React.useLayoutEffect(() => {
    navigation.setOptions(
      {
        //title:'รายละเอียดสินค้า'
        title: title,
      },
      [navigation, title]
    );
  });

  const getData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      console.log(res.data.data);
      setDetail(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const _onRefresh = () => {
    getData();
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
          <Text style={styles.thumbnail}>{index + 1}</Text>
          <View style={styles.dataContainer}>
            <View style={styles.dataContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.detail}>{item.detail}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="Blue" size="large" />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={detail}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={_renderItem}
        refreshing={loading}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
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
  addButtonStyle: {
    width: "100%",

    marginBottom: 15,
  },
});
