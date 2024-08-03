"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/safewave.png";
import { signOut, useSession } from "next-auth/react";

import {
  Home01Icon,
  DocumentCodeIcon,
  NeuralNetworkIcon,
  UserSearch01Icon,
  Configuration01Icon,
} from "hugeicons-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";

const LINKS = [
  {
    name: "Inicio",
    href: "/admin",
    icon: Home01Icon,
  },
  {
    name: "Publicaciones",
    href: "/admin/publicaciones",
    icon: DocumentCodeIcon,
  },
  {
    name: "Redes",
    href: "/admin/redes-vecinales",
    icon: NeuralNetworkIcon,
  },
  {
    name: "Vecinos",
    href: "/admin/vecinos",
    icon: UserSearch01Icon,
  },
  {
    name: "Configuracion",
    href: "/admin/configuracion",
    icon: Configuration01Icon,
  },
];

interface Props {
  session: Session | null;
}

export default function Sidebar({ session }: Props) {
  // const { data: session, status } = useSession();
  const [activeLink, setActiveLink] = useState<string>("/");
  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <aside className="sticky top-0 left-0 w-72 px-6 h-screen flex flex-col justify-between py-4 gap-4 border-r border-r-gray-200">
      {/* logo */}
      <div className="h-16 w-full flex justify-center items-center">
        <Image src={logo} alt="logo" width={100} height={50} />
      </div>

      {/* nav */}
      <ul className="grow space-y-1">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                " flex items-center gap-1 transition-all duration-200 ease-in-out py-2 rounded-md px-4",
                activeLink === link.href
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-primary"
              )}
            >
              <link.icon size={16} />
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* user */}
      {session && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-primary" />
            <div className="flex flex-col">
              <span className="text-gray-900 text-xs">
                {session.user?.name}
              </span>
              <span className="text-gray-500 text-xs">Temuco</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => signOut()}
            className="btn btn-sm btn-primary w-full"
          >
            Cerrar sesion
          </button>
        </div>
      )}
    </aside>
  );
}
