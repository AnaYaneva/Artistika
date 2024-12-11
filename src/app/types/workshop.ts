import { Comment } from './comment';
import { User } from './user';
import { LevelType } from './levelType';
import { CategoryType } from './category';

export interface CreateWorkshop {
  title: string;
  userId: User;
  description: string;
  img: string;
  video: string;
  levelType: LevelType;
  categoryType: CategoryType;
}

export interface Workshop extends CreateWorkshop {
  id: number;
}
