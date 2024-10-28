import Button from "@/ui/components/Button";
import BaseTemplate from "@/ui/templates/BaseTemplate";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <BaseTemplate>
      <View className="pt-8">
        <Text className="text-lg font-medium">Home</Text>
        <Text className="text-regular font-medium">
          Bem vindo ao Blog do curso
        </Text>
        <Button
          label="Faça login"
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </BaseTemplate>
  );
};

export default Home;
