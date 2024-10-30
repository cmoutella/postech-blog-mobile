import SearchBar from "@/components/SearchBar";
import getPublicPosts from "@/api/getPosts";
import { PostInterface } from "@/types";
import { InterfaceList } from "@/types/apiPatterns";
import BaseTemplate from "@/ui/templates/BaseTemplate";
import { Box } from "native-base";
import { useEffect, useState } from "react";
import { Text } from "react-native";

const Home = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1); // para implementar paginação

  const requestPosts = getPublicPosts(page);

  const getPosts = async () => {
    const listData: InterfaceList<PostInterface> = await requestPosts.submit();

    setPosts(listData.data);
    setMaxPages(Math.round(listData.totalItems / listData.itemsPerPage));
  };

  useEffect(() => {
    requestPosts.submit();
  }, []);

  return (
    <BaseTemplate>
      <Box className="pt-8">
        <Text className="text-lg font-medium">Home</Text>
        <Text className="text-regular font-medium">
          Bem vindo ao Blog do curso
        </Text>
        <SearchBar />
        {requestPosts.loading && <Text>Loading</Text>}
        {!requestPosts.loading && posts.length === 0 && (
          <Text>Sem posts no momento</Text>
        )}
        {!requestPosts.loading &&
          posts.length >= 1 &&
          posts.map((post) => <Text>{post.title}</Text>)}

        <Box className="w-full"></Box>
      </Box>
    </BaseTemplate>
  );
};

export default Home;
