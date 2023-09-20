import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SelectPayment = () => {
  return (
    <View style={styles.selectPayment}>
      <Image
        style={styles.mapIcon}
        resizeMode="cover"
        source={require("../assets/map2.png")}
      />
      <View style={[styles.selectPaymentChild, styles.lineIconLayout]} />
      <View style={[styles.selectPaymentItem, styles.selectLayout]} />
      <View style={[styles.selectPaymentInner, styles.selectLayout]} />
      <View style={[styles.lineView, styles.selectLayout]} />
      <View style={styles.rectangleView} />
      <Image
        style={[styles.ellipseIcon, styles.selectChildLayout4]}
        resizeMode="cover"
        source={require("../assets/ellipse-36.png")}
      />
      <Image
        style={[styles.selectPaymentChild1, styles.selectChildLayout4]}
        resizeMode="cover"
        source={require("../assets/ellipse-38.png")}
      />
      <View style={styles.selectPaymentChild2} />
      <Text style={[styles.routineLabel, styles.routineLabelFlexBox]}>
        Routine label
      </Text>
      <View style={styles.mapMarkerParent}>
        <Image
          style={[styles.mapMarkerIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/map-marker.png")}
        />
        <Image
          style={[styles.timerIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/timer.png")}
        />
        <Image
          style={[styles.stackOfMoney, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/stack-of-money.png")}
        />
        <Text style={[styles.km, styles.kmTypo]}>21 km</Text>
        <Text style={[styles.mins, styles.kmTypo]}>62 mins</Text>
      </View>
      <Text style={[styles.text, styles.kmTypo]}>$32.11</Text>
      <Text style={[styles.bookingConfirmation, styles.scheduleItTypo1]}>
        Booking Confirmation
      </Text>
      <View style={[styles.selectPaymentChild3, styles.selectChildLayout3]} />
      <View style={[styles.selectPaymentChild4, styles.selectChildLayout3]} />
      <View style={[styles.selectPaymentChild5, styles.selectChildLayout3]} />
      <View style={[styles.selectPaymentChild6, styles.selectChildLayout3]} />
      <Text style={[styles.text1, styles.textTypo]}>1</Text>
      <Text style={[styles.text2, styles.textTypo]}>2</Text>
      <Text style={[styles.text3, styles.textTypo]}>3</Text>
      <Text style={[styles.text4, styles.text4Position]}>4</Text>
      <Text style={[styles.bookingConfirmation1, styles.scheduleItTypo]}>
        Booking Confirmation
      </Text>
      <Image
        style={styles.refreshIcon}
        resizeMode="cover"
        source={require("../assets/refresh.png")}
      />
      <Image
        style={[styles.closeIcon, styles.closeIconPosition]}
        resizeMode="cover"
        source={require("../assets/close1.png")}
      />
      <View style={[styles.selectPaymentChild7, styles.selectChildLayout2]} />
      <Text style={[styles.scheduleIt, styles.scheduleItTypo]}>
        Schedule it!
      </Text>
      <View style={[styles.selectPaymentChild8, styles.selectChildLayout2]} />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-22.png")}
      />
      <View style={[styles.selectPaymentChild9, styles.selectChildLayout1]} />
      <View style={[styles.selectPaymentChild10, styles.selectChildLayout1]} />
      <View style={[styles.selectPaymentChild11, styles.childLayout]} />
      <Text style={[styles.scbdJakarta, styles.scbdLayout]}>
        <Text>
          <Text style={styles.scbd}>SCBD,</Text>
          <Text style={styles.text5Typo}>{` `}</Text>
        </Text>
        <Text style={styles.jakarta}>Jakarta</Text>
      </Text>
      <View style={[styles.selectPaymentChild12, styles.mapItemLayout]} />
      <Text style={[styles.playparqKemangJakarta, styles.playparqLayout]}>
        <Text style={styles.scbd}>Playparq Kemang,</Text>
        <Text style={styles.jakarta}>Jakarta</Text>
      </Text>
      <View style={[styles.map, styles.mapLayout]}>
        <Image
          style={[styles.screenshot202309182317131, styles.mapLayout]}
          resizeMode="cover"
          source={require("../assets/screenshot-20230918-231713-1.png")}
        />
        <View style={[styles.mapChild, styles.childLayout]} />
        <Text style={[styles.scbdJakarta1, styles.scbdLayout]}>
          <Text>
            <Text style={styles.scbd}>SCBD,</Text>
            <Text style={styles.text5Typo}>{` `}</Text>
          </Text>
          <Text style={styles.jakarta}>Jakarta</Text>
        </Text>
        <View style={[styles.mapItem, styles.mapItemLayout]} />
        <Text style={[styles.playparqKemangJakarta1, styles.playparqLayout]}>
          <Text style={styles.scbd}>Playparq Kemang,</Text>
          <Text style={styles.jakarta}>Jakarta</Text>
        </Text>
        <Image
          style={styles.mapInner}
          resizeMode="cover"
          source={require("../assets/line-38.png")}
        />
      </View>
      <Image
        style={[styles.selectPaymentChild13, styles.selectChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-37.png")}
      />
      <Image
        style={[styles.image1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[styles.selectPaymentChild14, styles.text4Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-39.png")}
      />
      <Image
        style={[styles.selectPaymentChild15, styles.selectChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-40.png")}
      />
      <View style={[styles.selectPaymentChild16, styles.selectLayout]} />
      <Image
        style={[styles.houseIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/house.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  selectLayout: {
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderStyle: "dashed",
    position: "absolute",
  },
  selectChildLayout4: {
    height: 12,
    width: 12,
  },
  routineLabelFlexBox: {
    textAlign: "left",
    lineHeight: 25,
  },
  iconLayout1: {
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  kmTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 25,
    position: "absolute",
  },
  scheduleItTypo1: {
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  selectChildLayout3: {
    height: 35,
    width: 36,
    top: 298,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
  },
  text4Position: {
    left: 342,
    position: "absolute",
  },
  scheduleItTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  closeIconPosition: {
    top: 237,
    position: "absolute",
  },
  selectChildLayout2: {
    height: 52,
    top: 822,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  selectChildLayout1: {
    width: 380,
    borderColor: Color.colorGray_500,
    left: 29,
    borderStyle: "solid",
    height: 1,
    borderTopWidth: 1,
    position: "absolute",
  },
  childLayout: {
    height: 23,
    width: 42,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  scbdLayout: {
    width: 37,
    lineHeight: 7,
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    height: 12,
    position: "absolute",
  },
  mapItemLayout: {
    width: 83,
    height: 23,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  playparqLayout: {
    height: 13,
    width: 83,
    lineHeight: 7,
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  mapLayout: {
    height: 227,
    width: 365,
    position: "absolute",
  },
  selectChildLayout: {
    height: 48,
    width: 48,
    position: "absolute",
  },
  iconLayout: {
    height: 37,
    width: 37,
    top: 761,
    position: "absolute",
  },
  mapIcon: {
    height: 908,
    width: 437,
    left: 0,
    top: 0,
    position: "absolute",
  },
  selectPaymentChild: {
    top: 218,
    left: -5,
    height: 511,
    backgroundColor: Color.colorBlack,
    width: 437,
  },
  selectPaymentItem: {
    left: 84,
    width: 58,
    borderColor: Color.colorWhite,
    top: 316,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  selectPaymentInner: {
    left: 177,
    width: 60,
    borderColor: Color.colorWhite,
    top: 316,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  lineView: {
    left: 272,
    width: 62,
    borderColor: Color.colorWhite,
    top: 316,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  rectangleView: {
    top: 366,
    borderRadius: Border.br_6xl,
    width: 430,
    height: 566,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  ellipseIcon: {
    top: 421,
    left: 391,
    position: "absolute",
  },
  selectPaymentChild1: {
    top: 793,
    left: 105,
    position: "absolute",
  },
  selectPaymentChild2: {
    top: 406,
    left: 286,
    borderColor: "#bcbcbc",
    borderWidth: 1,
    width: 100,
    height: 27,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod,
    position: "absolute",
  },
  routineLabel: {
    top: 408,
    left: 308,
    color: Color.colorGray_500,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  mapMarkerIcon: {
    left: 0,
  },
  timerIcon: {
    left: 126,
  },
  stackOfMoney: {
    left: 252,
  },
  km: {
    left: 27,
    top: 0,
  },
  mins: {
    left: 153,
    top: 0,
  },
  mapMarkerParent: {
    width: 276,
    height: 24,
    left: 48,
    top: 461,
    position: "absolute",
  },
  text: {
    left: 328,
    top: 461,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  bookingConfirmation: {
    fontSize: FontSize.size_mini,
    left: 24,
    top: 237,
    position: "absolute",
    textAlign: "left",
    lineHeight: 25,
  },
  selectPaymentChild3: {
    backgroundColor: Color.colorMediumspringgreen,
    left: 48,
    height: 35,
    width: 36,
    top: 298,
  },
  selectPaymentChild4: {
    left: 141,
    backgroundColor: Color.colorGoldenrod,
    height: 35,
    width: 36,
    top: 298,
  },
  selectPaymentChild5: {
    left: 236,
    backgroundColor: Color.colorSkyblue_200,
  },
  selectPaymentChild6: {
    left: 333,
    backgroundColor: Color.colorTomato,
  },
  text1: {
    left: 60,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  text2: {
    left: 151,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  text3: {
    left: 246,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  text4: {
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    fontSize: FontSize.size_6xl,
    top: 303,
    textAlign: "left",
    lineHeight: 25,
  },
  bookingConfirmation1: {
    top: 407,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    left: 24,
  },
  refreshIcon: {
    top: 141,
    left: -1067,
    width: 18,
    height: 18,
    position: "absolute",
  },
  closeIcon: {
    left: 390,
    width: 25,
    height: 25,
  },
  selectPaymentChild7: {
    left: 122,
    width: 281,
    backgroundColor: Color.colorBlack,
  },
  scheduleIt: {
    top: 835,
    left: 201,
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  selectPaymentChild8: {
    width: 81,
    left: 24,
    backgroundColor: Color.colorWhite,
  },
  lineIcon: {
    top: 839,
    left: 42,
    width: 45,
    height: 17,
  },
  selectPaymentChild9: {
    top: 448,
  },
  selectPaymentChild10: {
    top: 501,
  },
  selectPaymentChild11: {
    left: 7,
    top: 756,
  },
  scbd: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  text5Typo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  jakarta: {
    fontFamily: FontFamily.montserratRegular,
  },
  scbdJakarta: {
    left: 13,
    top: 761,
    width: 37,
    lineHeight: 7,
  },
  selectPaymentChild12: {
    left: 344,
    top: 757,
  },
  playparqKemangJakarta: {
    top: 762,
    left: 348,
  },
  screenshot202309182317131: {
    borderRadius: 44,
    left: 0,
    top: 0,
  },
  mapChild: {
    top: 36,
    left: 58,
  },
  scbdJakarta1: {
    top: 41,
    left: 64,
  },
  mapItem: {
    top: 193,
    left: 95,
  },
  playparqKemangJakarta1: {
    top: 198,
    left: 99,
  },
  mapInner: {
    top: 54,
    left: 78,
    width: 61,
    height: 134,
    position: "absolute",
  },
  map: {
    top: 519,
    left: 38,
  },
  selectPaymentChild13: {
    left: 54,
    top: 757,
  },
  image1Icon: {
    left: 59,
  },
  selectPaymentChild14: {
    top: 792,
    height: 12,
    width: 12,
  },
  selectPaymentChild15: {
    left: 291,
    top: 756,
  },
  selectPaymentChild16: {
    top: 778,
    left: 128,
    borderColor: Color.colorBlack,
    width: 153,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  houseIcon: {
    left: 296,
  },
  selectPayment: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SelectPayment;
