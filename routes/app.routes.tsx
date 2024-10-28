import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/app/screens/Home";
import Login from "@/app/screens/Login";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen name="home" component={Home} />
      <Screen name="login" component={Login} />
    </Navigator>
  );
}
