import Button from "@/ui/components/Button";
import BaseTemplate from "@/ui/templates/BaseTemplate";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  return (
    <BaseTemplate>
      <View className="flex justify-center items-center pt-8">
        <Text className="text-lg font-semibold mb-3">Faça seu login</Text>

        <View>
          <Text>input aqui</Text>
        </View>

        <Button
          label="Vá para a home"
          onPress={() => navigation.navigate("home")}
        />
      </View>
    </BaseTemplate>
  );
}
