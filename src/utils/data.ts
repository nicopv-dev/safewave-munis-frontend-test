import Post from "@/types/models/post";
import { faker } from "@faker-js/faker";

// copilot generate 20 post with random text all with content different
export const POST_DATA: Post[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 8,
  content: faker.lorem.paragraph(),
}));
