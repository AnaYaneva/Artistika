export interface User {
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  facebook: string;
  instagram: string;
  linkedIn: string;
  password: string;
  workshops: string[];
  _id: string;
  created_at: string;
  updatedAt: string;
  __v: number;
}

export interface UserForAuth {
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  facebook: string;
  instagram: string;
  linkedIn: string;
  password: string;
  id: string;
}

export interface ProfileDetails {
  email: string;
}
