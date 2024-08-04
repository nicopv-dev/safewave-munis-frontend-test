import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import imageService from "@/services/api/image-service";
import Post from "@/types/models/post";

interface Props {
  data: Post[];
}

export default function PostsTable({ data }: Props) {
  return (
    <Table className="shadow rounded-lg border border-zinc-100">
      {data.length === 0 && (
        <TableCaption>No existen publicaciones realizadas</TableCaption>
      )}
      <TableHeader className="bg-white">
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Titulo</TableHead>
          <TableHead>Descripcion</TableHead>
          <TableHead>Imagen</TableHead>
          <TableHead>Autor</TableHead>
          <TableHead className="text-right">Fecha</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-white">
        {data.map((post, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-ellipsis">
              {post.id}
            </TableCell>
            <TableCell>{post.title}</TableCell>
            <TableCell>{post.content}</TableCell>
            <TableCell>
              {post.image ? (
                <a
                  href={imageService.getImageUrl(post.image)}
                  className="text-blue-600"
                  target="_blank"
                >
                  Imagen
                </a>
              ) : (
                <p>Sin imagen</p>
              )}
            </TableCell>
            <TableCell>
              {post.author.firstName} {post.author.lastName}
            </TableCell>
            <TableCell className="text-right">2014</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
