"use client";

import { login, demoLogin } from "@/services/actions/auth-actions";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4 w-full" action={demoLogin}>
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
    </form>
  );
}
