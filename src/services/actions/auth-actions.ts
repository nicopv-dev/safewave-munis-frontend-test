"use server";

import { signIn } from "@/auth";
import { AuthFormSchema } from "@/types/form/auth-form";
import { ActionResponse } from "@/types/response";
import { ZodError } from "zod";

export async function login(
  state: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  try {
    const data = AuthFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const { email, password } = data;
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });

    // const { status, data: response } = await api.post<AuthResponse>(
    //   "/auth/signin",
    //   data
    // );

    // if (status !== 201)
    //   return {
    //     success: false,
    //     message: "Error al iniciar sesion",
    //   };

    return {
      success: true,
      message: "Sesion iniciada",
    };
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(e.errors);
      const errors = e.errors.map((error) => error.message);

      return {
        success: false,
        message: "Zod Error al iniciar sesion",
        errors,
      };
    }

    return {
      success: false,
      message: "Error al iniciar sesion",
    };
  }
}
