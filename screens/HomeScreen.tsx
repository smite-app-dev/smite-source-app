import { Button, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home", "MyStack">;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-2xl">HomeScreen</Text>
      <Button
        title="Go to Builds"
        onPress={() => navigation.navigate("Builds")}
      />
    </View>
  );
};
export default HomeScreen;
