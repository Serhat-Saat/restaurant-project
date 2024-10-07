import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import yelp from "../api/yelp";
import { useEffect, useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ResultShopScreen({ route }) {
  const img = [];
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={styles.icon}>
      {
        result.is_closed ? <AntDesign name="closecircleo"
         size={30} color="black" /> :<MaterialIcons name="delivery-dining" size={30} color="black" />

      }
      </View>


      <Image source={require("../assets/kebap.jpg")} style={styles.image} />
      <Image source={require("../assets/kebap2.jpg")} style={styles.image} />
      <Image source={require("../assets/kebap3.jpg")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "95%",
    height: 180,
    margin: 10,
    borderRadius: 20,
  },
  title: {
    alignSelf:'center',
    fontSize: 25,
    marginVertical: 10
  },
  phone: {
    alignSelf:'center',
    fontSize : 20
  },
  icon:{
    alignSelf: 'center'
  }
});
