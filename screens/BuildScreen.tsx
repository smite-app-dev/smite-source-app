import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { fetchMethod } from "../api/fetch";
import { SMITE_DEV_ID, SMITE_AUTH_KEY } from "@env";

const BuildScreen = () => {
  const getStuff = fetchMethod("createsession", SMITE_DEV_ID, SMITE_AUTH_KEY);
  console.log("data returned", getStuff);

  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-2xl">BuildScreen</Text>
      <StatusBar style="auto" />
    </View>
  );
};
export default BuildScreen;
