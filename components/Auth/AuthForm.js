import { Image, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Input from "./Input";
import PrimaryButton from "../UI/Buttons/PrimaryButton";


function AuthForm({ onSubmit, credentialsInvalid, isLogin }) {
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const {
    // fullname: fullnameIsInvalid,
    email: emailIsInvalid,
    password: passwordIsInvalid,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "fullname":
        setEnteredFullName(enteredValue);
        break;
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      fullname: enteredFullName,
      email: enteredEmail,
      password: enteredPassword,
    });
  }

  return (
    <View>
      <View>
        {!isLogin && (
          <Input
            label="Full Name"
            keyboardType="default"
            placeholder="EMAIL"
            value={enteredFullName}
            onUpdateValue={updateInputValueHandler.bind(this, "fullname")}
          />
        )}
        <Input
          label="Email Address"
          keyboardType="email-address"
          placeholder="USERNAME"
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
          value={enteredEmail}
          isInvalid={emailIsInvalid}
        />
        <Input
          label="Password"
          secure
          placeholder="PASSWORD"
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
      </View>
      <View style={styles.emailPass}>
        <PrimaryButton onPress={submitHandler}>
          {isLogin ? "LOG IN" : "REGISTER"}
        </PrimaryButton>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  emailPass: {
    justifyContent: "center",
    alignItems: "center",
  },
});
