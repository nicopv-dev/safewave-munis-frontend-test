import api from "@/lib/axios";
import { PostForm } from "@/types/form/post-form";
import Post from "@/types/models/post";

class PostService {
  getAllPosts = async () => await api.get<Array<Post>>("/publication");

  createPost = async (data: PostForm) => await api.post("/publication", data);
}

export default new PostService();
