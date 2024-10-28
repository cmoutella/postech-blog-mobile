import Header from "@/ui/components/Header";
import { ReactNode } from "react";
import { View } from "react-native";

interface BaseTemplateProps {
  children: ReactNode;
}

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return (
    <View className="w-full overflow-hidden">
      <Header />
      <View className="px-1.5">{children}</View>
    </View>
  );
};

export default BaseTemplate;
