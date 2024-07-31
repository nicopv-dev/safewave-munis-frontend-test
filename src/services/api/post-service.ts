import api from "@/lib/axios";

class PostService {
  getPosts = async () => api.get("/publication/active?skip=0&limit=10&city");
}

export default new PostService();
