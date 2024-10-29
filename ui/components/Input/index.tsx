import { Input as BaseInput, IInputProps, Box, Text } from "native-base";

interface InputProps extends IInputProps {
  label?: string;
  name: string;
}

const Input = ({ label, name, ...props }: InputProps) => {
  return (
    <Box className="flex flex-col items-start w-full">
      {label && <Text id={`input-${name}`}>{label}</Text>}
      <BaseInput w="100%" aria-labelledby={`input-${name}`} {...props} />
    </Box>
  );
};

export default Input;
