import { z } from "zod";

export const PostForm = z.object({
  title: z.string(),
  content: z.string(),
  image: z.string().optional(),
});

export type PostForm = z.infer<typeof PostForm>;
