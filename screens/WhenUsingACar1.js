import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const WhenUsingACar1 = () => {
  return (
    <View style={styles.whenUsingACar}>
      <Image
        style={[styles.mapIcon, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/map.png")}
      />
      <Image
        style={styles.whenUsingACarChild}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <View style={[styles.display, styles.displayLayout]}>
        <View style={[styles.displayChild, styles.displayLayout]} />
        <Text style={[styles.minsLeft, styles.amTypo]}>
          <Text style={styles.text}>21</Text>
          <Text style={styles.minsLeft1}> mins left!</Text>
        </Text>
        <Text style={[styles.m, styles.mTypo]}>211 m</Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
          <View style={[styles.groupChild, styles.groupChildLayout1]} />
          <Text style={[styles.scbdJakarta, styles.jakartaTypo]}>
            Scbd, Jakarta
          </Text>
          <Image
            style={[styles.groupItem, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-10.png")}
          />
          <Image
            style={[styles.groupInner, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <Image
            style={[styles.groupChild2, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-14.png")}
          />
          <Text
            style={[styles.playparqKemangJakartaContainer, styles.jakartaTypo]}
          >
            {`Playparq Kemang, `}Jakarta
          </Text>
        </View>
        <View style={[styles.departureParent, styles.amLayout]}>
          <Text style={[styles.departure, styles.mTypo]}>Departure</Text>
          <Text style={[styles.am, styles.amLayout]}>
            <Text style={styles.text1}>8:10</Text>
            <Text style={styles.am1}>am</Text>
          </Text>
        </View>
        <View style={styles.amParent}>
          <Text style={[styles.am2, styles.amTypo]}>
            <Text style={styles.text1}>8:32</Text>
            <Text style={styles.am1}>am</Text>
          </Text>
          <Text style={[styles.estimatedDestination, styles.mTypo]}>
            Estimated destination
          </Text>
        </View>
        <Text style={[styles.details, styles.amTypo]}>Details</Text>
        <Image
          style={[styles.walkingIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/walking1.png")}
        />
        <View style={styles.displayItem} />
      </View>
      <Text style={[styles.geloraBungkarno, styles.dukuhAtas2Typo]}>
        {`Gelora `}Bungkarno
      </Text>
      <Text style={[styles.dukuhAtas2, styles.dukuhAtas2Typo]}>
        Dukuh Atas 2
      </Text>
      <Image
        style={styles.toggleIcon}
        resizeMode="cover"
        source={require("../assets/toggle2.png")}
      />
      <Image
        style={styles.whenUsingACarItem}
        resizeMode="cover"
        source={require("../assets/ellipse-41.png")}
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
        style={[styles.walkingIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/walking1.png")}
      />
      <Image
        style={styles.whenUsingACarInner}
        resizeMode="cover"
        source={require("../assets/line-53.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    top: 0,
    left: 0,
  },
  displayLayout: {
    height: 142,
    width: 388,
    position: "absolute",
  },
  amTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  mTypo: {
    fontSize: FontSize.size_5xs,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 10,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 44,
    position: "absolute",
  },
  jakartaTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChildLayout: {
    height: 8,
    width: 10,
    top: 17,
    position: "absolute",
  },
  amLayout: {
    height: 38,
    width: 99,
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  dukuhAtas2Typo: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_5xs,
    color: Color.colorWhite,
    textAlign: "left",
    lineHeight: 10,
    position: "absolute",
  },
  mapIcon: {
    width: 437,
    height: 907,
    left: 0,
    position: "absolute",
  },
  whenUsingACarChild: {
    top: 43,
    left: 366,
    width: 54,
    height: 54,
    position: "absolute",
  },
  displayChild: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
  },
  text: {
    color: Color.colorMediumspringgreen,
  },
  minsLeft1: {
    color: Color.colorWhite,
  },
  minsLeft: {
    fontSize: FontSize.size_mini,
    lineHeight: 10,
    top: 14,
    left: 18,
    position: "absolute",
  },
  m: {
    top: 28,
    left: 152,
  },
  groupChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    width: 264,
    left: 0,
    top: 0,
  },
  scbdJakarta: {
    width: 57,
    height: 21,
    lineHeight: 25,
    left: 19,
    top: 11,
  },
  groupItem: {
    left: 91,
  },
  groupInner: {
    left: 108,
  },
  ellipseIcon: {
    left: 125,
  },
  groupChild1: {
    left: 142,
  },
  groupChild2: {
    left: 159,
  },
  playparqKemangJakartaContainer: {
    left: 183,
    width: 87,
    height: 17,
    lineHeight: 10,
    top: 14,
  },
  rectangleParent: {
    top: 10,
    left: 99,
    width: 270,
    display: "none",
  },
  departure: {
    top: 19,
    left: 1,
  },
  text1: {
    fontSize: FontSize.size_lg,
  },
  am1: {
    fontSize: FontSize.size_xs,
  },
  am: {
    lineHeight: 25,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  departureParent: {
    top: 96,
    left: 12,
  },
  am2: {
    color: Color.colorWhite,
    lineHeight: 10,
    left: 0,
    top: 0,
    position: "absolute",
  },
  estimatedDestination: {
    top: 12,
    left: 0,
  },
  amParent: {
    top: 105,
    left: 290,
    width: 93,
    height: 22,
    position: "absolute",
  },
  details: {
    top: 7,
    left: 319,
    color: Color.colorSkyblue_200,
    fontSize: FontSize.size_xs,
    lineHeight: 25,
    position: "absolute",
  },
  walkingIcon: {
    top: 38,
    left: 144,
  },
  displayItem: {
    left: 314,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorSnow_200,
    width: 53,
    height: 18,
    top: 11,
    position: "absolute",
  },
  display: {
    top: 566,
    left: 18,
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
  whenUsingACarItem: {
    top: 347,
    left: 14,
    width: 41,
    height: 41,
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
  walkingIcon1: {
    top: 351,
    left: 19,
  },
  whenUsingACarInner: {
    top: 634,
    left: 44,
    width: 295,
    height: 5,
    position: "absolute",
  },
  whenUsingACar: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default WhenUsingACar1;
