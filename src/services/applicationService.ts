import { useQuery, QueryFunctionContext } from "@tanstack/react-query";
import { Application } from "../types/application";
import apiClient from "./axios";

export const useGetApplications = (data: object | undefined) =>
  useQuery<Application[], Error>({
    queryKey: ["applications", data],
    queryFn: async () => {
      const response = await apiClient("/applications", "get", data);
      return response.data;
    },
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
  });

export const useGetApplication = (applicationId: number | undefined) =>
  useQuery<Application[], Error>({
    queryKey: ["applications", applicationId],
    queryFn: async (context: QueryFunctionContext) => {
      const { queryKey } = context;
      const applicationId = queryKey[1];
      const response = await apiClient(`/applications/${applicationId}`, "get");
      return response.data;
    },
    staleTime: 1 * 60 * 1000,
  });

export const useGetEvents = (applicationId: number | undefined) =>
  useQuery<Application[], Error>({
    queryKey: ["events", applicationId, "applications"],
    queryFn: async (context: QueryFunctionContext) => {
      const { queryKey } = context;
      const applicationId = queryKey[1];
      const response = await apiClient(
        `/applications/${applicationId}/events`,
        "get"
      );
      return response.data;
    },
    staleTime: 1 * 60 * 1000,
  });
