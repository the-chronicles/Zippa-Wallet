import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/colors";

function PrimaryButton({ children, onPress }) {
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

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 90,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#01C853",
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
