import { registerUser } from "@/app/server/api/userRoute"
import { useMutation } from "@tanstack/react-query"

export const useSignup = () => {
    return useMutation({
        mutationFn: registerUser
    })
}