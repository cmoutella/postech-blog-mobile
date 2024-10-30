import { useState } from "react";
import { API_URI } from "@env";

type RequestMethods = "GET" | "POST" | "PUT" | "DELETE";
type RequestError = {
  status: number;
  message?: string;
};

export default function apiRequest(
  method: RequestMethods,
  path: string,
  body?: any
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);

  const requestHeaders = {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
    "Access-Control-Allow-Headers":
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    "Content-Type": "application/json",
  };

  // if (token) {
  //   requestHeaders.append("Authorization", `Bearer ${cookie.token}`);
  // }

  const requestParams = {
    headers: requestHeaders,
    method: method,
    body: body,
  };

  const submitRequest = async () => {
    setIsLoading(true);
    try {
      console.log("submiting");
      const res = await fetch(`${API_URI}/${path}`, requestParams).then((res) =>
        res.json()
      );

      console.log("response", res);
      setIsLoading(false);

      return res;
    } catch (error) {
      setIsLoading(false);
      console.log("ERROR", path, error);
      setErr(true);
    }
  };

  return {
    submit: submitRequest,
    loading: isLoading,
    err: err,
  };
}
