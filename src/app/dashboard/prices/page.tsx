import { PricesTable } from "@/components/PricesTable/PricesTable";
import Image from "next/image";

export default function PricesPage() {
  return (
    <div className="container mx-auto bg-gray-50 my-1 mt-10 mb-10">
      <div className="bg-gray-50 text-[#333] w-full rounded font-[sans-serif] overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
          <div className="lg:col-span-2 py-10 px-6">
            <h1 className="text-3xl font-bold">
              Historial de precios y Precios de los Servicios
            </h1>
            <p className="mt-4 text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              accumsan, nun c et tempus blandit, metus mi consectetur nibh, a
              pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
              ultrices, non consequat mauris tincidunt.
            </p>
            <button
              type="button"
              className="px-6 py-3 mt-10 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-teal-600 hover:bg-teal-700"
            >
              Agregar Productos
            </button>
          </div>
          <Image
            src="https://readymadeui.com/cardImg.webp"
            className="w-full h-full object-cover shrink-0"
            alt=""
            width={0}
            height={0}
          />
        </div>
      </div>
      <PricesTable />
    </div>
  );
}
