import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DetailsWhenItsRun = () => {
  return (
    <View style={styles.detailsWhenItsRun}>
      <Image
        style={[styles.mapIcon, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/map1.png")}
      />
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
        <Text style={[styles.scheduled, styles.backTypo]}>Scheduled</Text>
        <View style={styles.rectangleView} />
        <Text style={[styles.job, styles.jakartaTypo]}>Job</Text>
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
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
        <Text style={[styles.geloraBungkarno, styles.dukuhAtas2Typo]}>
          Gelora Bungkarno
        </Text>
        <Text
          style={[styles.dukuhAtas2, styles.dukuhAtas2Typo]}
        >{`Dukuh Atas 2 `}</Text>
        <Text style={styles.kalijati}>Kalijati</Text>
      </View>
      <View style={styles.detailsWhenItsRunChild} />
      <Image
        style={[styles.walkingIcon, styles.walkingIconLayout]}
        resizeMode="cover"
        source={require("../assets/walking.png")}
      />
      <Image
        style={[styles.walkingIcon1, styles.walkingIconLayout]}
        resizeMode="cover"
        source={require("../assets/walking.png")}
      />
      <View style={[styles.detailsWhenItsRunItem, styles.detailsLayout]} />
      <View style={[styles.detailsWhenItsRunInner, styles.detailsLayout]} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.detailsWhenItsRunChild1, styles.lineViewLayout]} />
      <Image
        style={[styles.train5122Icon, styles.walkingIconLayout]}
        resizeMode="cover"
        source={require("../assets/train512-2.png")}
      />
      <Image
        style={[styles.train5123Icon, styles.walkingIconLayout]}
        resizeMode="cover"
        source={require("../assets/train512-2.png")}
      />
      <Text style={[styles.am4, styles.amTypo]}>
        <Text style={styles.text2}>7:30</Text>
        <Text style={styles.am5}>am</Text>
      </Text>
      <Text style={[styles.am6, styles.am6Position]}>
        <Text style={styles.text2}>7:45</Text>
        <Text style={styles.am5}>am</Text>
      </Text>
      <Text style={[styles.am8, styles.am6Position]}>
        <Text style={styles.text2}>8:06</Text>
        <Text style={styles.am5}>am</Text>
      </Text>
      <Text style={[styles.am10, styles.am6Position]}>
        <Text style={styles.text2}>8:26</Text>
        <Text style={styles.am5}>am</Text>
      </Text>
      <Text style={[styles.am12, styles.am6Position]}>
        <Text style={styles.text2}>8:32</Text>
        <Text style={styles.am5}>am</Text>
      </Text>
      <Text style={[styles.scbdJlJenderalContainer, styles.containerPosition]}>
        <Text>
          <Text style={[styles.scbd1, styles.scbdTypo]}>{`Scbd
`}</Text>
          <Text
            style={styles.jlJenderalSudirman}
          >{`Jl. Jenderal Sudirman Blok Lot `}</Text>
        </Text>
        <Text style={styles.jlJenderalSudirman}>
          11 No.Kav 58, RT.5/RW.3, Senayan, Kebayoran Baru, South Jakarta City,
          Jakarta 12190
        </Text>
      </Text>
      <Text
        style={[styles.playparqKemangJlContainer, styles.containerPosition]}
      >
        <Text style={[styles.scbd1, styles.scbdTypo]}>{`Playparq Kemang
`}</Text>
        <Text style={styles.jlJenderalSudirman}>
          Jl. Kemang Timur No.72, RT.9/RW.4, Bangka, Mampang Prapatan, South
          Jakarta City, Jakarta 12730
        </Text>
      </Text>
      <Text style={[styles.walkAbout15Container, styles.containerPosition]}>
        <Text style={[styles.walk, styles.walkTypo]}>{`Walk
`}</Text>
        <Text style={styles.jlJenderalSudirman}>About 15 minutes, 1.1 km</Text>
      </Text>
      <Text style={[styles.blockMContainer, styles.containerPosition]}>
        <Text
          style={[styles.walk, styles.walkTypo]}
        >{`Block M - Kali Besar Barat
`}</Text>
        <Text style={styles.jlJenderalSudirman}>About 21 minutes</Text>
      </Text>
      <Text style={[styles.dukuhAtas2Container, styles.containerPosition]}>
        <Text style={[styles.walk, styles.walkTypo]}>{`Dukuh Atas 2 - Ragunan
`}</Text>
        <Text style={styles.jlJenderalSudirman}>About 20 minutes</Text>
      </Text>
      <Text style={[styles.walkAbout6Container, styles.containerPosition]}>
        <Text style={[styles.walk, styles.walkTypo]}>{`Walk
`}</Text>
        <Text style={styles.jlJenderalSudirman}>About 6 minutes, 800 m</Text>
      </Text>
      <View
        style={[styles.detailsWhenItsRunChild2, styles.detailsChildLayout]}
      />
      <View
        style={[styles.detailsWhenItsRunChild3, styles.detailsChildLayout]}
      />
      <View
        style={[styles.detailsWhenItsRunChild4, styles.detailsChildLayout]}
      />
      <View
        style={[styles.detailsWhenItsRunChild5, styles.detailsChildLayout]}
      />
      <Image
        style={styles.detailsWhenItsRunChild6}
        resizeMode="cover"
        source={require("../assets/line-49.png")}
      />
      <View
        style={[styles.detailsWhenItsRunChild7, styles.detailsChildLayout]}
      />
      <View
        style={[styles.detailsWhenItsRunChild8, styles.detailsChildLayout]}
      />
      <View
        style={[styles.detailsWhenItsRunChild9, styles.detailsChildLayout]}
      />
      <Text style={[styles.cost3011, styles.am6Position]}>
        <Text style={styles.scbdTypo}>{`Cost: `}</Text>
        <Text style={styles.walkTypo}>{`$30.11
`}</Text>
      </Text>
      <Image
        style={[styles.addressIcon, styles.walkingIconLayout]}
        resizeMode="cover"
        source={require("../assets/address.png")}
      />
      <Image
        style={[styles.forwardButtonIcon, styles.forwardIconLayout]}
        resizeMode="cover"
        source={require("../assets/forward-button.png")}
      />
      <Image
        style={[styles.forwardButtonIcon1, styles.forwardIconLayout]}
        resizeMode="cover"
        source={require("../assets/forward-button.png")}
      />
      <Image
        style={[styles.forwardButtonIcon2, styles.forwardIconLayout]}
        resizeMode="cover"
        source={require("../assets/forward-button.png")}
      />
      <Image
        style={[styles.forwardButtonIcon3, styles.forwardIconLayout]}
        resizeMode="cover"
        source={require("../assets/forward-button.png")}
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
    height: 769,
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
    position: "absolute",
  },
  groupChildLayout1: {
    height: 44,
    position: "absolute",
  },
  jakartaTypo: {
    color: Color.colorBlack,
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
  backTypo: {
    top: 43,
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
  dukuhAtas2Typo: {
    width: 252,
    left: 111,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 10,
    position: "absolute",
  },
  walkingIconLayout: {
    width: 38,
    height: 38,
    position: "absolute",
  },
  detailsLayout: {
    height: 62,
    width: 2,
    borderRightWidth: 2,
    borderRadius: 0.001,
    borderStyle: "dashed",
    left: 105,
    position: "absolute",
  },
  lineViewLayout: {
    height: 63,
    width: 3,
    borderRightWidth: 3,
    borderColor: Color.colorMediumspringgreen,
    left: 105,
    borderStyle: "solid",
    position: "absolute",
  },
  am6Position: {
    left: 40,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  containerPosition: {
    left: 132,
    width: 252,
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 10,
    position: "absolute",
  },
  walkTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  detailsChildLayout: {
    width: 256,
    borderTopWidth: 0.5,
    left: 127,
    height: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  forwardIconLayout: {
    height: 30,
    width: 30,
    left: 348,
    position: "absolute",
  },
  mapIcon: {
    width: 437,
    height: 1061,
    left: 0,
    position: "absolute",
  },
  displayChild: {
    borderRadius: Border.br_2xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorBlack,
  },
  departure: {
    top: 28,
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    left: 0,
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
    left: 0,
    top: 0,
  },
  amLayout: {
    height: 38,
    width: 99,
  },
  am2: {
    lineHeight: 10,
    left: 0,
    top: 0,
  },
  estimatedDestination: {
    top: 21,
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    left: 0,
  },
  amParent: {
    width: 97,
    height: 31,
    marginLeft: 74,
  },
  displayInner: {
    top: 124,
    left: 93,
    position: "absolute",
  },
  displayItem: {
    top: 78,
    left: 20,
    width: 56,
    height: 56,
    position: "absolute",
  },
  image1Icon: {
    top: 87,
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
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
  },
  rectangleParent: {
    top: 46,
    left: 99,
    width: 270,
    display: "none",
  },
  scheduled: {
    left: 24,
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_xl,
  },
  rectangleView: {
    top: 139,
    left: 27,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGoldenrod,
    width: 41,
    height: 24,
    position: "absolute",
  },
  job: {
    top: 138,
    left: 34,
    fontSize: FontSize.size_sm,
    lineHeight: 25,
  },
  lineIcon: {
    top: 113,
    left: 181,
    width: 81,
    height: 5,
    position: "absolute",
  },
  scbd: {
    fontSize: FontSize.size_mini,
  },
  southJakarta: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_3xs,
  },
  scbdSouthJakarta: {
    top: 81,
    left: 104,
  },
  playparqKemangSouthJakartaContainer: {
    top: 73,
    left: 277,
  },
  back: {
    left: 319,
    color: Color.colorSkyblue_200,
    fontSize: FontSize.size_xs,
  },
  geloraBungkarno: {
    top: 312,
  },
  dukuhAtas2: {
    top: 417,
  },
  kalijati: {
    top: 522,
    width: 252,
    left: 111,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 10,
    position: "absolute",
  },
  display: {
    top: 74,
    left: 21,
  },
  detailsWhenItsRunChild: {
    top: 258,
    left: 37,
    borderTopWidth: 1,
    width: 358,
    height: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  walkingIcon: {
    top: 266,
    left: 89,
    width: 38,
  },
  walkingIcon1: {
    top: 582,
    left: 89,
    width: 38,
  },
  detailsWhenItsRunItem: {
    top: 303,
    borderColor: Color.colorMediumspringgreen,
    height: 62,
    width: 2,
    borderRightWidth: 2,
    borderRadius: 0.001,
    borderStyle: "dashed",
    left: 105,
  },
  detailsWhenItsRunInner: {
    top: 619,
    height: 62,
    width: 2,
    borderRightWidth: 2,
    borderRadius: 0.001,
    borderStyle: "dashed",
    left: 105,
    borderColor: Color.colorWhite,
  },
  lineView: {
    top: 409,
  },
  detailsWhenItsRunChild1: {
    top: 518,
  },
  train5122Icon: {
    top: 372,
    left: 89,
    width: 38,
  },
  train5123Icon: {
    top: 478,
    left: 89,
    width: 38,
  },
  text2: {
    fontSize: FontSize.size_mini,
  },
  am5: {
    fontSize: FontSize.size_3xs,
  },
  am4: {
    top: 274,
    left: 41,
    lineHeight: 25,
    height: 38,
    width: 99,
  },
  am6: {
    top: 380,
    lineHeight: 25,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    height: 38,
    width: 99,
  },
  am8: {
    top: 483,
    lineHeight: 25,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    height: 38,
    width: 99,
  },
  am10: {
    top: 583,
    lineHeight: 25,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    height: 38,
    width: 99,
  },
  am12: {
    top: 688,
    lineHeight: 25,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    height: 38,
    width: 99,
  },
  scbd1: {
    fontSize: FontSize.size_xs,
  },
  jlJenderalSudirman: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_5xs,
  },
  scbdJlJenderalContainer: {
    top: 265,
  },
  playparqKemangJlContainer: {
    top: 688,
  },
  walk: {
    fontSize: FontSize.size_3xs,
  },
  walkAbout15Container: {
    top: 328,
  },
  blockMContainer: {
    top: 434,
  },
  dukuhAtas2Container: {
    top: 540,
  },
  walkAbout6Container: {
    top: 641,
  },
  detailsWhenItsRunChild2: {
    top: 310,
  },
  detailsWhenItsRunChild3: {
    top: 363,
  },
  detailsWhenItsRunChild4: {
    top: 416,
  },
  detailsWhenItsRunChild5: {
    top: 469,
  },
  detailsWhenItsRunChild6: {
    width: 255,
    left: 127,
    height: 1,
    top: 522,
    position: "absolute",
  },
  detailsWhenItsRunChild7: {
    top: 575,
  },
  detailsWhenItsRunChild8: {
    top: 628,
  },
  detailsWhenItsRunChild9: {
    top: 681,
  },
  cost3011: {
    top: 799,
    fontSize: FontSize.size_xs,
    lineHeight: 10,
  },
  addressIcon: {
    top: 684,
    left: 87,
  },
  forwardButtonIcon: {
    top: 321,
  },
  forwardButtonIcon1: {
    top: 427,
  },
  forwardButtonIcon2: {
    top: 533,
  },
  forwardButtonIcon3: {
    top: 639,
  },
  detailsWhenItsRun: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});

export default DetailsWhenItsRun;
