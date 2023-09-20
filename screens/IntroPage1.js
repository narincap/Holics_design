import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IntroPage1 = () => {
  return (
    <View style={styles.introPage}>
      <Image
        style={[styles.mapIcon, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/map.png")}
      />
      <Image
        style={[styles.introPageChild, styles.introPageChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[
          styles.istockphoto1295994703612x612Icon,
          styles.introPageChildLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/istockphoto1295994703612x612removebgpreview-1.png")}
      />
      <Image
        style={styles.istockphoto1273857886170667aIcon}
        resizeMode="cover"
        source={require("../assets/istockphoto1273857886170667aremovebgpreview-1.png")}
      />
      <View style={[styles.introPageItem, styles.introLayout]} />
      <View style={[styles.introPageInner, styles.introLayout]} />
      <View style={[styles.display, styles.displayLayout]}>
        <View style={[styles.displayChild, styles.displayLayout]} />
        <View style={[styles.displayInner, styles.groupParentFlexBox]}>
          <View style={styles.groupParentFlexBox}>
            <View style={styles.amLayout}>
              <Text style={[styles.departure, styles.amTypo]}>Departure</Text>
              <Text style={[styles.am, styles.amTypo]}>
                <Text style={styles.text}>7:30</Text>
                <Text style={styles.am1}>am</Text>
              </Text>
            </View>
            <View style={styles.pmParent}>
              <Text style={[styles.pm, styles.amTypo]}>
                <Text style={styles.text}>8:32</Text>
                <Text style={styles.am1}>pm</Text>
              </Text>
              <Text style={[styles.estimatedDestination, styles.amTypo]}>
                Estimated destination
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.displayItem}
          resizeMode="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={styles.image1Icon}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
          <View style={[styles.groupChild, styles.groupChildLayout1]} />
          <Text style={[styles.scbdJakarta, styles.jakartaClr]}>
            Scbd, Jakarta
          </Text>
          <Image
            style={[styles.groupItem, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-101.png")}
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
            style={[styles.playparqKemangJakartaContainer, styles.jakartaClr]}
          >
            {`Playparq Kemang, `}Jakarta
          </Text>
        </View>
        <Text style={[styles.booked, styles.bookedTypo]}>Booked</Text>
        <View style={styles.rectangleView} />
        <Text style={[styles.job, styles.jakartaClr]}>Job</Text>
        <Image
          style={styles.lineIcon}
          resizeMode="cover"
          source={require("../assets/line-311.png")}
        />
        <Text style={[styles.scbdSouthJakarta, styles.southLayout]}>
          <Text style={[styles.scbd, styles.scbdTypo]}>SCBD,</Text>
          <Text style={styles.southJakarta}>South Jakarta</Text>
        </Text>
        <Text
          style={[
            styles.playparqKemangSouthJakartaContainer,
            styles.southLayout,
          ]}
        >
          <Text style={[styles.scbd, styles.scbdTypo]}>{`Playparq 
Kemang,`}</Text>
          <Text style={styles.southJakarta}>South Jakarta</Text>
        </Text>
        <Text style={[styles.details, styles.bookedTypo]}>Details</Text>
      </View>
      <Image
        style={styles.vehicleModeIcon}
        resizeMode="cover"
        source={require("../assets/vehicle-mode.png")}
      />
      <View style={styles.introPageChild1} />
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    top: 0,
  },
  introPageChildLayout: {
    height: 54,
    position: "absolute",
  },
  introLayout: {
    height: 23,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 183,
    position: "absolute",
  },
  displayLayout: {
    height: 142,
    width: 388,
    position: "absolute",
  },
  groupParentFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  amTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 44,
    position: "absolute",
  },
  jakartaClr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 8,
    width: 10,
    top: 17,
    position: "absolute",
  },
  bookedTypo: {
    top: 7,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  southLayout: {
    lineHeight: 15,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  scbdTypo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  mapIcon: {
    width: 437,
    height: 907,
    position: "absolute",
  },
  introPageChild: {
    top: 43,
    left: 366,
    width: 54,
  },
  istockphoto1295994703612x612Icon: {
    top: 167,
    left: 64,
    width: 71,
  },
  istockphoto1273857886170667aIcon: {
    top: 176,
    left: 112,
    width: 59,
    height: 35,
    opacity: 0.3,
    position: "absolute",
  },
  introPageItem: {
    left: 74,
  },
  introPageInner: {
    left: 121,
  },
  displayChild: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
  },
  departure: {
    top: 28,
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
  },
  text: {
    fontSize: FontSize.size_11xl,
  },
  am1: {
    fontSize: FontSize.size_xl,
  },
  am: {
    lineHeight: 25,
    height: 38,
    width: 99,
    top: 0,
    color: Color.colorWhite,
  },
  amLayout: {
    height: 38,
    width: 99,
  },
  pm: {
    lineHeight: 10,
    top: 0,
    color: Color.colorWhite,
  },
  estimatedDestination: {
    top: 21,
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
  },
  pmParent: {
    width: 98,
    height: 31,
    marginLeft: 74,
  },
  displayInner: {
    top: 88,
    left: 93,
    position: "absolute",
  },
  displayItem: {
    top: 42,
    left: 20,
    width: 56,
    height: 56,
    position: "absolute",
  },
  image1Icon: {
    top: 51,
    left: 29,
    width: 37,
    height: 37,
    position: "absolute",
  },
  groupChild: {
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
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
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
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
  },
  rectangleParent: {
    top: 10,
    left: 99,
    width: 270,
    display: "none",
  },
  booked: {
    left: 24,
    color: Color.colorMediumspringgreen,
    fontSize: FontSize.size_xl,
  },
  rectangleView: {
    top: 103,
    left: 27,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod,
    width: 41,
    height: 24,
    position: "absolute",
  },
  job: {
    top: 102,
    left: 34,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    lineHeight: 25,
  },
  lineIcon: {
    top: 77,
    left: 181,
    width: 81,
    height: 5,
    position: "absolute",
  },
  scbd: {
    fontSize: FontSize.size_mini,
  },
  southJakarta: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.montserratRegular,
  },
  scbdSouthJakarta: {
    top: 45,
    left: 104,
  },
  playparqKemangSouthJakartaContainer: {
    top: 37,
    left: 277,
  },
  details: {
    left: 319,
    fontSize: FontSize.size_xs,
    color: Color.colorSkyblue_200,
  },
  display: {
    top: 653,
    left: 18,
  },
  vehicleModeIcon: {
    top: 174,
    left: 10,
    width: 49,
    height: 217,
    position: "absolute",
  },
  introPageChild1: {
    top: 664,
    left: 333,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorSnow_200,
    width: 53,
    height: 18,
    position: "absolute",
  },
  introPage: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IntroPage1;
