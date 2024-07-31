import { auth, signOut } from "@/auth";
import { PropsWithChildren } from "react";

import { Metadata } from "next";
import Sidebar from "@/components/admin/Sidebar";

export const metadata: Metadata = {
  title: "Municipalidad de Test - Publicaciones",
};

export default async function AdminLayout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <div className="h-screen flex">
      {/* sidebar*/}
      <Sidebar />

      {/* content */}
      <main className="w-full h-full bg-gray-50 p-6">{children}</main>
    </div>
  );
}
