import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import SecondaryButton from "./UI/Buttons/SecondaryButton";

const QuickOptions = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [nestedModalVisible, setNestedModalVisible] = useState(false);

  const options = [
    {
      title: "Top-up wallet",
      image: require("../assets/img/ticket.png"),
      key: "1",
      action: () => setModalVisible(true),
    },
    {
      title: "Send Money",
      image: require("../assets/img/send.png"),
      key: "2",
    },
    {
      title: "Bills & data",
      image: require("../assets/img/wallet.png"),
      key: "3",
      action: () => navigation.navigate("Bills & Data"),
    },
    {
      title: "Support",
      image: require("../assets/img/wallet.png"),
      key: "4",
    },
  ];

  const handleCardPaymentPress = () => {
    setModalVisible(false);
    setNestedModalVisible(true);
  };

  const handleCloseModals = () => {
    setModalVisible(false);
    setNestedModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quick Options</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {options.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={styles.option}
            onPress={option.action}
          >
            <Image source={option.image} style={styles.image} />
            <Text style={styles.optionText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <Animatable.View animation="slideInUp" style={styles.modalView}>
            <Image
              source={require("../assets/img/empty-wallet.png")}
              style={styles.image2}
            />
            <Text style={styles.modalText}>Wallet Top-up</Text>
            <Text style={styles.modalText2}>
              Add funds to your zippa wallet account by paying directly into the
              following methods
            </Text>

            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={handleCardPaymentPress}
              >
                <View style={styles.container1}>
                  <View style={styles.icon}>
                    <AntDesign name="creditcard" size={24} color="black" />
                    <Text>Card Payment</Text>
                  </View>

                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="black"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
              >
                <View style={styles.container2}>
                  <View style={styles.icon}>
                    <AntDesign name="creditcard" size={24} color="black" />
                    <Text>USSD</Text>
                  </View>

                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="black"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                // onPress={handleLogout}
              >
                <View style={styles.container3}>
                  <View style={styles.icon}>
                    <AntDesign name="creditcard" size={24} color="black" />
                    <Text>Bank Transfer</Text>
                  </View>

                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="black"
                  />
                </View>
              </TouchableOpacity>
            </View>

            <SecondaryButton onPress={() => setModalVisible(!modalVisible)}>
              Continue
            </SecondaryButton>

            {/* <Button
              title="Close"
              onPress={() => setModalVisible(!modalVisible)}
            /> */}
          </Animatable.View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={nestedModalVisible}
        onRequestClose={handleCloseModals}
      >
        <View style={styles.modalContainer}>
          <Animatable.View animation="slideInUp" style={styles.modalView2}>
            <Text style={styles.modalText4}>Bank Transfer</Text>
            <Text style={styles.modalText3}>
              Fund your wallet by transferring funds to this account.{" "}
            </Text>

            <View style={styles.subHead}>
              <View>
                <View style={styles.bankContainer}>
                  <Text style={styles.account}>Bank name:</Text>
                  <Text style={styles.account}>Wema bank</Text>
                </View>
                <View style={styles.bankContainer}>
                  <Text style={styles.account}>Account Name:</Text>
                  <Text style={styles.account}>Zippa Wallet</Text>
                </View>
                <View style={styles.bankContainer}>
                  <Text style={styles.account}>Account number:</Text>
                  <Text style={styles.account}>9700596864</Text>
                </View>
              </View>
            </View>
            <SecondaryButton onPress={handleCloseModals}>
              I've completed payment
            </SecondaryButton>
          </Animatable.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 16,
    color: "#01063D",
  },
  scrollView: {
    paddingLeft: 10,
  },
  option: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 16,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "#01063D",
    height: 120,
  },
  optionText: {
    fontSize: 16,
    color: "#01063D",
    fontWeight: "bold",
    marginTop: 16,
  },
  image: {
    width: 40,
    height: 40,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "100%",
    height: "60%",
    backgroundColor: "#f6f6f6",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  modalView2: {
    width: "100%",
    height: "47%",
    backgroundColor: "#f6f6f6",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  image2: {
    alignSelf: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
    color: "#01063D",
    marginTop: 10,
    fontWeight: "bold",
  },
  modalText4: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    color: "#01063D",
    marginTop: 10,
    fontWeight: "bold",
  },
  modalText2: {
    marginBottom: 15,
    fontSize: 14,
    color: "#01C853",
  },
  modalText3: {
    marginBottom: 15,

    fontSize: 16,
    marginTop: 10,
    // color: "#01C853",
  },
  icon: {
    flexDirection: "row",
    // margin: 10,
    gap: 20,
  },
  container1: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    borderBottomWidth: 6,
    borderColor: "#eeeeee",
  },
  container2: {
    padding: 16,
    // flex: 1,
    flexDirection: "row",
    height: 72,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    // borderWidth: 0.5,
    // borderColor: "black",
    // borderRadius: 20,
    borderBottomWidth: 6,
    borderColor: "#eeeeee",
  },
  container3: {
    padding: 16,
    // flex: 1,
    flexDirection: "row",
    height: 72,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    // borderWidth: 0.5,
    // borderColor: "black",
    // borderRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  subHead: {
    backgroundColor: "#ffffff",
    padding: 15,
    height: 130,
    borderWidth: 0.5,
  },
  bankContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  account: {
    fontSize: 14,
    marginBottom: 10,
  },
});

export default QuickOptions;
