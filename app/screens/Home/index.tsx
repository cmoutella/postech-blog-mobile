import BaseTemplate from "@/ui/templates/BaseTemplate";
import { useNavigate } from "@/ui/utils/navigation";
import { Button } from "native-base";
import { View, Text } from "react-native";

const Home = () => {
  const navigate = useNavigate();

  return (
    <BaseTemplate>
      <View className="pt-8">
        <Text className="text-lg font-medium">Home</Text>
        <Text className="text-regular font-medium">
          Bem vindo ao Blog do curso
        </Text>
        <Button onPress={() => navigate.to("login")}>Login</Button>
      </View>
    </BaseTemplate>
  );
};

export default Home;
