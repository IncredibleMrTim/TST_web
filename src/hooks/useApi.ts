import { useEffect, useState } from "react";
import axios from "axios";

export const useApi = <T>(baseUrl: string) => {
  const [data, setData] = useState<T>(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get<T | null>(baseUrl);

      setData(data);
    };
    fetchData();
  }, [baseUrl]);

  return { data };
};
