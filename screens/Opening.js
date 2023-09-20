import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Opening = () => {
  return (
    <View style={styles.opening}>
      <Image
        style={[styles.mapIcon, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/map.png")}
      />
      <Image
        style={styles.openingChild}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <View style={styles.openingItem} />
      <View style={[styles.walking, styles.walkingLayout]}>
        <Image
          style={styles.walkingChild}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.walkingPersonIcon24Removeb, styles.walkingLayout]}
          resizeMode="cover"
          source={require("../assets/walkingpersonicon24removebgpreview-3.png")}
        />
      </View>
      <Image
        style={[styles.openingInner, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-2.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-2.png")}
      />
      <Image
        style={styles.train5121Icon}
        resizeMode="cover"
        source={require("../assets/train512-1.png")}
      />
      <View style={[styles.rectangleView, styles.groupChildBg]} />
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <View style={[styles.openingChild1, styles.lineViewBorder]} />
      <View style={[styles.walking1, styles.walkingLayout]}>
        <Image
          style={styles.walkingChild}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.walkingPersonIcon24Removeb, styles.walkingLayout]}
          resizeMode="cover"
          source={require("../assets/walkingpersonicon24removebgpreview-3.png")}
        />
      </View>
      <Text style={[styles.noActivityHas, styles.noActivityHasFlexBox]}>
        No activity has scheduled
      </Text>
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
            <View style={styles.amParent}>
              <Text style={[styles.am2, styles.amTypo]}>
                <Text style={styles.text}>8:32</Text>
                <Text style={styles.am1}>am</Text>
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
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupChildBg]} />
          <Text style={[styles.scbdJakarta, styles.jakartaTypo]}>
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
            style={[styles.playparqKemangJakartaContainer, styles.jakartaTypo]}
          >
            {`Playparq Kemang, `}Jakarta
          </Text>
        </View>
        <Text style={[styles.scheduled, styles.jakartaTypo]}>Scheduled</Text>
        <View style={styles.displayChild1} />
        <Text style={[styles.job, styles.jakartaTypo]}>Job</Text>
        <Image
          style={styles.lineIcon}
          resizeMode="cover"
          source={require("../assets/line-311.png")}
        />
        <Text style={[styles.scbdSouthJakarta, styles.southLayout]}>
          <Text style={styles.scbdTypo}>SCBD,</Text>
          <Text style={styles.southJakarta}>South Jakarta</Text>
        </Text>
        <Text
          style={[
            styles.playparqKemangSouthJakartaContainer,
            styles.southLayout,
          ]}
        >
          <Text style={styles.scbdTypo}>{`Playparq 
Kemang,`}</Text>
          <Text style={styles.southJakarta}>South Jakarta</Text>
        </Text>
      </View>
      <View style={styles.openingChild2} />
      <Image
        style={styles.openingChild3}
        resizeMode="cover"
        source={require("../assets/line-35.png")}
      />
      <Text style={[styles.seeMoreSchedule, styles.scbdTypo]}>
        See More Schedule
      </Text>
      <View style={styles.openingChild4} />
      <Text style={[styles.pay3211, styles.jakartaTypo]}>PAY $32.11</Text>
      <View style={styles.openingChild5} />
      <Text style={[styles.details, styles.jakartaTypo]}>Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    top: 0,
  },
  walkingLayout: {
    height: 35,
    width: 63,
    left: 0,
    position: "absolute",
  },
  groupIconLayout: {
    width: 8,
    left: 28,
    height: 44,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  lineViewBorder: {
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  noActivityHasFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 25,
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
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  jakartaTypo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 8,
    width: 10,
    top: 17,
    position: "absolute",
  },
  southLayout: {
    lineHeight: 15,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  scbdTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  mapIcon: {
    width: 437,
    height: 907,
    position: "absolute",
  },
  openingChild: {
    top: 43,
    left: 366,
    width: 54,
    height: 54,
    position: "absolute",
  },
  openingItem: {
    top: 174,
    left: 9,
    borderRadius: Border.br_sm,
    width: 46,
    height: 217,
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  walkingChild: {
    top: 1,
    left: 15,
    width: 34,
    height: 34,
    position: "absolute",
  },
  walkingPersonIcon24Removeb: {
    top: 0,
  },
  walking: {
    top: 349,
  },
  openingInner: {
    top: 301,
    height: 44,
  },
  groupIcon: {
    top: 217,
    height: 44,
  },
  train5121Icon: {
    top: 265,
    left: 16,
    width: 32,
    height: 32,
    position: "absolute",
  },
  rectangleView: {
    top: 362,
    left: 41,
    width: 13,
    height: 11,
    borderRadius: Border.br_9xs,
  },
  lineView: {
    top: 363,
    left: 51,
    height: 10,
  },
  openingChild1: {
    top: 365,
    left: 49,
    height: 6,
  },
  walking1: {
    top: 178,
  },
  noActivityHas: {
    top: 878,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    fontSize: FontSize.size_3xs,
    left: 149,
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
    height: 38,
    width: 99,
    lineHeight: 25,
    top: 0,
  },
  amLayout: {
    height: 38,
    width: 99,
  },
  am2: {
    lineHeight: 10,
    top: 0,
  },
  estimatedDestination: {
    top: 21,
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
  },
  amParent: {
    width: 97,
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
    width: 264,
    height: 44,
    left: 0,
    top: 0,
  },
  scbdJakarta: {
    top: 11,
    left: 19,
    width: 57,
    height: 21,
    fontSize: FontSize.size_5xs,
    color: Color.colorBlack,
    fontWeight: "700",
    lineHeight: 25,
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
    fontSize: FontSize.size_5xs,
    color: Color.colorBlack,
    fontWeight: "700",
  },
  rectangleParent: {
    top: 10,
    left: 99,
    width: 270,
    display: "none",
    height: 44,
    position: "absolute",
  },
  scheduled: {
    top: 7,
    left: 24,
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_xl,
    lineHeight: 25,
  },
  displayChild1: {
    top: 103,
    left: 27,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGoldenrod,
    width: 41,
    height: 24,
    position: "absolute",
  },
  job: {
    top: 102,
    left: 34,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    fontWeight: "700",
    lineHeight: 25,
  },
  lineIcon: {
    top: 77,
    left: 181,
    width: 81,
    height: 5,
    position: "absolute",
  },
  southJakarta: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_3xs,
  },
  scbdSouthJakarta: {
    top: 45,
    left: 104,
  },
  playparqKemangSouthJakartaContainer: {
    top: 37,
    left: 277,
  },
  display: {
    top: 646,
    left: 22,
  },
  openingChild2: {
    top: 907,
    left: -2,
    borderColor: Color.colorGray_600,
    borderTopWidth: 2,
    width: 432,
    height: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  openingChild3: {
    top: 891,
    left: 214,
    width: 12,
    height: 27,
    position: "absolute",
  },
  seeMoreSchedule: {
    top: 868,
    left: 145,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 25,
    position: "absolute",
  },
  openingChild4: {
    top: 805,
    left: 32,
    borderRadius: 9,
    backgroundColor: Color.colorMediumspringgreen,
    width: 367,
    height: 45,
    position: "absolute",
  },
  pay3211: {
    top: 810,
    fontSize: FontSize.size_6xl,
    color: Color.colorBlack,
    fontWeight: "700",
    lineHeight: 25,
    left: 149,
  },
  openingChild5: {
    top: 657,
    left: 337,
    backgroundColor: Color.colorSnow_200,
    width: 53,
    height: 18,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  details: {
    top: 653,
    left: 345,
    color: Color.colorSkyblue_200,
    lineHeight: 25,
    fontSize: FontSize.size_3xs,
  },
  opening: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Opening;
