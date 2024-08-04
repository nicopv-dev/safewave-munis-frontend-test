import Post from "@/types/models/post";
import { Author } from "@/types/models/user";
import { faker } from "@faker-js/faker";

const author: Author = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "test@gmail.com",
};

// copilot generate 20 post with random text all with content different
export const POST_DATA: Post[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 8,
  content: faker.lorem.paragraph(),
  title: faker.lorem.sentence(),
  isActive: true,
  author,
}));
