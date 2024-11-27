import apiRequest from "./api";
import { SuccessResponse } from "@/types/apiPatterns";

export default function deletePost(postId: string) {
  const req = apiRequest("DELETE", `/posts/${postId}`);

  async function submit() {
    const res: SuccessResponse<{ message: string }> = await req.submit();

    const { data } = res;

    return data;
  }

  return { ...req, submit: submit };
}
