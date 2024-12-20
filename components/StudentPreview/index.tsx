import { Student } from "@/types";
import { useNavigate } from "@/ui/navigation";
import { Box, Button, Heading, Spinner } from "native-base";
import cx from "classnames";
import deleteStudent from "@/api/deleteStudent";

interface StudentPreviewProps {
  item: Student;
}

export default function StudentPreview({ item }: StudentPreviewProps) {
  const navigate = useNavigate();
  const deleteRequest = deleteStudent(item.id);

  const gradesMedia =
    item.grades.reduce((acc, curr) => acc + curr, 0) / item.grades.length;

  return (
    <Box className="rounded-lg px-2 py-3 bg-stone-600">
      <Box className="w-full flex flex-col justify-between items-center">
        <Box className="w-full flex flex-row justify-between items-center mb-3">
          <Heading>{item.name}</Heading>
          {item.grades.length > 0 && (
            <Box
              className={cx("bg-stone-800 text-lg p-3", {
                "text-green-500": gradesMedia >= 8,
                "text-yellow-500": gradesMedia >= 6 && gradesMedia < 8,
                "text-orange-500": gradesMedia >= 4 && gradesMedia < 8,
                "text-red-500": gradesMedia < 4,
              })}
            >
              {gradesMedia}
            </Box>
          )}
        </Box>
        <Box className="flex flex-row gap-2 justify-end items-center w-full">
          <Button
            colorScheme="tertiary"
            onPress={() => navigate.to("studentEdit", { studentId: item.id })}
          >
            Editar
          </Button>
          <Button onPress={deleteRequest.submit} colorScheme={"danger"}>
            {deleteRequest.loading ? <Spinner /> : "Excluir"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
