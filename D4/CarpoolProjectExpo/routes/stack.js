import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserProfilePage from "../pages/UserProfilePage";
import RatingPage from "../pages/RatingPage";

import LegalTermsPage from "../pages/LegalTermsPage";
import OfferRide from "../pages/OfferRide";
import OfferorStage1Page from "../pages/OfferorStage1Page";
import OfferRideConf from "../pages/OfferRideConf";
import RequestRide from "../pages/RequestRide";
import RequestRideConf from "../pages/RequestRideConf";

const pages = {
  LoginPage: {
    screen: LoginPage,
  },
  HomePage: {
    screen: HomePage,
  },
  RegisterPage: {
    screen: RegisterPage,
  },
  UserProfilePage: {
    screen: UserProfilePage,
  },
  RatingPage: {
    screen: RatingPage,
  },
  OfferRidePage: {
    screen: OfferorStage1Page,
  },
  AwaitRideStartPage: {
    screen: OfferRide,
  },
  OfferRideConfirmationPage: {
    screen: OfferRideConf,
  },
  RequestRidePage: {
    screen: RequestRide,
  },
  RequestRideConfirmationPage: {
    screen: RequestRideConf,
  },
  LegalTermsPage: {
    screen: LegalTermsPage,
  },
};

const Stack = createStackNavigator(pages, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default createAppContainer(Stack);
