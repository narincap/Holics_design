import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const EndOfTheTrip = () => {
  return (
    <View style={styles.endOfTheTrip}>
      <Image
        style={styles.mapIcon}
        resizeMode="cover"
        source={require("../assets/map.png")}
      />
      <Image
        style={styles.endOfTheTripChild}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <View style={styles.endOfTheTripItem} />
      <Text style={[styles.kg, styles.kgFlexBox]}>
        <Text style={styles.text}>5000</Text>
        <Text style={styles.kg1}>kg</Text>
      </Text>
      <Text style={[styles.youveArrived, styles.kgFlexBox]}>
        You’ve Arrived!
      </Text>
      <View style={styles.endOfTheTripInner} />
      <Image
        style={[styles.slideBarIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/slide-bar.png")}
      />
      <Text style={[styles.geloraBungkarno, styles.dukuhAtas2Typo]}>
        {`Gelora `}Bungkarno
      </Text>
      <Text style={[styles.dukuhAtas2, styles.dukuhAtas2Typo]}>
        Dukuh Atas 2
      </Text>
      <Image
        style={styles.toggleIcon}
        resizeMode="cover"
        source={require("../assets/toggle1.png")}
      />
      <Image
        style={[styles.train5121Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/train512-1.png")}
      />
      <Image
        style={[styles.carIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/car.png")}
      />
      <Image
        style={[styles.walkingIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/walking1.png")}
      />
      <Text style={[styles.byUsingThisContainer, styles.carbonFootprintTypo]}>
        By using this serviceyou’ve saved:
      </Text>
      <Text style={[styles.carbonFootprint, styles.carbonFootprintTypo]}>
        Carbon Footprint
      </Text>
      <Image
        style={[styles.closeIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/close.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  kgFlexBox: {
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  iconPosition: {
    top: 495,
    position: "absolute",
  },
  dukuhAtas2Typo: {
    color: Color.colorWhite,
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  carbonFootprintTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  mapIcon: {
    top: 0,
    left: 0,
    width: 437,
    height: 907,
    position: "absolute",
  },
  endOfTheTripChild: {
    top: 43,
    left: 366,
    width: 54,
    height: 54,
    position: "absolute",
  },
  endOfTheTripItem: {
    top: 481,
    left: 4,
    borderRadius: 33,
    backgroundColor: Color.colorWhite,
    width: 430,
    height: 487,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_31xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorSandybrown,
  },
  kg1: {
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_xl,
  },
  kg: {
    top: 712,
    left: 141,
  },
  youveArrived: {
    top: 596,
    left: 14,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorBlack,
  },
  endOfTheTripInner: {
    top: 569,
    left: -2,
    borderStyle: "solid",
    borderColor: Color.colorGray_600,
    borderTopWidth: 2,
    width: 432,
    height: 2,
    position: "absolute",
  },
  slideBarIcon: {
    left: 194,
    borderRadius: 50,
    width: 50,
    height: 9,
  },
  geloraBungkarno: {
    top: 646,
    left: 29,
  },
  dukuhAtas2: {
    top: 658,
    left: 307,
    width: 60,
  },
  toggleIcon: {
    top: 176,
    left: 9,
    width: 49,
    height: 293,
    position: "absolute",
  },
  train5121Icon: {
    top: 267,
    left: 19,
  },
  carIcon: {
    top: 185,
    left: 18,
  },
  walkingIcon: {
    top: 351,
    left: 19,
  },
  byUsingThisContainer: {
    top: 636,
    left: 19,
  },
  carbonFootprint: {
    top: 752,
    left: 131,
  },
  closeIcon: {
    left: 386,
    width: 34,
    height: 34,
  },
  endOfTheTrip: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default EndOfTheTrip;
