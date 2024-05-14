import { UserType } from "@/types/UserType";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProfileProps = {
  user: UserType | null;
  logout: () => void;
};

export const ProfileDropdown = ({ user, logout }: ProfileProps) => {

  const router = useRouter();
  return user!.role === "user" ? (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
            description={user!.username}
            name={user!.name}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Registrado como</p>
            <p className="font-bold">{user!.username}</p>
          </DropdownItem>
          <DropdownItem key="settings">Mi configuración</DropdownItem>
          <DropdownItem key="team_settings">
            <Link href={"/products/cart"}>Mis compras</Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={logout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ) : (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
            description={user!.username}
            name={user!.name}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Registrado como</p>
            <p className="font-bold">{user!.username}</p>
          </DropdownItem>
          <DropdownItem key="settings">Mi configuración</DropdownItem>
          <DropdownItem key="my_products">
            <Link href={"/products/myProducts"}>Mis productos</Link>
          </DropdownItem>
          <DropdownItem key="addProduct">
            <Link href={"/products/new"}>Agregar productos</Link>
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            onClick={() => {
              logout();
              router.push("/login");
            }}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
