import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  Text,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../Color/Color";
import STYLES from "../Style/index";
import { TouchableOpacity } from "react-native-gesture-handler";
const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", color: COLORS.dark }}
          >
            FOX
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: COLORS.secondary,
            }}
          >
            HUB
          </Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <Text
            style={{ fontSize: 27, fontWeight: "bold", color: COLORS.dark }}
          >
            Welcome back
          </Text>
          <Text
            style={{ fontSize: 19, fontWeight: "bold", color: COLORS.light }}
          >
            Sign up to continue
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <MaterialIcons
              name="person-outline"
              size={20}
              color={COLORS.light}
            />
            <TextInput placeholder="Name" style={STYLES.input} />
          </View>

          <View style={STYLES.inputContainer}>
            <MaterialIcons name="mail-outline" size={20} color={COLORS.light} />
            <TextInput placeholder="mail" style={STYLES.input} />
          </View>

          <View style={STYLES.inputContainer}>
            <MaterialIcons name="lock-outline" size={20} color={COLORS.light} />
            <TextInput
              placeholder="pasword"
              secureTextEntry
              style={STYLES.input}
            />
          </View>
        </View>
        <TouchableOpacity style={STYLES.btnPrimary}>
          <Text
            style={{ color: COLORS.white, fontSize: 18, fontWeight: "bold" }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={STYLES.line}></View>
          <Text style={{ fontWeight: "bold", marginHorizontal: 7 }}>OR</Text>
          <View style={STYLES.line}></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={STYLES.btnSecondary}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Sign up with
            </Text>
            <Image
              style={STYLES.btnImage}
              source={require("../../assets/images/facebook.jpg")}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={STYLES.btnSecondary}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Sign up with
            </Text>
            <Image
              style={STYLES.btnImage}
              source={require("../../assets/images/google.png")}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginBottom: 20,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Text>already have an account </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
