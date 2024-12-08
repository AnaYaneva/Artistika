import { Post } from './post';
import { User } from './user';

export interface Workshop {
  subscribers: string[];
  posts: Post[];
  _id: string;
  title: string;
  userId: User;
  created_at: string;
  updatedAt: string;
  description: string;
  refPhoto: string;
  finalPhoto: string;
  video: string;
  __v: number;
}
