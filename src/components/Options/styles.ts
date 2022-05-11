import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    color: theme.colors.text_primary,
    marginBottom: 22,
  },

  options: {
    width: "100%",
    marginBottom: 48,
    flexDirection: "row",
    justifyContent: "center",
  },
});
