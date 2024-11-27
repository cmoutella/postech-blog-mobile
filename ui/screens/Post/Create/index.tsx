import { Box, Button, Input, Icon } from "native-base";
import BaseTemplate from "@/ui/templates/BaseTemplate";
import { useEffect, useState } from "react";
import { PostInterface } from "@/types";
import Text from "@/components/base/Text";
import updatePost from "@/api/updatePost";
import getPublicOnePost from "@/api/getPost";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/routes/app.routes";
import { useNavigate } from "@/ui/navigation";
import createPost from "@/api/createPost";
import { useSessionContext } from "@/ui/providers/authProvider";

interface PostScreenProps {
  postId: string;
}

export function EditPostScreen({ postId }: PostScreenProps) {
  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");
  const [keyWords, setKeywords] = useState<string>("");

  const navigate = useNavigate();
  const { user } = useSessionContext();

  if (!user || !user.id) {
    navigate.to("login");
    return <></>;
  }

  // Requisições
  const requestUpdatePosts = createPost({
    title: postTitle,
    text: postContent,
    keyWords: keyWords?.split(",").map((word) => word.trim()),
    teacherId: user.id,
  });

  // Função para enviar a criação
  const submit = async () => {
    try {
      await requestUpdatePosts.submit();
      navigate.to("post", { postId });
    } catch (error) {
      console.error("Erro ao atualizar post:", error);
    }
  };

  return (
    <BaseTemplate>
      <Box className="pt-8 px-6">
        <Text className="text-xl font-bold mb-4" fontSize="lg">
          Edição de <Text className="text-primary-700">Post</Text>
        </Text>

        {/* Input para o título */}
        <Input
          placeholder="Título"
          value={postTitle}
          onChangeText={(text) => setPostTitle(text)}
          className="mb-4"
          fontSize="lg"
        />

        {/* Input para o conteúdo */}
        <Input
          placeholder="Conteúdo"
          value={postContent}
          onChangeText={(text) => setPostContent(text)}
          className="mb-4"
          multiline
          numberOfLines={8}
          textAlignVertical="top"
          fontSize="lg"
        />

        {/* Input para as keywords */}
        <Input
          placeholder="Palavras-chave (separadas por vírgulas)"
          value={keyWords}
          onChangeText={(text) => setKeywords(text)}
          className="mb-4"
          fontSize="lg"
        />
        {/*Botão para voltar */}
        <Button
          onPress={() => navigate.back()}
          className="mb-6"
          colorScheme="blue"
        >
          Cancelar alterações e voltar
        </Button>

        {/* Botão para salvar */}
        <Button
          onPress={submit}
          isLoading={requestUpdatePosts.loading}
          isDisabled={requestUpdatePosts.loading || !postTitle || !postContent}
          className="mt-4"
        >
          Salvar alterações
        </Button>
      </Box>
    </BaseTemplate>
  );
}
