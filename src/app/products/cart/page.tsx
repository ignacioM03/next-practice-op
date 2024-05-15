"use client";

import { ItemCard } from "@/components/ItemCard/ItemCard";
import { StepComponent } from "@/components/StepComponent/StepComponent";
import { TotalCard } from "@/components/TotalCard/TotalCard";
import { useCartStore } from "@/store/CartStore";
import { Product } from "@/types/ProductType";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const total = items.reduce(
    (total: number, item: Product) =>
      total + parseFloat((item.price * item.quantity!).toString()),
    0
  );
  const myTotal = {
    subtotal: 0,
    vat: 0,
    discount: 0,
    total: total,
  };

  return (
    <div className="container mx-auto mt-8">
      <StepComponent />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg bg-gray-200 lg:col-span-2">
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div className="mx-auto max-w-3xl">
                <header className="text-center">
                  <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Mi carrito
                  </h1>
                </header>

                <div className="mt-8">
                  <ul className="space-y-4">
                    {items.map((item: Product) => (
                      <ItemCard key={item.id} item={item} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className=" rounded-lg bg-gray-200">
          <TotalCard totalItem={myTotal} />
        </div>
      </div>
    </div>
  );
}
