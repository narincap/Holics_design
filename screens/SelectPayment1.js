import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SelectPayment1 = () => {
  return (
    <View style={styles.selectPayment}>
      <Image
        style={[styles.mapIcon, styles.mapIconPosition]}
        resizeMode="cover"
        source={require("../assets/map2.png")}
      />
      <View style={[styles.selectPaymentChild, styles.lineIconLayout]} />
      <View style={[styles.selectPaymentItem, styles.selectBorder]} />
      <View style={[styles.selectPaymentInner, styles.selectBorder]} />
      <View style={[styles.rectangleView, styles.mapIconPosition]} />
      <Text style={[styles.paymentMethod, styles.promoCodeTypo]}>
        Payment Method
      </Text>
      <View style={[styles.selectPaymentChild1, styles.selectChildLayout3]} />
      <View style={[styles.selectPaymentChild2, styles.selectChildLayout3]} />
      <View style={[styles.selectPaymentChild3, styles.selectChildLayout3]} />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <Text style={[styles.text3, styles.textTypo]}>4</Text>
      <Text style={[styles.selectPayment1, styles.requestATripTypo]}>
        Select Payment
      </Text>
      <Image
        style={styles.refreshIcon}
        resizeMode="cover"
        source={require("../assets/refresh.png")}
      />
      <Image
        style={styles.closeIcon}
        resizeMode="cover"
        source={require("../assets/close1.png")}
      />
      <View style={[styles.selectPaymentChild4, styles.selectChildLayout2]} />
      <Text style={[styles.requestATrip, styles.requestATripTypo]}>
        Request a Trip
      </Text>
      <View style={[styles.selectPaymentChild5, styles.selectChildLayout2]} />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-22.png")}
      />
      <View style={[styles.selectPaymentChild6, styles.selectChildLayout1]} />
      <View style={[styles.selectPaymentChild7, styles.selectChildLayout]} />
      <Image
        style={[styles.dollarCoinIcon, styles.ellipseParentPosition]}
        resizeMode="cover"
        source={require("../assets/dollar-coin.png")}
      />
      <Text style={[styles.cashPayment, styles.masterCardTypo]}>
        Cash Payment
      </Text>
      <Text style={[styles.cashPayment1, styles.text4Typo]}>Cash Payment</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-30.png")}
      />
      <Image
        style={[styles.doneIcon, styles.doneIconLayout]}
        resizeMode="cover"
        source={require("../assets/done.png")}
      />
      <View style={[styles.selectPaymentChild8, styles.selectChildLayout1]} />
      <View style={[styles.selectPaymentChild9, styles.selectChildLayout]} />
      <Text style={[styles.masterCard, styles.masterCardTypo]}>
        Master Card
      </Text>
      <Text style={[styles.text4, styles.text4Typo]}>**** **** **** 9182</Text>
      <Image
        style={[styles.selectPaymentChild10, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Image
        style={[styles.doneIcon1, styles.doneIconLayout]}
        resizeMode="cover"
        source={require("../assets/done.png")}
      />
      <View style={[styles.ellipseParent, styles.ellipseParentPosition]}>
        <Image
          style={styles.frameLayout}
          resizeMode="cover"
          source={require("../assets/ellipse-33.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-32.png")}
        />
      </View>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <Text style={[styles.promoCode, styles.promoCodeTypo]}>Promo Code</Text>
      <View style={[styles.selectPaymentChild11, styles.lineViewBorder]} />
      <Text style={[styles.addPromoCode, styles.addTypo]}>ADD PROMO CODE</Text>
      <Text style={[styles.addNew, styles.addTypo]}>ADD NEW</Text>
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
  selectBorder: {
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorWhite,
    top: 316,
    borderStyle: "dashed",
    position: "absolute",
  },
  promoCodeTypo: {
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: 24,
    position: "absolute",
  },
  selectChildLayout3: {
    height: 35,
    width: 36,
    borderRadius: Border.br_3xs,
    top: 298,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
  },
  requestATripTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  selectChildLayout2: {
    height: 86,
    top: 788,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  selectChildLayout1: {
    height: 79,
    width: 379,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_mini,
    left: 25,
    position: "absolute",
  },
  selectChildLayout: {
    height: 58,
    left: 48,
    width: 58,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  ellipseParentPosition: {
    left: 55,
    position: "absolute",
  },
  masterCardTypo: {
    left: 120,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 25,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  text4Typo: {
    color: Color.colorGray_500,
    fontSize: FontSize.size_3xs,
    left: 120,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 25,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 26,
    width: 26,
    left: 360,
    position: "absolute",
  },
  doneIconLayout: {
    height: 13,
    width: 13,
    left: 366,
    position: "absolute",
  },
  frameLayout: {
    height: 27,
    width: 27,
  },
  lineViewBorder: {
    borderColor: Color.colorGray_500,
    position: "absolute",
  },
  addTypo: {
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  mapIcon: {
    top: 0,
    height: 908,
    width: 437,
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
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorWhite,
    top: 316,
  },
  selectPaymentInner: {
    left: 177,
    width: 60,
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorWhite,
    top: 316,
  },
  rectangleView: {
    top: 366,
    borderRadius: Border.br_6xl,
    width: 430,
    height: 566,
    backgroundColor: Color.colorWhite,
  },
  paymentMethod: {
    color: Color.colorWhite,
    top: 237,
  },
  selectPaymentChild1: {
    backgroundColor: Color.colorMediumspringgreen,
    left: 48,
    height: 35,
    width: 36,
    borderRadius: Border.br_3xs,
    top: 298,
  },
  selectPaymentChild2: {
    left: 141,
    backgroundColor: Color.colorGoldenrod,
    height: 35,
    width: 36,
    borderRadius: Border.br_3xs,
    top: 298,
  },
  selectPaymentChild3: {
    left: 236,
    backgroundColor: Color.colorSkyblue_200,
    height: 35,
    width: 36,
    borderRadius: Border.br_3xs,
    top: 298,
  },
  text: {
    left: 60,
    color: Color.colorBlack,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  text1: {
    left: 151,
    color: Color.colorBlack,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  text2: {
    left: 246,
    color: Color.colorBlack,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  text3: {
    left: 342,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
    color: Color.colorWhite,
  },
  selectPayment1: {
    top: 407,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
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
    top: 237,
    position: "absolute",
  },
  selectPaymentChild4: {
    left: 122,
    width: 281,
    backgroundColor: Color.colorBlack,
  },
  requestATrip: {
    top: 818,
    left: 186,
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  selectPaymentChild5: {
    width: 81,
    left: 24,
    backgroundColor: Color.colorWhite,
  },
  lineIcon: {
    top: 822,
    left: 42,
    width: 45,
    height: 17,
  },
  selectPaymentChild6: {
    top: 450,
  },
  selectPaymentChild7: {
    top: 461,
    backgroundColor: Color.colorBlack,
  },
  dollarCoinIcon: {
    top: 468,
    width: 43,
    height: 43,
  },
  cashPayment: {
    top: 465,
  },
  cashPayment1: {
    top: 486,
  },
  ellipseIcon: {
    top: 478,
  },
  doneIcon: {
    top: 484,
  },
  selectPaymentChild8: {
    top: 547,
  },
  selectPaymentChild9: {
    top: 558,
    backgroundColor: Color.colorGray_100,
  },
  masterCard: {
    top: 562,
  },
  text4: {
    top: 583,
  },
  selectPaymentChild10: {
    top: 575,
  },
  doneIcon1: {
    top: 581,
  },
  frameItem: {
    marginLeft: -11,
  },
  ellipseParent: {
    top: 574,
    flexDirection: "row",
  },
  lineView: {
    top: 662,
    borderStyle: "solid",
    width: 380,
    left: 25,
    borderColor: Color.colorGray_500,
    height: 1,
    borderTopWidth: 1,
  },
  promoCode: {
    top: 670,
    color: Color.colorBlack,
  },
  selectPaymentChild11: {
    top: 698,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    width: 376,
    height: 54,
    left: 24,
    borderColor: Color.colorGray_500,
    borderStyle: "dashed",
  },
  addPromoCode: {
    top: 713,
    left: 160,
  },
  addNew: {
    left: 339,
    top: 407,
  },
  selectPayment: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SelectPayment1;
