import { auth } from "@/auth";
import municipalityService from "@/services/api/municipality-service";
import { Profile02Icon } from "hugeicons-react";
import { Session } from "next-auth";

const getData = async (session: Session | null) => {
  try {
    if (!session) return { error: true };

    const { data, status } = await municipalityService.getPlanByCity(
      "Melipilla"
    );

    if (status !== 200 || !data)
      return {
        error: true,
      };

    return {
      data,
      error: false,
    };
  } catch (e) {
    return {
      error: true,
    };
  }
};

export default async function Configuracion() {
  const session = await auth();
  const data = await getData(session);

  return (
    <div>
      <div className="space-y-1">
        <div className="flex items-center gap-1">
          <Profile02Icon />
          <h2 className="text-2xl font-semibold">Configuración</h2>
        </div>
        <p className="text-gray-500 text-sm">Configura tu cuenta de SafeWave</p>
      </div>
    </div>
  );
}
