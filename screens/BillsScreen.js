import { MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function BillsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Pay bills, buy data and subscribe your internet
      </Text>

      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.box}>
          <Image source={require("../assets/img/mobile.png")} />
          <Text style={styles.boxText}>Airtime</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color="#01063D"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.box2}>
          <Image source={require("../assets/img/wifi.png")} />
          <Text style={styles.boxText}>Mobile Data</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color="#01063D"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.box2}>
          <Image source={require("../assets/img/wifi.png")} />
          <Text style={styles.boxText}>Electricity</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color="#01063D"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.box2}>
          <Image source={require("../assets/img/monitor.png")} />
          <Text style={styles.boxText}>Cable TV</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color="#01063D"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BillsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 18,
  },
  boxContainer: {
    marginTop: 20,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 14,
    alignItems: "center",
  },
  box2: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 14,
    alignItems: "center",
    marginTop: 16,
  },
  boxText: {
    fontSize: 18,
    color: "#01063D",
  },
});
