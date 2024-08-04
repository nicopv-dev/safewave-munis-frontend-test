import { auth } from "@/auth";
import { PropsWithChildren } from "react";

import { Metadata } from "next";
import Sidebar from "@/components/admin/navigation/sidebar";

export const metadata: Metadata = {
  title: "Municipalidad de Test - Publicaciones",
};

export default async function AdminLayout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <div className="flex">
      {/* sidebar*/}
      <Sidebar session={session} />

      {/* content */}
      <main className="h-screen overflow-y-auto w-full bg-gray-50 px-8 py-8 flex justify-center">
        <div className="max-w-screen-2xl w-full">{children}</div>
      </main>
    </div>
  );
}
