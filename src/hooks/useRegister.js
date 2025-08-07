import { useState } from "react"

export function useRegister() {
    const [isPending, setIspending] = useState(false)
  const register = async (displayName, email, password) => {
    console.log(displayName, email, password)
  }
  return { register, isPending }
}