"use server";

import { AuthFormSchema } from "@/types/form/auth-form";
import { ActionResponse } from "@/types/response";
import { ZodError } from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export async function demoLogin(formData: FormData) {
  try {
    const data = AuthFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const { email, password } = data;
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (e) {
    if (e instanceof AuthError) {
      return {
        error: e.message,
      };
    }
    throw e;
  }
}

export async function login(formData: FormData): Promise<ActionResponse> {
  try {
    const data = AuthFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const { email, password } = data;
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return {
      success: true,
      message: "Sesion iniciada",
    };
  } catch (e) {
    console.log(e);
    if (e instanceof ZodError) {
      console.log(e.errors);
      const errors = e.errors.map((error) => error.message);

      return {
        success: false,
        message: "Zod Error al iniciar sesion",
        errors,
      };
    }
    throw e;
  }
}
