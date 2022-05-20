import { StyleSheet } from "react-native";
import COLORS from "../Color/Color";

const STYLES = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderBottomWidth: 2,
  },

  input: {
    color: COLORS.light,
    paddingLeft: 10,
    flex: 1,
    fontSize: 18,
  },
  btnPrimary: {
    marginTop: 50,
    backgroundColor: COLORS.primary,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  line: {
    height: 1,
    width: 30,
    backgroundColor: COLORS.light,
  },
  btnSecondary: {
    marginTop: 20,
    flex: 1,
    height: 50,
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: "#6495ed",
    justifyContent: "center",
    alignItems: "center",
  },
  btnImage: {
    height: 20,
    width: 20,
    marginLeft: 5,
  },
});
export default STYLES;
