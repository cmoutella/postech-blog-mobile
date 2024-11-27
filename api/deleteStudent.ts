import apiRequest from "./api";
import { SuccessResponse } from "@/types/apiPatterns";

export default function deleteStudent(studentId: string) {
  const req = apiRequest("DELETE", `/student/${studentId}`);

  async function submit() {
    const res: SuccessResponse<{ message: string }> = await req.submit();

    const { data } = res;

    return data;
  }

  return { ...req, submit: submit };
}
