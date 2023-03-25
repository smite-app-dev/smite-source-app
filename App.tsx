import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuildScreen from "./screens/BuildScreen";
import HomeScreen from "./screens/HomeScreen";
import { RootStackParamList } from "./types/types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Builds" component={BuildScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
