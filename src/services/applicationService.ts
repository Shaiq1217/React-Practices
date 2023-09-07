import { useQuery, QueryFunctionContext } from "@tanstack/react-query";
import { Application } from "../types/application";
import axios from "axios";

const baseURL = process.env.REACT_APP_API_HOST;

export const useApplications = (userId: number | undefined) =>
  useQuery<Application[], Error>({
    queryKey: ["users", userId, "posts"],
    queryFn: async (context: QueryFunctionContext) => {
      const { queryKey } = context;
      const userId = queryKey[1];
      const response = await axios.get(`${baseURL}/applications`, {
        // params: {
        //   userId,
        // },
      });
      return response.data;
    },
    staleTime: 1 * 60 * 1000,
  });
