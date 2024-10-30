import { Entypo } from "@expo/vector-icons";
import {
  Input as BaseInput,
  IInputProps,
  Box,
  Button,
  FormControl,
} from "native-base";
import { useState } from "react";

interface InputProps extends IInputProps {
  label?: string;
  name: string;
  helpText?: string;
}

const Input = ({
  label,
  name,
  type = "text",
  helpText,
  ...props
}: InputProps) => {
  const [hideValue, setHideValue] = useState<boolean>(
    type === "password" ? true : false
  );

  const HideIcon = () => {
    return hideValue ? (
      <Entypo name="eye" size={20} color="white" />
    ) : (
      <Entypo name="eye-with-line" size={20} color="white" />
    );
  };

  const handleShow = () => {
    setHideValue(!hideValue);
  };

  return (
    <Box>
      <FormControl className="flex flex-col items-start w-full bg-transparent">
        {label && <FormControl.Label>{label}</FormControl.Label>}
        <BaseInput
          {...props}
          type={hideValue ? type : "text"}
          InputRightElement={
            type === "password" ? (
              <Button
                size="xs"
                rounded="none"
                w="1/8"
                h="full"
                onPress={handleShow}
              >
                <HideIcon />
              </Button>
            ) : (
              <></>
            )
          }
          _light={{
            bg: "primary.50",
            borderColor: "primary.300",
            _hover: {
              bg: "primary.100",
              borderColor: "primary.300",
            },
            _focus: {
              bg: "primary.100",
              borderColor: "primary.500",
            },
          }}
          _dark={{
            bg: "primary.50",
            borderColor: "primary.300",
            _hover: {
              bg: "primary.100",
              borderColor: "primary.300",
            },
            _focus: {
              bg: "primary.100",
              borderColor: "primary.500",
            },
          }}
        />

        <FormControl.ErrorMessage>{helpText ?? ""}</FormControl.ErrorMessage>
      </FormControl>
    </Box>
  );
};

export default Input;
