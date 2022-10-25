import { View, Text } from "react-native";
import Modal from "react-native-modal";

export const ModalScreen = (props) => {

    return (
        <View>
            <Modal isVisible={props.isModalVisible}>
                <View style={{ flex: 1 }}>
                <Text>I am the modal content!</Text>
                </View>
            </Modal>
        </View>
    );
}