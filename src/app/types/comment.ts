import { Workshop } from './workshop';
import { User } from './user';

export interface Comment {
  likes: string[];
  _id: string;
  text: string;
  userId: User;
  workshopId: Workshop;
  created_at: string;
  updatedAt: string;
  __v: number;
}
