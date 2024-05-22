import { useOrderStore } from "@/store/OrderStore";

export default function OrdersPage() {
  const orders = useOrderStore((state) => state.orders);
  const updateOrder = useOrderStore((state) => state.updateOrder);

  const handleUpdateOrder = (order: any) => {
    updateOrder(order);
  };

  return (
    <div className="container mx-auto bg-gray-50 my-1 mt-10 mb-10">
      <div className="bg-gray-50 text-[#333] w-full rounded font-[sans-serif] overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
          <div className="lg:col-span-2 py-10 px-6">
            <h1 className="text-3xl font-bold">Gestion de pedidos</h1>
            <p className="mt-4 text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              accumsan, nun c et tempus blandit, metus mi consectetur nibh, a
              pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
              ultrices, non consequat mauris tincidunt.
            </p>
            <button
              type="button"
              className="px-6 py-3 mt-10 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-teal-600 hover:bg-teal-700"
              disabled
            >
              Agregar Productos
            </button>
          </div>
          <img
            src="https://readymadeui.com/cardImg.webp"
            className="w-full h-full object-cover shrink-0"
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="">
          <table className="w-full border-collapse border border-gray-200 bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Orden
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Fecha del pedido
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Usuario
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Estado
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {orders.map((order) => (
                <tr key={order.id}>
                  <th className="px-6 py-4 font-medium text-gray-900">
                    {order.id}
                  </th>
                  <td className="px-6 py-4">
                    {order.createdAt?.toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">{order.user.name}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                      {order.status === "approved" ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-3 w-3"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {order.status}
                        </span>
                      ) : order.status === "pending" ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-3 w-3"
                          >
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11a1 1 0 11-2 0v-2a1 1 0 112 0v2zm-1-4a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                          {order.status}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-3 w-3"
                          >
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                          </svg>
                          {order.status}
                        </span>
                      )}
                    </span>
                  </td>
                  <td className="flex justify-end gap-4 px-6 py-4 font-medium">
                    <button
                      className="text-success-700"
                      onClick={() =>
                        handleUpdateOrder({
                          ...order,
                          status: "approved",
                          shippingId: Date.now().toString(),
                        })
                      }
                    >
                      Despachar
                    </button>
                    <button
                      className="text-danger-700"
                      onClick={
                        handleUpdateOrder &&
                        (() =>
                          handleUpdateOrder({ ...order, status: "cancelled" }))
                      }
                    >
                      Cancelar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
