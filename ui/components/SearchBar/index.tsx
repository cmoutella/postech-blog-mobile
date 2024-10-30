import { Box } from "native-base";
import Input from "../Base/Input";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  return (
    <Box className="flex justify-center items-center border border-1 border-black rounded-sm">
      <Input
        variant={"rounded"}
        placeholder="Busque aqui"
        name="searchBar"
        value={value}
        onChangeText={(v) => setValue(v)}
      />
    </Box>
  );
};

export default SearchBar;
