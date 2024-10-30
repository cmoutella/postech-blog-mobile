import { Routes } from "@/routes";
import { NativeBaseProvider } from "native-base";
import { customTheme } from "@/constants/theme";
import "../constants/global.css";

export default function RootLayout() {
  return (
    <NativeBaseProvider theme={customTheme} isSSR={false}>
      <Routes />
    </NativeBaseProvider>
  );
}
