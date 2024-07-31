import { Metadata } from "next";
import Image from "next/image";
import safewave from "@/assets/images/safewave.png";
import LoginForm from "@/components/form/login-form";

export const metadata: Metadata = {
  title: "Iniciar sesion - SafeWave",
  description: "Login page",
};

export default function Login() {
  return (
    <div className="flex h-screen">
      {/* video */}
      <div className="w-full">
        <video className="w-full h-full object-cover" muted loop autoPlay>
          <source src="/assets/videos/sample.webm" type="video/webm" />
        </video>
      </div>

      {/* form */}
      <div className="max-w-xl w-full bg-primary h-full flex justify-center items-center gap-2">
        <div className="max-w-md w-full h-[80vh] flex flex-col justify-between items-center gap-2">
          <div className="flex flex-col gap-3 items-center">
            <Image src={safewave} alt="logo" width={200} height={400} />

            <p className="text-white text-sm text-center">
              Aqui podras administrar tu comuna y dar a conocer informacion
              relevante a tu comunidad.
            </p>
          </div>

          <LoginForm />

          <p className="text-xs text-gray-300">Desarrollador por SafeWave</p>
        </div>
      </div>
    </div>
  );
}
