import { useNavigate } from "@/ui/utils/navigation";
import { Box, Button, Heading, View } from "native-base";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box className="flex justify-center items-center flex-row h-16 bg-stone-300 px-2">
      <Box className="flex flex-row justify-between items-center w-full">
        <Heading size="md" color="primary.900">
          PosTech
        </Heading>
        <Button onPress={() => navigate.to("login")}>Login</Button>
      </Box>
    </Box>
  );
};

export default Header;
