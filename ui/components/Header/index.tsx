import { View, Text } from "react-native";

const Header = () => {
  return (
    <View className="flex justify-center items-center flex-row h-16 bg-stone-300">
      <View className="flex justify-between">
        <Text className="font-semibold text-lg text-stone-900">PosTech</Text>
      </View>
    </View>
  );
};

export default Header;
