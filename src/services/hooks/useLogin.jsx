import { useMutation, useQuery } from "@tanstack/react-query";
import { login } from "../tan";

const useLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }) => login(email, password),
    onSuccess: async (data) => {
      console.log(data);
      console.log("Api Fetched Succesfullly");
    },
    onError: (error) => {
      console.log(error);
      console.log("Api Fetched Unsuccesfull");
    },
  });
};

export default useLogin;
