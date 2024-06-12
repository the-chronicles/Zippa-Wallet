import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SlideComponent from "../components/SlideComponent";
import QuickOptions from "../components/QuickOptions";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.header}>Welcome User</Text>
        <Text style={styles.subText}>Save everyday. Save for the future</Text>
      </View>

      <View style={styles.carousel}>
        <SlideComponent />
      </View>
      <TouchableOpacity>
        <View style={styles.subHead}>
          <View>
            <Image source={require("../assets/img/security.png")} />
          </View>
          <View>
            <Text style={styles.account}>Complete account setup</Text>
            <Text style={styles.update}>Update your security settings</Text>
          </View>
        </View>
      </TouchableOpacity>
      
      <QuickOptions />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#01063D",
  },
  subText: {
    fontStyle: "italic",
    color: "#7d7d7d",
    marginTop: 20,
    marginBottom: 20,
  },
  carousel: {
    alignItems: "center",
    paddingRight: 100,
  },
  carousel2: {
    alignItems: "center",
    paddingRight: 190,
  },
  subHead: {
    backgroundColor: "#e4f0ff",
    padding: 15,
    borderRadius: 10,
    margin: 10,
    height: 80,
    flexDirection: "row",
    gap: 10,
  },
  account: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#01063D",
  },
  update: {
    fontSize: 16,
    marginBottom: 5,
    color: "#7d7d7d",
  },
  options: {
    marginTop: 20,
  },
});
