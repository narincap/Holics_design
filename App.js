const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import WhenUsingACar from "./screens/WhenUsingACar";
import DetailsWhenItsRun from "./screens/DetailsWhenItsRun";
import EndOfTheTrip from "./screens/EndOfTheTrip";
import WhenUsingACar1 from "./screens/WhenUsingACar1";
import WhenUsingATrainOrBus from "./screens/WhenUsingATrainOrBus";
import NewAccount from "./screens/NewAccount";
import Authentication from "./screens/Authentication";
import SelectPayment from "./screens/SelectPayment";
import SelectPayment1 from "./screens/SelectPayment1";
import PaymentOption from "./screens/PaymentOption";
import DetailInformation from "./screens/DetailInformation";
import Routine2 from "./screens/Routine2";
import Routine1 from "./screens/Routine1";
import Opening from "./screens/Opening";
import IntroPage from "./screens/IntroPage";
import IntroPage1 from "./screens/IntroPage1";
import IntroPage2 from "./screens/IntroPage2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="WhenUsingACar"
              component={WhenUsingACar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailsWhenItsRun"
              component={DetailsWhenItsRun}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EndOfTheTrip"
              component={EndOfTheTrip}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WhenUsingACar1"
              component={WhenUsingACar1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WhenUsingATrainOrBus"
              component={WhenUsingATrainOrBus}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewAccount"
              component={NewAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Authentication"
              component={Authentication}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectPayment"
              component={SelectPayment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectPayment1"
              component={SelectPayment1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentOption"
              component={PaymentOption}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailInformation"
              component={DetailInformation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Routine2"
              component={Routine2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Routine1"
              component={Routine1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Opening"
              component={Opening}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IntroPage"
              component={IntroPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IntroPage1"
              component={IntroPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IntroPage2"
              component={IntroPage2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
