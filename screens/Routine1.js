import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Routine1 = () => {
  return (
    <View style={styles.routine1}>
      <Image
        style={styles.mapIcon}
        resizeMode="cover"
        source={require("../assets/map2.png")}
      />
      <View style={[styles.routine1Child, styles.routine1ChildLayout2]} />
      <View style={styles.routine1Item} />
      <Text style={[styles.change, styles.changeFlexBox]}>CHANGE</Text>
      <Image
        style={styles.routine1Inner}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={[styles.routine1Child1, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={[styles.routine1Child2, styles.routine1ChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-26.png")}
      />
      <Image
        style={[styles.routine1Child3, styles.routine1ChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-27.png")}
      />
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-16.png")}
      />
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.workschooloffice, styles.homeTypo]}>
        work/school/office
      </Text>
      <Image
        style={styles.routine1Child4}
        resizeMode="cover"
        source={require("../assets/ellipse-28.png")}
      />
      <Text
        style={[styles.placesTime, styles.continueTypo]}
      >{`Places & Time`}</Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <Text style={[styles.text3, styles.textTypo]}>4</Text>
      <Text style={[styles.routine, styles.routineTypo]}>Routine</Text>
      <Text style={[styles.smaPraditaDirgantara, styles.smaTypo]}>
        SMA Pradita Dirgantara, Boyolali, Central J...
      </Text>
      <Text style={[styles.smaTarunaNusantara, styles.smaTypo]}>
        SMA Taruna Nusantara, Magelang, Central...
      </Text>
      <Text style={styles.monthlyRoutine}>Monthly Routine</Text>
      <View style={styles.lineView} />
      <Image
        style={styles.refreshIcon}
        resizeMode="cover"
        source={require("../assets/refresh.png")}
      />
      <View style={[styles.routine1Child5, styles.routine1ChildLayout]} />
      <Text style={[styles.continue, styles.routineTypo]}>Continue</Text>
      <View style={[styles.routine1Child6, styles.routine1ChildLayout]} />
      <Image
        style={[styles.routine1Child7, styles.routine1ChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-22.png")}
      />
      <Image
        style={[styles.closeIcon, styles.closeIconPosition]}
        resizeMode="cover"
        source={require("../assets/close1.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.sun, styles.sunTypo]}>Sun</Text>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <View style={[styles.groupInner, styles.groupChildLayout]} />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <View style={[styles.groupChild3, styles.groupChildLayout]} />
        <View style={[styles.groupChild4, styles.groupChildLayout]} />
        <Text style={[styles.tue, styles.tueTypo]}>Tue</Text>
        <Text style={[styles.wed, styles.wedTypo]}>Wed</Text>
        <Text style={[styles.thu, styles.tueTypo]}>Thu</Text>
        <Text style={[styles.fri, styles.wedTypo]}>Fri</Text>
        <Text style={[styles.sat, styles.sunTypo]}>Sat</Text>
        <Text style={[styles.mon, styles.wedTypo]}>Mon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  routine1ChildLayout2: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  changeFlexBox: {
    textAlign: "left",
    lineHeight: 25,
  },
  ellipseIconLayout: {
    height: 12,
    width: 12,
    left: 48,
    position: "absolute",
  },
  routine1ChildLayout1: {
    height: 6,
    width: 6,
    left: 51,
    position: "absolute",
  },
  homeTypo: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    left: 69,
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  continueTypo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  textTypo: {
    fontSize: FontSize.size_6xl,
    top: 303,
    textAlign: "left",
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    lineHeight: 25,
    position: "absolute",
  },
  routineTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  smaTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    left: 69,
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  routine1ChildLayout: {
    height: 86,
    top: 822,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  closeIconPosition: {
    top: 237,
    position: "absolute",
  },
  groupChildLayout: {
    width: 37,
    borderRadius: Border.br_9xs,
    top: 0,
    height: 37,
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  sunTypo: {
    color: Color.colorGray_300,
    top: 7,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  tueTypo: {
    top: 6,
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  wedTypo: {
    top: 7,
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  mapIcon: {
    top: 1,
    height: 908,
    width: 437,
    left: 0,
    position: "absolute",
  },
  routine1Child: {
    top: 218,
    left: -5,
    height: 511,
    backgroundColor: Color.colorBlack,
    width: 437,
  },
  routine1Item: {
    top: 366,
    borderRadius: Border.br_6xl,
    width: 430,
    height: 566,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  change: {
    left: 332,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    top: 402,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  routine1Inner: {
    width: 282,
    height: 2,
    left: 69,
    top: 510,
    position: "absolute",
  },
  ellipseIcon: {
    top: 462,
  },
  routine1Child1: {
    top: 515,
  },
  routine1Child2: {
    top: 518,
  },
  routine1Child3: {
    top: 465,
  },
  lineIcon: {
    top: 474,
    left: 54,
    width: 1,
    height: 41,
    position: "absolute",
  },
  home: {
    top: 455,
  },
  workschooloffice: {
    top: 510,
    color: Color.colorDarkgray_100,
  },
  routine1Child4: {
    top: 498,
    left: 360,
    width: 23,
    height: 23,
    position: "absolute",
  },
  placesTime: {
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    left: 24,
    top: 237,
    position: "absolute",
    textAlign: "left",
    lineHeight: 25,
  },
  rectangleView: {
    top: 298,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumspringgreen,
    width: 36,
    height: 35,
    left: 48,
    position: "absolute",
  },
  text: {
    left: 60,
    color: Color.colorBlack,
  },
  text1: {
    left: 151,
    color: Color.colorWhite,
  },
  text2: {
    left: 246,
    color: Color.colorWhite,
  },
  text3: {
    left: 342,
    color: Color.colorWhite,
  },
  routine: {
    left: 37,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    top: 402,
    fontSize: FontSize.size_xl,
  },
  smaPraditaDirgantara: {
    top: 483,
    color: Color.colorBlack,
  },
  smaTarunaNusantara: {
    top: 533,
    color: Color.colorBlack,
  },
  monthlyRoutine: {
    top: 585,
    left: 20,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  lineView: {
    top: 577,
    left: 8,
    borderStyle: "solid",
    borderColor: Color.colorGray_500,
    borderTopWidth: 1,
    width: 404,
    height: 1,
    position: "absolute",
  },
  refreshIcon: {
    top: 501,
    left: 363,
    width: 18,
    height: 18,
    position: "absolute",
  },
  routine1Child5: {
    left: 122,
    width: 281,
    backgroundColor: Color.colorBlack,
  },
  continue: {
    top: 852,
    left: 214,
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  routine1Child6: {
    width: 81,
    left: 24,
    backgroundColor: Color.colorWhite,
  },
  routine1Child7: {
    top: 856,
    left: 42,
    width: 45,
    height: 17,
  },
  closeIcon: {
    left: 378,
    width: 25,
    height: 25,
  },
  groupChild: {
    left: 339,
  },
  sun: {
    left: 344,
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 57,
  },
  groupChild1: {
    left: 114,
  },
  groupChild2: {
    left: 171,
  },
  groupChild3: {
    left: 228,
  },
  groupChild4: {
    left: 285,
  },
  tue: {
    left: 63,
  },
  wed: {
    left: 117,
  },
  thu: {
    left: 177,
  },
  fri: {
    left: 238,
  },
  sat: {
    left: 293,
  },
  mon: {
    left: 4,
  },
  rectangleParent: {
    top: 632,
    width: 376,
    height: 37,
    left: 20,
    position: "absolute",
  },
  routine1: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Routine1;
