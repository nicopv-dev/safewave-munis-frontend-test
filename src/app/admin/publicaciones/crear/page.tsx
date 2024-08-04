import CreatePostPreview from "@/components/admin/create-port-preview";
import CustomBreadcrumb from "@/components/common/custom-breadcrumb";
import CreatePostForm from "@/components/form/create-post-form";
import { DocumentCodeIcon } from "hugeicons-react";

export default function CrearPublicacion() {
  return (
    <div className="h-full flex flex-col gap-6">
      <div className="space-y-2">
        <CustomBreadcrumb />

        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <DocumentCodeIcon />
            <h2 className="text-2xl font-semibold">Crear nueva publicacion</h2>
          </div>

          <p className="text-gray-500 text-sm">
            Podras crear una nueva publicacion para que todos los usuarios de
            toda la comuna puedan verla
          </p>
        </div>
      </div>

      <div className="grow flex gap-10">
        {/* form */}
        <CreatePostForm />

        {/* preview */}
        <CreatePostPreview />
      </div>
    </div>
  );
}
