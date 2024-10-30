import apiRequest from "./api";

export default function getPublicPosts(page: number, perPage?: number) {
  const getParams = page ? `?page=${page}&perPage=${perPage ?? "6"}` : "";

  const req = apiRequest("GET", `/posts${getParams}`);

  return { ...req };
}
