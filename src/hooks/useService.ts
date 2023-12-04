import axios from "axios";
export const useService = () => {
  const getEmploymentHistory = async () => {
    const data = await axios.get(
      "https://tstwebbackend.azurewebsites.net/employmentHistory",
    );
    return data.data.json();
  };

  return {
    getEmploymentHistory,
  };
};
