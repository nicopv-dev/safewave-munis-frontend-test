import { auth } from "@/auth";
import municipalityService from "@/services/api/municipality-service";
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

  return <div>page</div>;
}
