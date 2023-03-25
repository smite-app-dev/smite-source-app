import { Text, View } from "react-native";
import TwitchAd from "../Ads/TwitchAd";

const Footer = () => {
  return (
    <View>
      <Text>Copyright SmiteSource App 2023</Text>
      <Text>
        SmiteSource App is not affiliated, associated, authorized, endorsed by,
        or in any way officially connected with Smite, Hi-Rez, or any of their
        subsidiaries or affiliates.
      </Text>
      <TwitchAd />
    </View>
  );
};
export default Footer;
