"use client";

import logo from "@/assets/images/safewave.png";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const LINKS = [
  {
    name: "Inicio",
    href: "/admin",
  },
  {
    name: "Publicaciones",
    href: "/admin/publicaciones",
  },
  {
    name: "Productos",
    href: "/admin/products",
  },
  {
    name: "Categorias",
    href: "/admin/categories",
  },
];

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <aside className="w-60 px-6 h-full flex flex-col justify-between py-4 gap-4 border-r border-r-gray-200">
      {/* logo */}
      <div className="h-16 w-full flex justify-center items-center">
        <Image src={logo} alt="logo" width={100} height={50} />
      </div>

      {/* nav */}
      <ul className="grow">
        {LINKS.map((link) => (
          <li key={link.href} className="py-2">
            <Link href={link.href} className="text-gray-600">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* user */}
      <div className="">
        <button type="button" onClick={() => signOut()}>
          Cerrar sesion
        </button>
        <p className="text-gray-600">{session?.user?.name}</p>
      </div>
    </aside>
  );
}
