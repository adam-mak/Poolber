import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserProfilePage from "../pages/UserProfilePage";
import RatingPage from "../pages/RatingPage";

import LegalTermsPage from "../pages/LegalTermsPage";
import OfferRide from "../pages/OfferRide";
import AwaitOfferRide from "../pages/AwaitOfferRide";
import OfferorConfirmation from "../pages/OfferorConfirmation";
import RequestRide from "../pages/RequestRide";
import RequesterConfirmation from "../pages/RequesterConfirmation";
import ArriveAtDestinationPage from "../pages/ArriveAtDestinationPage";
import ThanksForRidingPage from "../pages/ThanksForRidingPage";

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
    screen: OfferRide,
  },
  AwaitRideStartPage: {
    screen: AwaitOfferRide,
  },
  OfferRideConfirmationPage: {
    screen: OfferorConfirmation,
  },
  RequestRidePage: {
    screen: RequestRide,
  },
  RequestRideConfirmationPage: {
    screen: RequesterConfirmation,
  },
  LegalTermsPage: {
    screen: LegalTermsPage,
  },
  ArrivalPage: {
    screen: ArriveAtDestinationPage,
  },
  ThanksForRidingPage: {
    screen: ThanksForRidingPage,
  },
};

const Stack = createStackNavigator(pages, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default createAppContainer(Stack);
