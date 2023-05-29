"use client"

import { useEffect } from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Loading } from "../components"

export default function LoginPage() {
  const { status: authStatus } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (authStatus === "authenticated") {
      router.push("/")
    }

    if (authStatus === "unauthenticated") {
      signIn("keycloak")
    }
  }, [authStatus, router])

  return <Loading />
}
