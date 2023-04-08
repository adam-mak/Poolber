import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserProfilePage from "../pages/UserProfilePage";

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
};

const Stack = createStackNavigator(pages, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default createAppContainer(Stack);
