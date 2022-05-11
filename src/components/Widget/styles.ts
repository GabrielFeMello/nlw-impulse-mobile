import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { getBottomSpace } from "react-native-iphone-x-helper";
export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: theme.colors.surface_primary,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    right: 16,
    bottom: getBottomSpace() + 16,
  },
  modal: {
    backgroundColor: theme.colors.surface_secondary,
    width: 300,
    padding: 35,
    zIndex: 100,
  },
  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 56,
  },
});
