import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const PaymentOption = () => {
  return (
    <View style={styles.paymentOption}>
      <Image
        style={[styles.mapIcon, styles.mapIconPosition]}
        resizeMode="cover"
        source={require("../assets/map2.png")}
      />
      <View style={[styles.paymentOptionChild, styles.lineIconLayout]} />
      <View style={[styles.paymentOptionItem, styles.mapIconPosition]} />
      <Text style={[styles.paymentMethod, styles.promoCodeTypo]}>
        Payment Method
      </Text>
      <View style={[styles.paymentOptionInner, styles.paymentLayout]} />
      <View style={[styles.rectangleView, styles.paymentLayout]} />
      <View style={[styles.paymentOptionChild1, styles.paymentLayout]} />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <Text style={[styles.text3, styles.textTypo]}>4</Text>
      <Text style={[styles.selectPayment, styles.requestATripTypo]}>
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
      <View style={[styles.paymentOptionChild2, styles.paymentChildLayout2]} />
      <Text style={[styles.requestATrip, styles.requestATripTypo]}>
        Request a Trip
      </Text>
      <View style={[styles.paymentOptionChild3, styles.paymentChildLayout2]} />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-22.png")}
      />
      <View style={[styles.paymentOptionChild4, styles.paymentChildLayout1]} />
      <View style={[styles.paymentOptionChild5, styles.paymentChildLayout]} />
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
        source={require("../assets/ellipse-31.png")}
      />
      <Image
        style={[styles.doneIcon, styles.doneIconLayout]}
        resizeMode="cover"
        source={require("../assets/done.png")}
      />
      <View style={[styles.paymentOptionChild6, styles.paymentChildLayout1]} />
      <View style={[styles.paymentOptionChild7, styles.paymentChildLayout]} />
      <Text style={[styles.masterCard, styles.masterCardTypo]}>
        Master Card
      </Text>
      <Text style={[styles.text4, styles.text4Typo]}>**** **** **** 9182</Text>
      <Image
        style={[styles.paymentOptionChild8, styles.ellipseIconLayout]}
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
      <View style={styles.lineView} />
      <Text style={[styles.promoCode, styles.promoCodeTypo]}>Promo Code</Text>
      <View style={styles.paymentOptionChild9} />
      <Text style={[styles.addPromoCode, styles.addTypo]}>ADD PROMO CODE</Text>
      <Text style={[styles.addNew, styles.addTypo]}>ADD NEW</Text>
      <View style={[styles.paymentOptionChild10, styles.paymentChildBorder]} />
      <View style={[styles.paymentOptionChild11, styles.paymentChildBorder]} />
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
  promoCodeTypo: {
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: 24,
    position: "absolute",
  },
  paymentLayout: {
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
  paymentChildLayout2: {
    height: 86,
    top: 788,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  paymentChildLayout1: {
    height: 79,
    width: 379,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_mini,
    left: 25,
    position: "absolute",
  },
  paymentChildLayout: {
    height: 58,
    width: 58,
    left: 48,
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
  addTypo: {
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    textAlign: "left",
    lineHeight: 25,
    position: "absolute",
  },
  paymentChildBorder: {
    borderRadius: 0.001,
    borderColor: Color.colorWhite,
    top: 316,
    borderStyle: "dashed",
    height: 1,
    borderTopWidth: 1,
    position: "absolute",
  },
  mapIcon: {
    top: 0,
    height: 908,
    width: 437,
  },
  paymentOptionChild: {
    top: 218,
    left: -5,
    height: 511,
    backgroundColor: Color.colorBlack,
    width: 437,
  },
  paymentOptionItem: {
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
  paymentOptionInner: {
    backgroundColor: Color.colorMediumspringgreen,
    left: 48,
    width: 36,
    borderRadius: Border.br_3xs,
    top: 298,
  },
  rectangleView: {
    left: 141,
    backgroundColor: Color.colorGoldenrod,
    width: 36,
    borderRadius: Border.br_3xs,
    top: 298,
  },
  paymentOptionChild1: {
    left: 236,
    backgroundColor: Color.colorSkyblue_200,
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
  selectPayment: {
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
  paymentOptionChild2: {
    left: 122,
    width: 281,
    backgroundColor: Color.colorBlack,
  },
  requestATrip: {
    top: 818,
    left: 187,
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  paymentOptionChild3: {
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
  paymentOptionChild4: {
    top: 450,
  },
  paymentOptionChild5: {
    top: 461,
    backgroundColor: "#c9c9c9",
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
  paymentOptionChild6: {
    top: 547,
  },
  paymentOptionChild7: {
    top: 558,
    backgroundColor: Color.colorGray_100,
  },
  masterCard: {
    top: 562,
  },
  text4: {
    top: 583,
  },
  paymentOptionChild8: {
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
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_500,
    left: 25,
    position: "absolute",
  },
  promoCode: {
    top: 670,
    color: Color.colorBlack,
  },
  paymentOptionChild9: {
    top: 698,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    width: 376,
    height: 54,
    borderStyle: "dashed",
    borderColor: Color.colorGray_500,
    left: 24,
    position: "absolute",
  },
  addPromoCode: {
    top: 713,
    left: 160,
  },
  addNew: {
    left: 339,
    top: 407,
  },
  paymentOptionChild10: {
    left: 84,
    width: 58,
    borderRadius: 0.001,
    borderColor: Color.colorWhite,
    top: 316,
  },
  paymentOptionChild11: {
    left: 177,
    width: 60,
  },
  paymentOption: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default PaymentOption;
