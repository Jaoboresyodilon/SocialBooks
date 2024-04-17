import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer , createSwitchNavigator} from "react-navigation";

import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import NavigationPage from "./screens/NavigationPage";
import PostScreen from "./screens/PostScreen";

const AppStack = createStackNavigator({
  Home: {
    screen: NavigationPage,
    navigationOptions: {
      title: '',
      headerStyle : {
        height : "none"
      }
    },
  },
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App : AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);

