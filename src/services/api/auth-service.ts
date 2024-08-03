import api from "@/lib/axios";
import { AuthResponse } from "@/types/response";

class AuthService {
  login = async (data: { email: string; password: string }) =>
    await api.post<AuthResponse>(`/auth/signin`, data);
}

export default new AuthService();
