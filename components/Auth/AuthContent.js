import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import AuthForm from "./AuthForm";
import Colors from "../../constants/colors";
import Header from "../UI/Texts/Header";
import FlatButton from "../UI/Buttons/FlatButton";
import NewAlert from "../Alert/NewAlert";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();
  const [showAlert, setShowAlert] = useState(false);

  const showAlertHandler = () => {
    setShowAlert(true);
  };

  const closeAlertHandler = () => {
    setShowAlert(false);
  };

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    fullname: false,
    email: false,
    password: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  }

  function submitHandler(credentials) {
    let { fullname, email, password } = credentials;

    fullname = fullname.trim();
    email = email.trim();
    password = password.trim();

    // Dummy data
    const dummyUsername = "user";
    const dummyPassword = "password";

    if (isLogin) {
      if (email === dummyUsername && password === dummyPassword) {
        navigation.navigate("AuthenticatedStack");
      } else {
        Alert.alert(
          "Incorrect Password",
          "The password entered does not match our records. Please check it and try again.."
        );

        // showAlertHandler();
      }
    } else {
      if (email === dummyUsername) {
        Alert.alert("Username taken", "Please choose a different username.");
      } else {
        Alert.alert(
          "Account Created",
          "We've sent a confirmation email to the address entered. Please activate your account."
        );
        navigation.navigate("Welcome");
      }
    }

    /* Main code for authentication
    const emailIsInvalid = email.includes("@");
    const passwordIsInvalid = password.length > 6;

    if (!emailIsInvalid || !passwordIsInvalid) {
      Alert.alert("Looks like you have an account");
      setCredentialsInvalid({
        email: !emailIsInvalid,
        password: !passwordIsInvalid,
      });
      return;
    }
    onAuthenticate({ email, password });
    */
  }

  return (
    <View style={styles.container}>
      <View style={styles.rootScreen}>
      <View style={styles.img}>
          <Image source={require("../../assets/img/logo.png")} />
        </View>
        <View style={styles.headerText}>
          <Header>{isLogin ? "WELCOME!" : "REGISTER!"}</Header>
        </View>

        <AuthForm
          isLogin={isLogin}
          onSubmit={submitHandler}
          credentialsInvalid={credentialsInvalid}
        />

        <View
          style={[
            styles.cta,
            isLogin ? styles.ctaSpaceBetween : styles.ctaCenter,
          ]}
        >
          <FlatButton onPress={switchAuthModeHandler}>
            {isLogin ? "CREATE ACCOUNT" : "LOGIN"}
          </FlatButton>
          {isLogin && <FlatButton>FORGOT PASSWORD?</FlatButton>}
        </View>

        {showAlert && <NewAlert onClose={closeAlertHandler} />}
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  headerText: {
    marginBottom: 20,
  },
  headerTextCenter: {
    alignItems: "center",
  },
  headerTextLeft: {
    alignItems: "flex-start",
    width: "100%",
  },
  img: {
    // flex: 1,
    // marginLeft: 70,
    alignSelf: 'center',
    marginBottom: 40
  },
  rootScreen: {
    flex: 1,
    backgroundColor: "#01063D",
    padding: 26,
    justifyContent: "center",
  },
  headerText: {
    alignItems: "center",
  },
  bottomContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cta: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
  },
  cta2: {
    flexDirection: "row",
    // margin: 10,
    gap: 40,
  },
  ctaCenter: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  ctaSpaceBetween: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
