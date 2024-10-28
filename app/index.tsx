import { Text, View } from "react-native";

import "../constants/global.css";
import Header from "@/ui/components/Header";

export default function Index() {
  return (
    <View className="flex justify-center w-full">
      <Header />
      <View>
        <Text className="text-lg font-medium">Bem vindo ao Blog do curso</Text>
      </View>
    </View>
  );
}
