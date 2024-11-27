import { PostInterface } from "@/types";
import apiRequest from "./api";
import { SuccessResponse } from "@/types/apiPatterns";

type CreatePostData = Pick<
  PostInterface,
  "keyWords" | "text" | "title" | "teacherId"
>;

export default function createPost(postData: CreatePostData) {
  const req = apiRequest("POST", "/posts", postData);

  async function submit() {
    const res: SuccessResponse<PostInterface> = await req.submit();

    const { data } = res;

    return data;
  }

  return { ...req, submit: submit };
}
