import { StyleSheet, Text, TextInput, View } from "react-native";

import Colors from "../../constants/colors";

function Input({
  label,
  keyboardType,
  secure,
  placeholder,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="white"
        autoCorrect={false}
        keyboardType={keyboardType}
        autoCapitalize="none"
        secureTextEntry={secure}
        style={[styles.input, isInvalid && styles.inputInvalid]}
        value={value}
        onChangeText={onUpdateValue}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 20,
  },
  input: {
    padding: 20,
    borderBottomWidth: 2,
    borderColor: "green",
    fontSize: 16,
    color: 'white'
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
