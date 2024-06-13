import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/Ionicons";


const data = [
  { title: "Wallet", balance: 1000, color: "#01063D" },
  { title: "Savings", balance: 2000, color: "#01C853" },
];

const SlideComponent = () => {
  const [showBalance, setShowBalance] = useState(true);

  const renderItem = ({ item, index }) => (
    <View style={[styles.slide, { backgroundColor: item.color }]}>
      <Text style={styles.header}>{item.title}</Text>
      <View style={styles.balanceContainer}>
        <View>
          <Text style={styles.title}>Total Bal</Text>
        </View>
          

        <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
          <Icon name={showBalance ? "eye-off" : "eye"} size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
        <Text style={styles.balance}>
            {showBalance ? `$${item.balance}` : "****"}
          </Text>
    </View>
  );

  return (
    <>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={450}
        itemWidth={240}
      />
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    borderRadius: 20,
    // marginTop: 10,
    marginBottom: 10,
    padding: 20,
    height: 180,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    color: "#FFF",
    marginBottom: 10,
  },
  balance: {
    fontSize: 24,
    color: "#FFF",
    marginBottom: 10,
    alignSelf: 'center'
  },
});

export default SlideComponent;
