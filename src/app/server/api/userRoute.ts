import { api } from "@/lib/api";

export const registerUser = (payload: {
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  confirmPassword: string;
}) => {
  return api.post("/auth/register", payload);
};

export const loginUser = (payload: {
  emailId: string;
  password: string;
}) => {
  return api.post("/auth/login", payload);
};
