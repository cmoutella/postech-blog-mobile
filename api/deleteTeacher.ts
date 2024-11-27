import apiRequest from "./api";
import { SuccessResponse } from "@/types/apiPatterns";

export default function deleteTeacher(teacherId: string) {
  const req = apiRequest("DELETE", `/users/${teacherId}`);

  async function submit() {
    const res: SuccessResponse<{ message: string }> = await req.submit();

    const { data } = res;

    return data;
  }

  return { ...req, submit: submit };
}
