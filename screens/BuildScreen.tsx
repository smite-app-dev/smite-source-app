import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const BuildScreen = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-2xl">BuildScreen</Text>
      <StatusBar style="auto" />
    </View>
  );
};
export default BuildScreen;
