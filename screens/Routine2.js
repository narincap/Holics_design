import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Routine2 = () => {
  return (
    <View style={styles.routine2}>
      <Image
        style={[styles.mapIcon, styles.mapIconPosition]}
        resizeMode="cover"
        source={require("../assets/map2.png")}
      />
      <View style={[styles.routine2Child, styles.lineIconLayout]} />
      <View style={[styles.routine2Item, styles.mapIconPosition]} />
      <View style={[styles.routine2Inner, styles.routine2InnerLayout]} />
      <Text style={[styles.addMoreDifferent, styles.timeFlexBox]}>
        Add more different Work Time
      </Text>
      <Text
        style={[styles.placesTime, styles.timeTypo]}
      >{`Places & Time`}</Text>
      <View style={[styles.rectangleView, styles.routine2InnerLayout]} />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <Text style={[styles.text3, styles.textTypo]}>4</Text>
      <Text style={[styles.workTime, styles.textTypo]}>Work Time</Text>
      <View style={[styles.routine2Child1, styles.routine2ChildLayout]} />
      <Text style={[styles.setWorkTime, styles.timeTypo]}>Set Work Time</Text>
      <View style={[styles.routine2Child2, styles.routine2ChildLayout]} />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-22.png")}
      />
      <Text style={[styles.am, styles.amPosition]}>
        <Text style={[styles.text4, styles.timeTypo]}>08:00</Text>
        <Text style={styles.am1}> AM</Text>
      </Text>
      <Text style={[styles.am2, styles.amPosition]}>
        <Text style={[styles.text4, styles.timeTypo]}>08:00</Text>
        <Text style={styles.am1}> AM</Text>
      </Text>
      <Image
        style={styles.routine2Child3}
        resizeMode="cover"
        source={require("../assets/line-20.png")}
      />
      <Text style={[styles.from, styles.toTypo]}>from</Text>
      <Text style={[styles.to, styles.toTypo]}>To</Text>
      <Image
        style={[styles.closeIcon, styles.closeIconPosition]}
        resizeMode="cover"
        source={require("../assets/close1.png")}
      />
      <View style={styles.lineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  mapIconPosition: {
    left: 0,
    position: "absolute",
  },
  lineIconLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  routine2InnerLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "left",
    lineHeight: 25,
  },
  timeTypo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  textTypo: {
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  routine2ChildLayout: {
    height: 86,
    top: 751,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  amPosition: {
    top: 511,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 25,
    position: "absolute",
  },
  toTypo: {
    top: 494,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 25,
    position: "absolute",
  },
  closeIconPosition: {
    top: 237,
    position: "absolute",
  },
  mapIcon: {
    top: 1,
    height: 908,
    width: 437,
  },
  routine2Child: {
    top: 218,
    left: -5,
    height: 511,
    backgroundColor: Color.colorBlack,
    width: 437,
  },
  routine2Item: {
    top: 353,
    borderRadius: Border.br_6xl,
    width: 430,
    height: 566,
    backgroundColor: Color.colorWhite,
  },
  routine2Inner: {
    top: 603,
    left: 30,
    backgroundColor: "#ededed",
    borderStyle: "dashed",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 373,
    height: 58,
  },
  addMoreDifferent: {
    top: 619,
    left: 95,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    lineHeight: 25,
    position: "absolute",
  },
  placesTime: {
    color: Color.colorWhite,
    left: 24,
    top: 237,
    position: "absolute",
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_mini,
  },
  rectangleView: {
    top: 298,
    left: 48,
    backgroundColor: Color.colorMediumspringgreen,
    width: 36,
    height: 35,
  },
  text: {
    left: 60,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
  },
  text1: {
    left: 151,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    color: Color.colorWhite,
  },
  text2: {
    left: 246,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    color: Color.colorWhite,
  },
  text3: {
    left: 342,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    color: Color.colorWhite,
  },
  workTime: {
    top: 402,
    left: 37,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  routine2Child1: {
    left: 122,
    width: 281,
    backgroundColor: Color.colorBlack,
  },
  setWorkTime: {
    top: 781,
    left: 184,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  routine2Child2: {
    width: 81,
    left: 24,
    backgroundColor: Color.colorWhite,
  },
  lineIcon: {
    top: 785,
    left: 42,
    width: 45,
    height: 17,
  },
  text4: {
    fontSize: FontSize.size_xl,
  },
  am1: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  am: {
    left: 53,
  },
  am2: {
    left: 297,
  },
  routine2Child3: {
    top: 521,
    left: 186,
    width: 55,
    height: 5,
    position: "absolute",
  },
  from: {
    left: 53,
  },
  to: {
    left: 297,
  },
  closeIcon: {
    left: 387,
    width: 25,
    height: 25,
  },
  lineView: {
    top: 568,
    left: 12,
    borderStyle: "solid",
    borderColor: Color.colorGray_500,
    borderTopWidth: 1,
    width: 404,
    height: 1,
    position: "absolute",
  },
  routine2: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Routine2;
