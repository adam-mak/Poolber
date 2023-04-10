import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserProfilePage from "../pages/UserProfilePage";
import RatingPage from "../pages/RatingPage";

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
};

const Stack = createStackNavigator(pages, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default createAppContainer(Stack);
