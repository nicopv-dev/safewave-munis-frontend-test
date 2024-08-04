import Municipality from "./municipality";
import { Author } from "./user";

export default interface Post {
  id: number;
  title: string;
  content: string;
  isActive: boolean;
  image?: string;

  author: Author;
  municipality?: Municipality;
}
