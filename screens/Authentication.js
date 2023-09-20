import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Authentication = () => {
  return (
    <View style={styles.authentication}>
      <View style={styles.authenticationChild} />
      <Text style={styles.logIn}>Log in</Text>
      <View style={styles.vectorParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-2.png")}
        />
        <Text style={[styles.logIn1, styles.logTypo]}>log in</Text>
      </View>
      <View style={styles.vectorParent}>
        <Text style={[styles.logIn2, styles.logTypo]}>log in</Text>
      </View>
      <View style={[styles.authenticationItem, styles.authenticationLayout]} />
      <View style={[styles.authenticationInner, styles.authenticationLayout]} />
      <Image
        style={styles.pngwing2Icon}
        resizeMode="cover"
        source={require("../assets/pngwing-2.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
      <View style={[styles.authenticationChild1, styles.rectangleViewLayout]} />
      <Text style={[styles.password, styles.usernameTypo]}>Password</Text>
      <Text style={[styles.dontHaveAn, styles.signUpTypo]}>
        don’t have an account?
      </Text>
      <Text style={[styles.signUp, styles.signUpTypo]}>sign up</Text>
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
  authenticationLayout: {
    height: 53,
    width: 176,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_smi,
    top: 635,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 56,
    width: 365,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_9xl,
    position: "absolute",
  },
  usernameTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    left: 59,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  signUpTypo: {
    fontSize: FontSize.size_mini,
    top: 716,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  authenticationChild: {
    top: 209,
    left: 14,
    borderRadius: Border.br_40xl,
    width: 398,
    height: 649,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  logIn: {
    top: 253,
    left: 137,
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
  logIn1: {
    zIndex: 1,
  },
  vectorParent: {
    top: 539,
    left: 24,
    width: 266,
    position: "absolute",
  },
  logIn2: {
    zIndex: 0,
  },
  authenticationItem: {
    left: 33,
  },
  authenticationInner: {
    left: 220,
  },
  pngwing2Icon: {
    top: 640,
    left: 285,
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
  },
  authenticationChild1: {
    top: 440,
    left: 30,
  },
  password: {
    top: 454,
  },
  dontHaveAn: {
    left: 43,
    color: Color.colorBlack,
    top: 716,
  },
  signUp: {
    left: 228,
    textDecoration: "underline",
    color: Color.colorSkyblue_100,
  },
  pngwing1Icon: {
    top: 648,
    left: 108,
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
    top: 51,
    left: 165,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  noTimeTo: {
    top: 88,
    left: 126,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  authentication: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Authentication;
