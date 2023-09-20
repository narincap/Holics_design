import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const NewAccount = () => {
  return (
    <View style={styles.newAccount}>
      <View style={styles.newAccountChild} />
      <Text style={styles.signUp}>Sign up</Text>
      <View style={styles.vectorParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-2.png")}
        />
        <Text style={[styles.logIn, styles.logTypo]}>log in</Text>
      </View>
      <View style={styles.vectorParent}>
        <Text style={[styles.logIn1, styles.logTypo]}>log in</Text>
      </View>
      <View style={[styles.newAccountItem, styles.newLayout]} />
      <View style={[styles.newAccountInner, styles.newLayout]} />
      <Image
        style={styles.pngwing2Icon}
        resizeMode="cover"
        source={require("../assets/pngwing-2.png")}
      />
      <View style={[styles.rectangleView, styles.newChildLayout]} />
      <Text style={[styles.username, styles.passwordTypo]}>Username</Text>
      <View style={[styles.newAccountChild1, styles.newChildLayout]} />
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <View style={[styles.newAccountChild2, styles.newChildLayout]} />
      <Text style={[styles.confirmPassword, styles.passwordTypo]}>
        Confirm Password
      </Text>
      <Text style={[styles.alreadyHaveAn, styles.logIn2Typo]}>
        Already have an account?
      </Text>
      <Text style={[styles.orSignUp, styles.logIn2Typo]}>
        Or sign up through here
      </Text>
      <Text style={[styles.logIn2, styles.logIn2Typo]}>Log in</Text>
      <Image
        style={styles.pngwing1Icon}
        resizeMode="cover"
        source={require("../assets/pngwing-1.png")}
      />
      <Text style={styles.holics}>
        <Text style={styles.h}>h</Text>
        <Text style={styles.o}>o</Text>
        <Text style={styles.l}>l</Text>
        <Text style={styles.i}>i</Text>
        <Text style={styles.c}>c</Text>
        <Text style={styles.s}>s</Text>
        <Text style={styles.text}>.</Text>
      </Text>
      <Text style={styles.noTimeTo}>no time to waste</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logTypo: {
    color: Color.colorWhite,
    left: 145,
    top: 23,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  newLayout: {
    height: 53,
    width: 176,
    borderRadius: Border.br_smi,
    top: 731,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  newChildLayout: {
    height: 56,
    width: 365,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_9xl,
    position: "absolute",
  },
  passwordTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  logIn2Typo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  newAccountChild: {
    top: 209,
    left: 18,
    borderRadius: Border.br_40xl,
    width: 397,
    height: 654,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  signUp: {
    top: 250,
    left: 116,
    fontSize: FontSize.size_31xl,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_11xl,
    width: 378,
    height: 84,
    zIndex: 0,
  },
  logIn: {
    zIndex: 1,
  },
  vectorParent: {
    top: 607,
    left: 27,
    width: 266,
    position: "absolute",
  },
  logIn1: {
    zIndex: 0,
  },
  newAccountItem: {
    left: 34,
  },
  newAccountInner: {
    left: 221,
  },
  pngwing2Icon: {
    top: 736,
    left: 286,
    width: 45,
    height: 43,
    position: "absolute",
  },
  rectangleView: {
    top: 356,
    left: 32,
  },
  username: {
    top: 373,
    left: 59,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  newAccountChild1: {
    top: 440,
    left: 30,
  },
  password: {
    top: 454,
    left: 59,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  newAccountChild2: {
    top: 522,
    left: 31,
  },
  confirmPassword: {
    top: 536,
    left: 60,
  },
  alreadyHaveAn: {
    left: 44,
    top: 801,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  orSignUp: {
    top: 709,
    left: 36,
    color: Color.colorBlack,
  },
  logIn2: {
    left: 260,
    textDecoration: "underline",
    color: Color.colorSkyblue_100,
    top: 801,
    fontSize: FontSize.size_mini,
  },
  pngwing1Icon: {
    top: 744,
    left: 109,
    width: 29,
    height: 28,
    position: "absolute",
  },
  h: {
    color: Color.colorTomato,
  },
  o: {
    color: Color.colorMediumspringgreen,
  },
  l: {
    color: Color.colorSkyblue_200,
  },
  i: {
    color: Color.colorGoldenrod,
  },
  c: {
    color: Color.colorOrchid,
  },
  s: {
    color: Color.colorSandybrown,
  },
  text: {
    color: Color.colorSnow_100,
  },
  holics: {
    top: 48,
    left: 166,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  noTimeTo: {
    top: 85,
    left: 127,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  newAccount: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
});

export default NewAccount;
