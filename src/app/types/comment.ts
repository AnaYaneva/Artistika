import { Workshop } from './workshop';
import { User } from './user';

export interface Post {
  likes: string[];
  _id: string;
  text: string;
  userId: User;
  workshopId: Workshop;
  created_at: string;
  updatedAt: string;
  __v: number;
}
