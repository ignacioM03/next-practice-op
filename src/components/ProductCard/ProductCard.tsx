interface ProductsProps {
  id: number;
  name: string;
  category: string;
  price: number;
  productImage?: string;
}

export const ProductCard = ({ product }: { product: ProductsProps }) => {
  const { id, name, category, price, productImage } = product;
  return (
    <div>
      <a href="#" className="group block overflow-hidden">
        <img
          src={productImage}
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div className="relative bg-white pt-3">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3>

          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>

            <span className="tracking-wider text-gray-900"> ${price} </span>
          </p>
        </div>
      </a>
    </div>
  );
};
