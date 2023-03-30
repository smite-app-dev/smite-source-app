import { Button, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import { useGetAllBuildsQuery } from "../store/services/builds";
import { useGetAllGodsQuery } from "../store/services/gods";

type Props = NativeStackScreenProps<RootStackParamList, "Home", "MyStack">;

const HomeScreen = ({ navigation }: Props) => {
  const { data: buildsData } = useGetAllBuildsQuery();
  const { data: godsData } = useGetAllGodsQuery();

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
