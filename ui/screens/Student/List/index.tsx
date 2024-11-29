import getStudents from "@/api/getStudents";
import List from "@/components/List";
import StudentPreview from "@/components/StudentPreview";
import { Student } from "@/types";
import { useNavigate } from "@/ui/navigation";
import { useSessionContext } from "@/ui/providers/authProvider";
import BaseTemplate from "@/ui/templates/BaseTemplate";
import { useFocusEffect } from "@react-navigation/native";
import { Box, Button, Heading, View } from "native-base";
import { useCallback, useState } from "react";

export function ListStudentScreen() {
  const [students, setStudents] = useState<Student[]>([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  const navigate = useNavigate();

  const requestStudents = getStudents(page);

  const handleSubmit = async () => {
    const data = await requestStudents.submit();

    if (!data || !data.data) return;

    const updateList =
      students.length <= 0 ? data.data : [...students, ...data.data];
    setStudents(updateList);
    setMaxPages(Math.ceil(data.totalItems / data.itemsPerPage));
  };

  const { authenticate } = useSessionContext();

  useFocusEffect(
    useCallback(() => {
      authenticate();
      handleSubmit();
    }, [page])
  );

  return (
    <BaseTemplate>
      <View className="pt-6">
        <Box className="w-full">
          <Box className="mb-3">
            <Heading size={"lg"}>Alunos</Heading>
            <Button onPress={() => navigate.to("studentCreate")}>
              Criar novo aluno
            </Button>
          </Box>
        </Box>
      </View>
      <View className="pt-8">
        <Box className="w-full p-2 mb-6">
          <List
            items={students}
            isLoading={requestStudents.loading}
            component={StudentPreview}
            currentPage={page}
            totalPages={maxPages}
            nextPage={() => setPage(page + 1)}
          />
        </Box>
      </View>
    </BaseTemplate>
  );
}
