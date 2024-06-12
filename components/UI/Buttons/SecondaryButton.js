import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/colors";

function SecondaryButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default SecondaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    // paddingVertical: 10,
    // paddingHorizontal: 90,
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: "#01063D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
