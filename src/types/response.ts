export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: string[];
}

export interface AuthResponse {
  firstName: string;
  lastName: string;
  access_token: string;
}
