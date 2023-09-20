import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const DetailInformation = () => {
  return (
    <View style={styles.detailInformation}>
      <Image
        style={styles.mapIcon}
        resizeMode="cover"
        source={require("../assets/map2.png")}
      />
      <View
        style={[styles.detailInformationChild, styles.detailChildLayout3]}
      />
      <View style={styles.detailInformationItem} />
      <Text
        style={[styles.sindonIMagelangContainer, styles.containerPosition1]}
      >
        <Text style={[styles.sindonI, styles.sindonITypo]}>{`Sindon I, `}</Text>
        <Text style={styles.magelangCentralJava}>
          Magelang, Central Java, Indonesia
        </Text>
      </Text>
      <Text style={styles.detailInformation1}>Detail Information</Text>
      <View
        style={[styles.detailInformationInner, styles.rectangleViewLayout]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <Text style={[styles.detailInformation2, styles.proceedTheOrderTypo]}>
        Detail Information
      </Text>
      <Image
        style={[styles.locationIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/location.png")}
      />
      <Image
        style={[styles.lineIcon, styles.detailChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-221.png")}
      />
      <Image
        style={[styles.detailInformationChild1, styles.detailChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-23.png")}
      />
      <Image
        style={[styles.detailInformationChild2, styles.detailChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-24.png")}
      />
      <Image
        style={[styles.detailInformationChild3, styles.detailChildLayout2]}
        resizeMode="cover"
        source={require("../assets/line-221.png")}
      />
      <Image
        style={[styles.walkingIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/walking2.png")}
      />
      <Image
        style={[styles.trainIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/train.png")}
      />
      <Image
        style={[styles.busIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/bus.png")}
      />
      <Image
        style={[styles.walkingIcon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/walking2.png")}
      />
      <View style={styles.lineView} />
      <View style={styles.mapMarkerParent}>
        <Image
          style={[styles.mapMarkerIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/map-marker.png")}
        />
        <Image
          style={[styles.timerIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/timer.png")}
        />
        <Image
          style={[styles.stackOfMoney, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/stack-of-money.png")}
        />
        <Text style={[styles.km, styles.kmTypo]}>21 km</Text>
        <Text style={[styles.mins, styles.kmTypo]}>62 mins</Text>
      </View>
      <View
        style={[styles.detailInformationChild4, styles.detailChildLayout1]}
      />
      <Text style={[styles.proceedTheOrder, styles.proceedTheOrderTypo]}>
        Proceed the order
      </Text>
      <View
        style={[styles.detailInformationChild5, styles.detailChildLayout1]}
      />
      <Image
        style={[styles.detailInformationChild6, styles.detailChildLayout3]}
        resizeMode="cover"
        source={require("../assets/line-22.png")}
      />
      <Text
        style={[styles.adiSoemarmoAirportContainer, styles.containerPosition]}
      >
        <Text>
          <Text style={[styles.sindonI, styles.sindonITypo]}>
            Adi soemarmo Airport
          </Text>
          <Text
            style={styles.magelangCentralJava}
          >{`, Adi Soemarmo Int'l Airport, Jalan Bandara Adi `}</Text>
        </Text>
        <Text style={styles.magelangCentralJava}>
          Sumarmo, Kec. Ngemplak, Kota Surakarta, Jawa Tengah 57108, Indonesia
        </Text>
      </Text>
      <Text
        style={[styles.smaPraditaDirgantaraContainer, styles.containerPosition]}
      >
        <Text>
          <Text style={[styles.sindonI, styles.sindonITypo]}>
            SMA Pradita Dirgantara
          </Text>
          <Text
            style={styles.magelangCentralJava}
          >{`, Jl. Cendrawasih, Tanjungsari, Ngesrep, Boyolali `}</Text>
        </Text>
        <Text style={styles.magelangCentralJava}>
          Regency, Central Java, Indonesia
        </Text>
      </Text>
      <Text style={[styles.yogyakarta, styles.containerPosition]}>
        Yogyakarta
      </Text>
      <Text
        style={[
          styles.tarunaNusantaraSeniorContainer,
          styles.containerPosition1,
        ]}
      >
        <Text>
          <Text style={[styles.sindonI, styles.sindonITypo]}>
            Taruna Nusantara Senior High School
          </Text>
          <Text
            style={styles.magelangCentralJava}
          >{`, Noyotitan, Banyurojo, Magelang `}</Text>
        </Text>
        <Text style={styles.magelangCentralJava}>
          Regency, Central Java, Indonesia
        </Text>
      </Text>
      <View
        style={[styles.detailInformationChild7, styles.detailChildLayout]}
      />
      <Text style={[styles.text3, styles.textTypo]}>4</Text>
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
      <Text style={[styles.text4, styles.kmTypo]}>$32.11</Text>
      <Text style={[styles.mins1, styles.minsTypo]}>7 mins</Text>
      <Text style={[styles.mins2, styles.minsTypo]}>33 mins</Text>
      <Text style={[styles.mins3, styles.minsTypo]}>20 mins</Text>
      <Text style={[styles.mins4, styles.minsTypo]}>2 mins</Text>
      <View
        style={[styles.detailInformationChild8, styles.detailChildLayout]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailChildLayout3: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  containerPosition1: {
    textAlign: "left",
    lineHeight: 12,
    left: 86,
    color: Color.colorBlack,
    position: "absolute",
  },
  sindonITypo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  rectangleViewLayout: {
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
  proceedTheOrderTypo: {
    fontSize: FontSize.size_xl,
    lineHeight: 25,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    height: 31,
    width: 31,
    left: 53,
    position: "absolute",
  },
  detailChildLayout2: {
    width: 5,
    left: 66,
    height: 31,
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  kmTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    lineHeight: 25,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  detailChildLayout1: {
    height: 86,
    top: 788,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  containerPosition: {
    left: 91,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 12,
    position: "absolute",
  },
  detailChildLayout: {
    width: 58,
    borderRadius: 0.001,
    borderColor: Color.colorWhite,
    borderStyle: "dashed",
    top: 316,
    height: 1,
    borderTopWidth: 1,
    position: "absolute",
  },
  minsTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 12,
    position: "absolute",
  },
  mapIcon: {
    height: 907,
    width: 437,
    left: 0,
    top: 0,
    position: "absolute",
  },
  detailInformationChild: {
    top: 218,
    left: -4,
    height: 511,
    backgroundColor: Color.colorBlack,
    width: 437,
  },
  detailInformationItem: {
    top: 366,
    left: 1,
    borderRadius: Border.br_6xl,
    width: 430,
    height: 566,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  sindonI: {
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
  },
  magelangCentralJava: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_5xs,
  },
  sindonIMagelangContainer: {
    top: 631,
  },
  detailInformation1: {
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    lineHeight: 25,
    left: 25,
    top: 237,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  detailInformationInner: {
    backgroundColor: Color.colorMediumspringgreen,
    left: 49,
    width: 36,
    borderRadius: Border.br_3xs,
    top: 298,
  },
  rectangleView: {
    left: 142,
    backgroundColor: Color.colorGoldenrod,
    width: 36,
    borderRadius: Border.br_3xs,
    top: 298,
  },
  text: {
    left: 61,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontWeight: "800",
    lineHeight: 25,
    textAlign: "left",
    position: "absolute",
    color: Color.colorBlack,
  },
  text1: {
    left: 152,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontWeight: "800",
    lineHeight: 25,
    textAlign: "left",
    position: "absolute",
    color: Color.colorBlack,
  },
  text2: {
    left: 247,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontWeight: "800",
    lineHeight: 25,
    textAlign: "left",
    position: "absolute",
    color: Color.colorWhite,
  },
  detailInformation2: {
    top: 407,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    left: 25,
    color: Color.colorBlack,
  },
  locationIcon: {
    top: 688,
  },
  lineIcon: {
    top: 476,
  },
  detailInformationChild1: {
    top: 536,
  },
  detailInformationChild2: {
    top: 598,
  },
  detailInformationChild3: {
    top: 657,
  },
  walkingIcon: {
    top: 448,
  },
  trainIcon: {
    top: 505,
  },
  busIcon: {
    top: 567,
  },
  walkingIcon1: {
    top: 627,
  },
  lineView: {
    top: 738,
    left: 33,
    borderStyle: "solid",
    borderColor: Color.colorGray_500,
    width: 365,
    height: 1,
    borderTopWidth: 1,
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
    top: 747,
    left: 49,
    position: "absolute",
  },
  detailInformationChild4: {
    left: 123,
    width: 281,
    backgroundColor: Color.colorBlack,
  },
  proceedTheOrder: {
    top: 818,
    left: 169,
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  detailInformationChild5: {
    width: 81,
    left: 25,
    backgroundColor: Color.colorWhite,
  },
  detailInformationChild6: {
    top: 822,
    left: 43,
    width: 45,
    height: 17,
  },
  adiSoemarmoAirportContainer: {
    top: 508,
  },
  smaPraditaDirgantaraContainer: {
    top: 451,
  },
  yogyakarta: {
    top: 577,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
  },
  tarunaNusantaraSeniorContainer: {
    top: 691,
  },
  detailInformationChild7: {
    left: 85,
  },
  text3: {
    left: 342,
    fontSize: FontSize.size_6xl,
    top: 303,
    fontWeight: "800",
    lineHeight: 25,
    textAlign: "left",
    position: "absolute",
    color: Color.colorWhite,
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
  text4: {
    left: 328,
    top: 747,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  mins1: {
    top: 486,
    left: 28,
  },
  mins2: {
    top: 543,
    left: 25,
  },
  mins3: {
    top: 608,
    left: 25,
  },
  mins4: {
    top: 664,
    left: 31,
  },
  detailInformationChild8: {
    left: 554,
  },
  detailInformation: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default DetailInformation;
