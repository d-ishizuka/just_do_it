import axios from "axios";
import { useEffect } from 'react'
import { useQuery } from "@tanstack/react-query";
import { Task } from "../types";
import { useError } from "../hooks/userError";

export const useQueryTasks = () => {
  const { switchErrorHandling } = useError();
  const getTasks = async () => {
    const { data } = await axios.get<Task[]>(
      `${process.env.REACT_APP_API_URL}/tasks`,
      {withCredentials: true}
    )
    return data
  }

  const query = useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: getTasks,
    staleTime: Infinity
  })

  useEffect(() => {
    if (query.error?.message) {
        switchErrorHandling(query.error.message)
    }
  }, [query.error, switchErrorHandling])

  return query
}