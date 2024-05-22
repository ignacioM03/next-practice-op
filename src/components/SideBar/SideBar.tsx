import { useAuth } from "@/context/authContext";
import { UserType } from "@/types/UserType";
import { useRouter } from "next/navigation";
import {
  AudienceIconSvg,
  DashboardIconSvg,
  InboxIconSvg,
  LogoutIconSvg,
  NotificationsIconSvg,
  ProductsIconSvg,
  ProfileIconSvg,
  SchedulesIconSvg,
} from "../IconsSvg/IconsSvg";

type UserProps = {
  user: UserType | null;
  setCurrentPage?: (page: string) => void;
};

export const SideBar = ({ setCurrentPage, user }: UserProps) => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const handleChangePage = (page: string) => {
    setCurrentPage?.(page);
  };

  return (
    // <div classNameNameName="">
    //   <h1 classNameNameName="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
    //     Dashboard
    //   </h1>
    //   <div classNameNameName="flex h-screen flex-col justify-between border-e bg-white">
    //     <div classNameNameName="px-4 py-6">
    //       <span classNameNameName="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
    //         Logo
    //       </span>
    //       <ul classNameNameName="mt-6 space-y-1">
    //         <li>
    //           <a
    //             href="#"
    //             classNameNameName="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
    //           >
    //             General
    //           </a>
    //         </li>

    //         <li>
    //           <details classNameNameName="group [&_summary::-webkit-details-marker]:hidden">
    //             <summary classNameNameName="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
    //               <span classNameNameName="text-sm font-medium"> Teams </span>

    //               <span classNameNameName="shrink-0 transition duration-300 group-open:-rotate-180">
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   classNameNameName="h-5 w-5"
    //                   viewBox="0 0 20 20"
    //                   fill="currentColor"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               </span>
    //             </summary>

    //             <ul classNameNameName="mt-2 space-y-1 px-4">
    //               <li>
    //                 <a
    //                   href="#"
    //                   classNameNameName="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    //                 >
    //                   Banned Users
    //                 </a>
    //               </li>

    //               <li>
    //                 <a
    //                   href="#"
    //                   classNameNameName="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    //                 >
    //                   Calendar
    //                 </a>
    //               </li>
    //             </ul>
    //           </details>
    //         </li>

    //         <li>
    //           <a
    //             href="#"
    //             classNameNameName="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    //           >
    //             Billing
    //           </a>
    //         </li>

    //         <li>
    //           <a
    //             href="#"
    //             classNameNameName="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    //           >
    //             Invoices
    //           </a>
    //         </li>

    //         <li>
    //           <details classNameNameName="group [&_summary::-webkit-details-marker]:hidden">
    //             <summary classNameNameName="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
    //               <span classNameNameName="text-sm font-medium"> Account </span>

    //               <span classNameNameName="shrink-0 transition duration-300 group-open:-rotate-180">
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   classNameNameName="h-5 w-5"
    //                   viewBox="0 0 20 20"
    //                   fill="currentColor"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               </span>
    //             </summary>

    //             <ul classNameNameName="mt-2 space-y-1 px-4">
    //               <li>
    //                 <a
    //                   href="#"
    //                   classNameNameName="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    //                 >
    //                   Details
    //                 </a>
    //               </li>

    //               <li>
    //                 <a
    //                   href="#"
    //                   classNameNameName="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    //                 >
    //                   Security
    //                 </a>
    //               </li>

    //               <li>
    //                 <button
    //                   type="submit"
    //                   classNameNameName="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
    //                   onClick={() => {
    //                     logout();
    //                     router.push("/login");
    //                   }}
    //                 >
    //                   Logout
    //                 </button>
    //               </li>
    //             </ul>
    //           </details>
    //         </li>
    //       </ul>
    //     </div>

    //     <div classNameNameName="sticky inset-x-0 bottom-0 border-t border-gray-100">
    //       <a
    //         href="#"
    //         classNameNameName="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
    //       >
    //         <img
    //           alt=""
    //           src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    //           classNameNameName="size-10 rounded-full object-cover"
    //         />

    //         <div>
    //           <p classNameNameName="text-xs">
    //             <strong classNameNameName="block font-medium">{user?.name}</strong>

    //             <span> eric@frusciante.com </span>
    //           </p>
    //         </div>
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <nav className="bg-black h-screen fixed top-0 left-0 min-w-[260px] py-6 px-4 font-[sans-serif] flex flex-col overflow-auto">
      <div className="flex flex-wrap flex-col justify-center items-center cursor-pointer">
        <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center font-bold text-black text-xl">
          <span>{user!.profilePicture}</span>
        </div>

        <div className="text-center mt-4">
          <p className="text-base text-white">{user!.name}</p>
          <p className="text-xs text-gray-300 mt-0.5">{user!.email}</p>
        </div>
      </div>

      <hr className="mt-6 border-gray-600" />
      <ul className="space-y-3 mt-8">
        <li>
          <button onClick={() => handleChangePage("dashboard")}>
            <DashboardIconSvg />
          </button>
        </li>
        <li key={"prices"} value={"prices"}>
          <button onClick={() => handleChangePage("prices")}>
            <AudienceIconSvg />
          </button>
        </li>
        <li>
          <button onClick={() => handleChangePage("shopping")}>
            <ProductsIconSvg />
          </button>
        </li>
        <li>
          <button onClick={() => handleChangePage("orders")}>
            <SchedulesIconSvg />
          </button>
        </li>
        <li>
          <button onClick={() => handleChangePage("shipping")}>
            <NotificationsIconSvg />
          </button>
        </li>
      </ul>

      <hr className="my-8 border-gray-600" />

      <ul className="space-y-3">
        <li>
          <InboxIconSvg />
        </li>
        <li>
          <ProfileIconSvg />
        </li>
        <li>
          <div className="text-gray-300 hover:text-white text-sm flex items-center hover:bg-gray-900 rounded px-4 py-3 transition-all">
            <LogoutIconSvg />
            <button onClick={handleLogout}>Cerrar sesion</button>
          </div>
        </li>
      </ul>
    </nav>
  );
};
