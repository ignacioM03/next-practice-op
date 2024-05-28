import { Product } from "@/types/ProductType";
import Image from "next/image";
import Link from "next/link";

type OutletProductCardProps = {
  product: Product;
};
export const OutletProductCard = ({ product }: OutletProductCardProps) => {
  return (
    <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt="Blog Post 1"
          className="w-full h-60 object-cover"
          width={400}
          height={400}
        />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2">
            {product.createdAt
              ? new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                }).format(product.createdAt)
              : "-"}
            | {product.category}
          </span>
          <h3 className="text-xl font-bold text-[#333]">{product.title}</h3>
          <hr className="my-6" />
          <p className="text-gray-400 text-sm">{product.description}</p>
        </div>
      </Link>
    </div>
  );
};
