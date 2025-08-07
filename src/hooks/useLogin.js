import { useState } from "react"

export function useLogin() {
    const [isPending, setIspending] = useState(false)
  const login = async (email, password) => {
    console.log(email, password)
  }
  return { login, isPending }
}