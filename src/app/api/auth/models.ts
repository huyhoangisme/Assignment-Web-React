export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  birthday: string;
  [key: string]: string;
}
export interface AuthResponse {
  status: string;
  token: string;
  data: User[];
}
