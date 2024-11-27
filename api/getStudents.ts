import { Student } from "@/types";
import apiRequest from "./api";
import { InterfaceList, SuccessResponse } from "@/types/apiPatterns";

export default function getStudents(page: number, perPage?: number) {
  const getParams = page ? `?page=${page}&perPage=${perPage ?? "6"}` : "";

  const req = apiRequest("GET", `/student${getParams}`);

  async function submit() {
    const res: SuccessResponse<InterfaceList<Student>> = await req.submit();

    const { data } = res;

    return data;
  }

  return { ...req, submit: submit };
}
