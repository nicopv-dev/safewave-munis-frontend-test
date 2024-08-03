import api from "@/lib/axios";
import Post from "@/types/models/post";

class PostService {
  getAllPosts = async () => await api.get<Array<Post>>("/publication");
}

export default new PostService();
