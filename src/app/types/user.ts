export interface User {
  id: number;
  email: string;
  username: string;
  password?: string;
  img: string;
  role: 'admin' | 'user';
  token?: string;
}

export interface ProfileDetails {
  email: string;
  username: string;
  img: string;
}

export interface UserUpdate {
  email: string;
  username: string;
  img: string;
}