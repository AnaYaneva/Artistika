import { Comment } from './comment';
import { User } from './user';

export interface Workshop {
  //  subscribers: string[];
  comments: Comment[];
  _id: string;
  title: string;
  userId: User;
  //  created_at: string;
  //  updatedAt: string;
  description: string;
  refPhoto: string;
  finalPhoto: string;
  video: string;
  // __v: number;
}
