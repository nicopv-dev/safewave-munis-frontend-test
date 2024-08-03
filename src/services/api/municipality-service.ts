import api from "@/lib/axios";

class MunicipalityService {
  getPlanByCity = async (city: string) =>
    await api.get(`/municipality/${city}/plan`);
}

export default new MunicipalityService();
