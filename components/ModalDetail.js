import { Modal } from "react-native";

function ModalDetail({ visible, onRequestClose, item }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onRequestClose}
    ></Modal>
  );
}

export default ModalDetail;
