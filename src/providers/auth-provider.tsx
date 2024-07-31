"use client";

import { useSession } from "@/context/zustand/session-store";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export default function AuthProvider({ children }: PropsWithChildren) {
  const { setIsAuth, isLoading, setIsLoading } = useSession();
  const router = useRouter();

  const getToken = () => {
    try {
      const token = localStorage.getItem("access_token");

      if (token) {
        setIsAuth(true);
      } else {
        router.push("/login");
      }
    } catch (e) {
      router.push("/login");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  if (isLoading) return <p>loading...</p>;

  return <>{children}</>;
}
