import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const IntroPage2 = () => {
  return (
    <View style={styles.introPage}>
      <Text style={styles.holics}>
        <Text style={styles.h}>h</Text>
        <Text style={styles.o}>o</Text>
        <Text style={styles.l}>l</Text>
        <Text style={styles.i}>i</Text>
        <Text style={styles.c}>c</Text>
        <Text style={styles.s}>s</Text>
        <Text style={styles.text}>.</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    position: "absolute",
    top: 418,
    left: 131,
    fontSize: FontSize.size_31xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    textAlign: "left",
  },
  introPage: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IntroPage2;
