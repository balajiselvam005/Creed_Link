import axios from "axios";
import { cookies } from "next/headers";

const serverApi = async () => {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_SPRINGBOOT_BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieHeader,
    },
  });
};

export { serverApi };
