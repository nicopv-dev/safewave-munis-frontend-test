const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL || "http://localhost:3000";

class ImageService {
  getImageUrl = (path: string) => `${IMAGE_URL}/${path}`;
}

export default new ImageService();
