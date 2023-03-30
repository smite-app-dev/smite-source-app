import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import useApiSession from "./hooks/useApiSession";
import BuildScreen from "./screens/BuildScreen";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store/store";
import { RootStackParamList } from "./types/types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  // const { sessionId } = useApiSession();

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName="Home">
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="Builds" component={BuildScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};
export default App;
