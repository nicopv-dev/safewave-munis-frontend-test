"use client";

import { useCallback, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useDropzone } from "react-dropzone";
import {
  Image01Icon,
  Image02Icon,
  TextAlignLeftIcon,
  TextIcon,
} from "hugeicons-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ImageFile } from "@/types/image";
import { useCreatePost } from "@/context/zustand/create-post-store";
import { cn } from "@/lib/utils";

export default function CreatePostForm() {
  const { setImages, images, content, setContent } = useCreatePost();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    const newImages = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    ) as ImageFile[];
    setImages([...newImages]);
  }, []);

  useEffect(() => {
    // Cleanup the object URLs when the component unmounts
    return () => {
      images.forEach((file) => URL.revokeObjectURL(file.preview));
      setImages([]);
    };
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
  });

  // const removeImage = (file: ImageFile) => {
  //   setImages((prevImages) => prevImages.filter((image) => image !== file));
  //   URL.revokeObjectURL(file.preview);
  // };

  return (
    <form className="w-full h-full flex flex-col justify-between">
      <div className="space-y-3">
        {/* title */}
        <div className="space-y-1">
          <label
            htmlFor="title"
            className="text-sm font-medium
        text-gray-700 flex items-center gap-1"
          >
            <TextAlignLeftIcon size={12} />
            Titulo
          </label>
          <Input name="title" placeholder="Titulo de la publicacion" />
        </div>

        {/* content */}
        <div className="space-y-1">
          <label
            htmlFor="description"
            className="text-sm font-medium
        text-gray-700 flex items-center gap-1"
          >
            <TextIcon size={12} />
            Descripcion
          </label>
          <Textarea
            name="description"
            placeholder="Descripcion de la publicacion"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* images */}
        <div>
          <label
            className="text-sm font-medium
        text-gray-700 flex items-center gap-1"
          >
            <Image02Icon size={12} />
            Imagenes
          </label>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div
              className={cn(
                "text-xs font-medium transition-all duration-300 ease-in-out text-gray-700 w-full h-24 flex items-center justify-center gap-1 rounded-md border border-dashed hover:cursor-pointer hover:bg-zinc-100"
              )}
            >
              <Image01Icon size={12} />
              <span>
                {images.length > 0
                  ? "Cambiar imagen"
                  : "Presiona o arrastra la imagen aqui"}
              </span>
            </div>
          </div>
        </div>

        {/* previews */}
        {images.length > 0 && (
          <div className="flex gap-2">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.preview}
                alt="preview"
                width={100}
                height={100}
                className="rounded"
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Button variant="ghost">Cancelar</Button>
        <Button>Crear publicacion</Button>
      </div>
    </form>
  );
}
