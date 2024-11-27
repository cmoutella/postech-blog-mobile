import { Box, Button, Input, Spinner } from "native-base";
import BaseTemplate from "@/ui/templates/BaseTemplate";
import { useEffect, useState } from "react";
import { PostInterface } from "@/types";
import Text from "@/components/base/Text";
import updatePost from "@/api/updatePost";
import getPublicOnePost from "@/api/getPost";
import { useNavigate } from "@/ui/navigation";

interface PostScreenProps {
  postId: string;
}

export function EditPostScreen({ postId }: PostScreenProps) {
  const [postTitle, setPostTitle] = useState<string | undefined>(undefined);
  const [postContent, setPostContent] = useState<string | undefined>(undefined);
  const [keyWords, setKeywords] = useState<string | undefined>(undefined);

  // Defina corretamente o tipo de navegação
  const navigate = useNavigate();

  // Requisições
  const requestPosts = getPublicOnePost(postId);
  const requestUpdatePosts = updatePost(postId, {
    title: postTitle,
    text: postContent,
    keyWords: keyWords?.split(",").map((word) => word.trim()),
  });

  // Função para buscar os dados do post
  const getPostContent = async () => {
    try {
      const postData: PostInterface = await requestPosts.submit();

      setPostTitle(postData.title);
      setPostContent(postData.text);
      setKeywords(postData.keyWords.join(", "));
    } catch (error) {
      console.error("Erro ao buscar post:", error);
    }
  };

  // Função para enviar a atualização
  const submitUpdate = async () => {
    try {
      const updatedPost = await requestUpdatePosts.submit();

      // Após salvar, navegue para a tela do post editado
      navigate.to("post", { postId });
    } catch (error) {
      console.error("Erro ao atualizar post:", error);
    }
  };

  // Busca os dados do post ao carregar o componente
  useEffect(() => {
    if (postTitle === undefined && postContent === undefined) {
      getPostContent();
    }
  }, []);

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
          Voltar
        </Button>

        {/* Botão para salvar */}
        <Button
          onPress={submitUpdate}
          isLoading={requestUpdatePosts.loading}
          isDisabled={requestUpdatePosts.loading || !postTitle || !postContent}
          className="mt-4"
        >
          {requestUpdatePosts.loading ? <Spinner /> : "Salvar alterações"}
        </Button>
      </Box>
    </BaseTemplate>
  );
}
