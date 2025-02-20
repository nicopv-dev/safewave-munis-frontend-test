"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/safewave.png";
import { signOut } from "next-auth/react";

import { Home01Icon, DocumentCodeIcon, Profile02Icon } from "hugeicons-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import { DoorClosed } from "lucide-react";

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
  // {
  //   name: "Redes",
  //   href: "/admin/redes-vecinales",
  //   icon: NeuralNetworkIcon,
  // },
  // {
  //   name: "Vecinos",
  //   href: "/admin/vecinos",
  //   icon: UserSearch01Icon,
  // },
  // {
  //   name: "Configuracion",
  //   href: "/admin/configuracion",
  //   icon: Configuration01Icon,
  // },
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
    <aside className="bg-primary sticky top-0 left-0 w-72 px-5 h-screen flex flex-col justify-between py-4 gap-4 border-r border-r-gray-200">
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
                  ? "bg-secondary text-white"
                  : "text-white hover:text-secondary"
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
          <div className="flex items-center gap-1.5">
            <Image
              alt="logo"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_CC0zVNawHLtKnaEGlTlggFTuHvgMWbK-35Pre8loif844eNkn2LCvbTnjaKbypWi0A&usqp=CAU"
              }
              width={42}
              height={42}
              className="rounded-full object-cover border-2 border-gray-400/50"
            />
            <div className="flex flex-col grow">
              <span className="text-white text-xs font-medium">
                {session.user?.name}
              </span>
              <span className="text-zinc-100 text-[10px] font-light">
                Temuco
              </span>
            </div>

            <div>
              <Link
                href="/admin/configuracion"
                className="text-white p-2 rounded-full"
              >
                <Profile02Icon size={20} />
              </Link>
            </div>
          </div>
          <button
            type="button"
            onClick={() => signOut()}
            className="btn btn-sm btn-secondary w-full"
          >
            <DoorClosed size={12} />
            Cerrar sesion
          </button>
        </div>
      )}
    </aside>
  );
}
