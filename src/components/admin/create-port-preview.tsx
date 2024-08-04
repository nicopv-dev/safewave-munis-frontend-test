"use client";

import { useCreatePost } from "@/context/zustand/create-post-store";
import { cn } from "@/lib/utils";
import { SmartPhone01Icon } from "hugeicons-react";
import {
  BarChart,
  Battery,
  LucideVerified,
  PhoneIcon,
  VerifiedIcon,
  Wifi,
} from "lucide-react";
import Image from "next/image";

export default function CreatePostPreview() {
  const { content, images } = useCreatePost();

  return (
    <div className="max-w-xs w-full px-4 space-y-2">
      <div className="flex justify-center items-center gap-1">
        <SmartPhone01Icon size={12} />
        <p className="text-sm text-zinc-700">Vista previa</p>
      </div>
      <div className="w-full bg-white rounded-2xl h-[76vh] border shadow-md flex flex-col">
        {/* header */}
        <div className="h-12 bg-primary rounded-t-2xl">
          <div className="text-white px-4 py-1.5 flex items-center justify-between">
            <div>
              <p className="text-[10px]">12:42</p>
            </div>
            <div className="flex items-center gap-1">
              <BarChart size={12} />
              <Wifi size={12} />
              <Battery size={12} />
            </div>
          </div>
        </div>

        {/* info */}
        <div className="p-4 flex flex-col gap-3 grow">
          {/* user */}
          <div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div className="flex flex-col">
                <span className="text-sm flex items-center gap-1">
                  Municipalidad de Santiago{" "}
                  <VerifiedIcon size={12} className="text-secondary" />
                </span>
                <span className="text-[10px] text-zinc-500">
                  Publicado hace una hora
                </span>
              </div>
            </div>
          </div>
          {/* content */}
          <p className={cn("text-sm text-zinc-700 text-wrap")}>
            {content || "Ingrese descripcion"}
          </p>

          {/* image */}
          {images.length > 0 && (
            <Image
              alt="preview"
              src={images[0].preview}
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-cover rounded-md"
            />
          )}
        </div>

        {/* bar */}
        <div className="h-2 bg-black rounded-b-2xl flex items-center justify-center">
          <div className="h-[2px] rounded-lg w-20 bg-white" />
        </div>
      </div>
    </div>
  );
}
