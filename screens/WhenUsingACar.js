import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const WhenUsingACar = () => {
  return (
    <View style={styles.whenUsingACar}>
      <Image
        style={[styles.mapIcon, styles.groupPosition]}
        resizeMode="cover"
        source={require("../assets/map.png")}
      />
      <Image
        style={[styles.whenUsingACarChild, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text style={[styles.geloraBungkarno, styles.gbkTypo]}>
        {`Gelora `}Bungkarno
      </Text>
      <Image
        style={styles.toggleIcon}
        resizeMode="cover"
        source={require("../assets/toggle.png")}
      />
      <Image
        style={styles.whenUsingACarItem}
        resizeMode="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <Image
        style={styles.carIcon}
        resizeMode="cover"
        source={require("../assets/car.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <View style={[styles.groupChild, styles.groupChildLayout1]} />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.scbdJakarta, styles.jakartaTypo]}>
            Scbd, Jakarta
          </Text>
          <Image
            style={[styles.groupInner, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-10.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.scbdPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <Image
            style={[styles.groupChild2, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <Image
            style={[styles.groupChild3, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-14.png")}
          />
          <Text
            style={[styles.playparqKemangJakartaContainer, styles.jakartaTypo]}
          >
            {`Playparq Kemang, `}Jakarta
          </Text>
        </View>
        <Image
          style={styles.lineIcon}
          resizeMode="cover"
          source={require("../assets/line-31.png")}
        />
        <Image
          style={styles.carIcon1}
          resizeMode="cover"
          source={require("../assets/car1.png")}
        />
        <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
        <Text style={[styles.scbd, styles.scbdPosition]}>SCBD</Text>
        <Text style={[styles.gbk, styles.gbkTypo]}>GBK</Text>
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-93.png")}
        />
        <Text style={[styles.stevenUniverse, styles.gbkTypo]}>
          Steven Universe
        </Text>
        <Text style={[styles.xeniaBg1234, styles.gbkTypo]}>
          Xenia (BG 1234 HR)
        </Text>
        <Text style={[styles.arrivesIn10Container, styles.detailsTypo]}>
          <Text style={styles.arrivesIn}>{`Arrives in `}</Text>
          <Text style={styles.text}>10</Text>
          <Text style={styles.arrivesIn}> minutes</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    top: 0,
  },
  rectangleIconLayout: {
    height: 54,
    position: "absolute",
  },
  gbkTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 10,
  },
  groupChildLayout1: {
    height: 142,
    width: 388,
    position: "absolute",
  },
  groupLayout: {
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
  },
  scbdPosition: {
    left: 108,
    position: "absolute",
  },
  detailsTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  mapIcon: {
    width: 437,
    height: 907,
    position: "absolute",
  },
  whenUsingACarChild: {
    top: 43,
    left: 366,
    width: 54,
  },
  geloraBungkarno: {
    top: 672,
    left: 178,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  toggleIcon: {
    top: 176,
    left: 9,
    width: 49,
    height: 293,
    position: "absolute",
  },
  whenUsingACarItem: {
    top: 181,
    left: 14,
    width: 41,
    height: 41,
    position: "absolute",
  },
  carIcon: {
    top: 185,
    left: 18,
    width: 32,
    height: 32,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
  },
  groupItem: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    width: 264,
    left: 0,
    top: 0,
  },
  scbdJakarta: {
    top: 11,
    left: 19,
    width: 57,
    height: 21,
    lineHeight: 25,
  },
  groupInner: {
    left: 91,
    position: "absolute",
  },
  ellipseIcon: {
    height: 8,
    width: 10,
    top: 17,
  },
  groupChild1: {
    left: 125,
    position: "absolute",
  },
  groupChild2: {
    left: 142,
    position: "absolute",
  },
  groupChild3: {
    left: 159,
    position: "absolute",
  },
  playparqKemangJakartaContainer: {
    top: 14,
    left: 183,
    width: 87,
    height: 17,
    lineHeight: 10,
  },
  rectangleGroup: {
    top: 10,
    left: 99,
    width: 270,
    display: "none",
  },
  lineIcon: {
    top: 98,
    left: 145,
    width: 81,
    height: 5,
    position: "absolute",
  },
  carIcon1: {
    top: 9,
    left: 38,
    width: 25,
    height: 25,
    position: "absolute",
  },
  details: {
    top: 7,
    left: 319,
    color: Color.colorSkyblue_200,
    lineHeight: 25,
  },
  scbd: {
    top: 96,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 10,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
  },
  gbk: {
    top: 92,
    left: 243,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  rectangleIcon: {
    top: 34,
    left: 32,
    borderRadius: 100,
    width: 53,
  },
  stevenUniverse: {
    top: 45,
    left: 163,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  xeniaBg1234: {
    top: 61,
    left: 164,
    color: "#999",
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  arrivesIn: {
    color: Color.colorWhitesmoke_100,
  },
  text: {
    color: Color.colorMediumspringgreen,
  },
  arrivesIn10Container: {
    top: 15,
    left: 63,
    lineHeight: 10,
  },
  rectangleParent: {
    top: 584,
    left: 25,
  },
  whenUsingACar: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default WhenUsingACar;
