export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: string[];
}

export interface AuthResponse {
  firstName: string;
  lastName: string;
  municipality: {
    name: string;
    city: string;
  };
  access_token: string;
}
