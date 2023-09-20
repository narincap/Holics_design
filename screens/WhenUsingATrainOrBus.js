import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const WhenUsingATrainOrBus = () => {
  return (
    <View style={styles.whenUsingATrainOrBus}>
      <Image
        style={[styles.mapIcon, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/map.png")}
      />
      <Image
        style={styles.whenUsingATrainOrBusChild}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <View style={[styles.display, styles.displayLayout]}>
        <View style={[styles.displayChild, styles.displayLayout]} />
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
          <Text style={[styles.departure, styles.amTypo]}>Departure</Text>
          <Text style={[styles.am, styles.amTypo]}>
            <Text style={styles.text}>7:45</Text>
            <Text style={styles.am1}>am</Text>
          </Text>
        </View>
        <View style={[styles.amParent, styles.parentPosition]}>
          <Text style={[styles.am2, styles.amTypo]}>
            <Text style={styles.text}>8:10</Text>
            <Text style={styles.am1}>am</Text>
          </Text>
          <Text style={[styles.estimatedDestination, styles.amTypo]}>
            Estimated destination
          </Text>
        </View>
        <Image
          style={styles.displayItem}
          resizeMode="cover"
          source={require("../assets/line-32.png")}
        />
        <Text style={[styles.details, styles.jakartaTypo]}>Details</Text>
        <View style={styles.displayInner} />
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
        source={require("../assets/toggle3.png")}
      />
      <Image
        style={styles.train5121Icon}
        resizeMode="cover"
        source={require("../assets/train512-11.png")}
      />
      <Image
        style={styles.whenUsingATrainOrBusItem}
        resizeMode="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <Image
        style={[styles.train5121Icon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/train512-1.png")}
      />
      <Image
        style={[styles.carIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/car.png")}
      />
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        source={require("../assets/image-5.png")}
      />
      <Text style={[styles.trainTicket, styles.amTypo]}>TrainTicket</Text>
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
  groupChildLayout1: {
    height: 44,
    position: "absolute",
  },
  jakartaTypo: {
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
  },
  amTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  parentPosition: {
    left: 227,
    position: "absolute",
  },
  dukuhAtas2Typo: {
    fontFamily: FontFamily.montserratRegular,
    left: 244,
    color: Color.colorWhite,
    lineHeight: 10,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  mapIcon: {
    width: 437,
    height: 907,
    left: 0,
    position: "absolute",
  },
  whenUsingATrainOrBusChild: {
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
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
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
    top: 14,
    left: 183,
    width: 87,
    height: 17,
    lineHeight: 10,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
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
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    color: Color.colorWhite,
  },
  text: {
    fontSize: FontSize.size_lg,
  },
  am1: {
    fontSize: FontSize.size_xs,
  },
  am: {
    height: 38,
    width: 99,
    lineHeight: 25,
    left: 0,
    top: 0,
  },
  departureParent: {
    top: 24,
    left: 227,
    position: "absolute",
  },
  am2: {
    lineHeight: 10,
    left: 0,
    top: 0,
  },
  estimatedDestination: {
    top: 12,
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    color: Color.colorWhite,
    left: 0,
  },
  amParent: {
    top: 93,
    width: 93,
    height: 22,
  },
  displayItem: {
    top: 33,
    left: 209,
    width: 5,
    height: 73,
    position: "absolute",
  },
  details: {
    top: 7,
    left: 319,
    color: Color.colorSkyblue_200,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 25,
  },
  displayInner: {
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
    top: 574,
  },
  dukuhAtas2: {
    top: 646,
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
    left: 31,
    width: 25,
    height: 25,
    top: 574,
    position: "absolute",
  },
  whenUsingATrainOrBusItem: {
    top: 262,
    left: 14,
    width: 41,
    height: 41,
    position: "absolute",
  },
  train5121Icon1: {
    top: 267,
    left: 19,
  },
  carIcon: {
    top: 185,
    left: 18,
  },
  image5Icon: {
    top: 578,
    left: 72,
    width: 142,
    height: 128,
    position: "absolute",
  },
  trainTicket: {
    top: 623,
    left: 37,
    fontSize: FontSize.size_3xs,
    lineHeight: 10,
  },
  whenUsingATrainOrBus: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default WhenUsingATrainOrBus;
