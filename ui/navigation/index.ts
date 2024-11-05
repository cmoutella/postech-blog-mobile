import { ParamListBase, useNavigation } from "@react-navigation/native";

export const useNavigate = () => {
  const navigation = useNavigation();

  function goToPage(screenName: string, options?: Record<string, any>) {
    const params = [screenName, options] as unknown as never;
    return navigation.navigate(...params);
  }

  return {
    to: goToPage,
  };
};
