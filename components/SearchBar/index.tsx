import Input from "@/ui/components/Input";
import { Box } from "native-base";

import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  return (
    <Input
      variant={"rounded"}
      placeholder="Busque aqui"
      name="searchBar"
      value={value}
      onChangeText={(v) => setValue(v)}
    />
  );
};

export default SearchBar;
