import Header from "@/components/Header";
import { Box } from "native-base";
import { ReactNode } from "react";
interface BaseTemplateProps {
  children: ReactNode;
}

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return (
    <Box className="w-full overflow-hidden">
      <Header />
      <Box className="px-1.5">{children}</Box>
    </Box>
  );
};

export default BaseTemplate;
