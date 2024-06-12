import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import SecondaryButton from "../components/UI/Buttons/SecondaryButton";

function TargetScreen() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [lockModalIsVisible, setLockModalIsVisible] = useState(false);

  const handleCloseModals = () => {
    setModalIsVisible(false);
  };
  const handleCloseLockModals = () => {
    setLockModalIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.savings}>
        <View style={styles.savingsContainer}>
          <Text style={styles.savingsText}>Savings</Text>
          <Text style={styles.amountText}>N 0.00</Text>
          <Text style={styles.walletText}>Wallet balance</Text>
        </View>

        <View style={styles.savingsContainer2}>
          <Text style={styles.leftText}>Start saving the little you have</Text>
          <Text style={styles.leftText2}>Control your finances</Text>
          <Text style={styles.leftText3}>Get jaw-dropping interests</Text>
        </View>
      </View>

      <View style={styles.targetContainer}>
        <View style={styles.target}>
          <Text style={styles.title}>Zippa Target</Text>

          <View style={styles.active}>
            <Image source={require("../assets/img/gps.png")} />
            <Text style={styles.title2}> 0 Active</Text>
          </View>

          <Text style={styles.text}>
            Save toward a particular goal. Don't limit yourself by one goal
          </Text>
          <TouchableOpacity onPress={() => setModalIsVisible(true)}>
            <Text style={styles.title3}>See details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.target2}>
          <Text style={styles.title}>Zippa Lock</Text>

          <View style={styles.active}>
            <Image source={require("../assets/img/lock.png")} />
            <Text style={styles.title22}> 0 Active</Text>
          </View>

          <Text style={styles.text}>
            Lock your money away for a fixed period of time. Feed your focus{" "}
          </Text>
          <TouchableOpacity onPress={() => setLockModalIsVisible(true)}>
            <Text style={styles.title3}>See details</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ttarget}>
        <View style={styles.target3}>
          <Text style={styles.title}>Zippa Thrift</Text>

          <View style={styles.active}>
            <Image source={require("../assets/img/lock2.png")} />
            <Text style={styles.title33}> 0 Active</Text>
          </View>

          <Text style={styles.text}>
            Lock your money away for a fixed period of time. Feed your focus{" "}
          </Text>
          <TouchableOpacity>
            <Text style={styles.title3}>See details</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalIsVisible}
        onRequestClose={() => {
          setModalIsVisible(!modalIsVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <Animatable.View animation="slideInUp" style={styles.modalView}>
            <Text style={styles.modalHeader}>Zippa Target</Text>
            <View style={styles.subHead}>
              <Text style={styles.plan}>Set a TARGET savings plan</Text>
              <Text style={styles.goal}>
                Save towards a particular goal. Don't limit yourself by one goal
              </Text>
            </View>
            <View style={styles.autoHead}>
              <View>
                <Text style={styles.auto}>Auto Savings</Text>
                <Text style={styles.debit}>Direct debit </Text>
                <Text style={styles.months}>Target up to 6 months </Text>
              </View>

              <View>
                <Image source={require("../assets/img/gps.png")} />
              </View>
            </View>
            <View style={styles.autoHead}>
              <View>
                <Text style={styles.auto}>Flex Savings</Text>
                <Text style={styles.debit}>Manual debit set</Text>
                <Text style={styles.months}>Target up to 6 months </Text>
              </View>

              <View>
                <Image source={require("../assets/img/gps.png")} />
              </View>
            </View>

            <SecondaryButton onPress={handleCloseModals}>
              Continue
            </SecondaryButton>
          </Animatable.View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={lockModalIsVisible}
        onRequestClose={() => {
          setLockModalIsVisible(!lockModalIsVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <Animatable.View animation="slideInUp" style={styles.modalView2}>
            <Text style={styles.modalHeader2}>Zippa Lock</Text>
            <Text style={styles.modalText}>Select anyone to get started</Text>
            <View style={styles.subHead2}>
              <Text style={styles.plan}>Set a LOCK savings plan</Text>
              <Text style={styles.goal}>
                Lock your money away for a fixed period of time. Feed your
                focus.{" "}
              </Text>
            </View>
            <View style={styles.autoHead}>
              <View>
                <Text style={styles.fixed}>Fixed Deposit</Text>
                <Text style={styles.debit}>Save and Lock</Text>
                <Text style={styles.months}>
                  Target up to 12 months and get 22% ROI
                </Text>
              </View>

              <View>
                <Image source={require("../assets/img/lock.png")} />
              </View>
            </View>
            <View style={styles.autoHead}>
              <View>
                <Text style={styles.fixed}>Savings With Benefits</Text>
                <Text style={styles.debit}>
                  Diamond | Gold | Silver | Bronze | Basic
                </Text>
                <Text style={styles.months}>
                  Lock up to 12 months and get amazing benefits
                </Text>
              </View>

              <View>
                <Image source={require("../assets/img/lock.png")} />
              </View>
            </View>
            <View style={styles.autoHead}>
              <View>
                <Text style={styles.fixed}>Savings With Benefits</Text>
                <Text style={styles.debit}>
                  Diamond | Gold | Silver | Bronze | Basic
                </Text>
                <Text style={styles.months}>
                  Lock up to 12 months and get amazing benefits
                </Text>
              </View>

              <View>
                <Image source={require("../assets/img/lock.png")} />
              </View>
            </View>
            <View style={styles.autoHead}>
              <View>
                <Text style={styles.fixed}>Smart Kiddies Savings</Text>
                <Text style={styles.debit}>Smart 100 | 50 | 30 | 20</Text>
                <Text style={styles.months}>Lock up to 12 months</Text>
              </View>

              <View>
                <Image source={require("../assets/img/lock.png")} />
              </View>
            </View>

            <SecondaryButton onPress={handleCloseLockModals}>
              Continue
            </SecondaryButton>
          </Animatable.View>
        </View>
      </Modal>
    </View>
  );
}

export default TargetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rootScreen: {},
  savings: {
    backgroundColor: "#01063D",
    height: 150,
    flexDirection: "row",
  },
  savingsContainer: {
    padding: 20,
    marginTop: 30,
  },
  savingsContainer2: {
    padding: 20,
    marginTop: 30,
    alignItems: "flex-end",
    marginLeft: 35,
  },
  savingsText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  amountText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  walletText: {
    color: "#ffffff",
    fontSize: 14,
    marginTop: 10,
  },
  leftText: {
    color: "#ffffff",
    fontSize: 13.5,
  },
  leftText2: {
    color: "#ffffff",
    fontSize: 13.5,
    marginTop: 10,
    backgroundColor: "#01C853",
    borderRadius: 10,
    padding: 10,
    fontWeight: 'bold'
  },
  leftText3: {
    color: "#ffffff",
    fontSize: 13.5,
    marginTop: 10,
  },
  targetContainer: {
    marginTop: 10,
    padding: 20,
    flexDirection: "row",
    gap: 18,
  },
  target: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#3D92D7",
    flex: 1,
    gap: 20,
  },
  target2: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#724CCF",
    flex: 1,
    gap: 20,
  },
  target3: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#C68F00",
    // flex: 1,
    gap: 20,
    width: 170,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  title2: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#3D92D7",
  },
  title22: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#724CCF",
  },
  title33: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#C68F00",
  },
  title3: {
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    fontSize: 16,
    color: "#8E8E8E",
  },
  active: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ttarget: {
    alignItems: "flex=start",
    paddingLeft: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "100%",
    height: "57%",
    backgroundColor: "#f6f6f6",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  modalView2: {
    width: "100%",
    height: "85%",
    backgroundColor: "#f6f6f6",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  modalHeader: {
    marginBottom: 15,
    fontSize: 16,
    color: "#01063D",
    marginTop: 10,
    fontWeight: "bold",
  },
  modalHeader2: {
    fontSize: 16,
    color: "#01063D",
    marginTop: 10,
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 14,
    color: "#01063D",
    marginTop: 10,
  },
  subHead: {
    backgroundColor: "#3D92D7",
    padding: 10,
    borderRadius: 10,
    height: 80,
  },
  subHead2: {
    backgroundColor: "#724CCF",
    padding: 10,
    borderRadius: 10,
    height: 80,
  },
  plan: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  goal: {
    color: "white",
    fontSize: 14,
  },
  autoHead: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    height: 90,
    marginTop: 10,
    borderColor: "#01063D",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  auto: {
    color: "#3D92D7",
    fontWeight: "bold",
    fontSize: 14,
  },
  fixed: {
    color: "#724CCF",
    fontWeight: "bold",
    fontSize: 14,
  },
  debit: {
    color: "#01063D",
    fontSize: 13,
    marginTop: 5
  },
  months: {
    color: "#8E8E8E",
    fontSize: 13,
    marginTop: 5
  },
});
