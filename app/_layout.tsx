import { Routes } from "@/routes";
import { NativeBaseProvider } from "native-base";
import "../constants/global.css";

export default function RootLayout() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
