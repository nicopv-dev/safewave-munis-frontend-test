import { POST_DATA } from "@/utils/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostsTable from "@/components/admin/tables/PostsTable";
import { GroupIcon, ListIcon } from "lucide-react";
import postService from "@/services/api/post-service";
import imageService from "@/services/api/image-service";

const getData = async () => {
  try {
    const { data } = await postService.getAllPosts();

    return {
      success: true,
      data,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
};

export default async function Publicaciones() {
  const { data, success } = await getData();

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold">Mis Publicaciones</h2>
        <p className="text-gray-500 text-sm">
          Aqui se depliegan las publicaciones que has realizado dentro de
          SafeWave
        </p>
      </div>
      <Tabs defaultValue="list" className="w-full">
        <TabsList className="flex justify-between bg-transparent">
          <div className="w-max ">
            <TabsTrigger value="list">
              <ListIcon />
            </TabsTrigger>
            <TabsTrigger value="group">
              <GroupIcon />
            </TabsTrigger>
          </div>
          <button className="btn btn-primary btn-md">Nueva Publicacion</button>
        </TabsList>

        <TabsContent value="list">
          <PostsTable data={data ?? []} />
        </TabsContent>
        <TabsContent value="group">
          {data && (
            <div className="grid grid-cols-4 gap-4">
              {data.map((post, index) => (
                <article key={index} className="card bg-base-100 shadow">
                  <figure>
                    <img
                      src={imageService.getImageUrl(post.image)}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="badge badge-error text-xs text-white">
                      Robo
                    </div>
                    <p className="text-gray-600 line-clamp-2">{post.content}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
