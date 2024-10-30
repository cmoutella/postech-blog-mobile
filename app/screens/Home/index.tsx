import BaseTemplate from "@/ui/templates/BaseTemplate";
import { Box } from "native-base";
import { Text } from "react-native";
import { SearchBar } from "react-native-screens";

const Home = () => {
  return (
    <BaseTemplate>
      <Box className="pt-8">
        <Text className="text-lg font-medium">Home</Text>
        <Text className="text-regular font-medium">
          Bem vindo ao Blog do curso
        </Text>
        <SearchBar />
      </Box>
    </BaseTemplate>
  );
};

export default Home;
