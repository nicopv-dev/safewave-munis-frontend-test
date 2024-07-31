"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { AuthForm, AuthFormSchema } from "@/types/form/auth-form";
import { login } from "@/services/actions/auth-actions";
import { useFormState } from "react-dom";
import { useState } from "react";
import api from "@/lib/axios";
import { AuthResponse } from "@/types/response";
import { useSession } from "@/context/zustand/session-store";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [state, loginAction] = useFormState(login, {
    message: "",
    success: false,
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthForm>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUser, setIsAuth } = useSession();
  const router = useRouter();

  const onSubmit: SubmitHandler<AuthForm> = async (data) => {
    console.log(data);

    try {
      setIsLoading(true);

      const { status, data: response } = await api.post<AuthResponse>(
        "/auth/signin",
        data
      );

      if (status === 201) {
        localStorage.setItem("access_token", response.access_token);
        setUser({
          firstName: response.firstName,
          lastName: response.lastName,
        });
        setIsAuth(true);
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4 w-full" action={loginAction}>
      <h3 className="text-white text-2xl font-medium text-center">
        Iniciar sesion
      </h3>

      <input
        type="email"
        placeholder="Correo electronico"
        className="w-full input input-bordered input-primary bg-white"
        name="email"
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="w-full input input-bordered input-primary bg-white"
        name="password"
      />

      <button
        className="text-white w-full font-semibold bg-secondary px-10 py-2.5 rounded-md shadow-md shadow-secondary/60"
        type="submit"
      >
        Iniciar sesion
      </button>

      {state.errors && (
        <div className="text-white text-sm">
          {state.errors.map((error) => (
            <span key={error}>{error}</span>
          ))}
        </div>
      )}
    </form>
  );
}
