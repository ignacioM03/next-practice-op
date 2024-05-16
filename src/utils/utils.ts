import { OrderType } from "@/types/OrderType";

export function calculateOrderTotal(order: OrderType): number {
  let total = 0;
  order.items.forEach((product) => {
    if (product.price) {
      total += product.price;
    }
  });
  return total;
}

export function calculateOrdersTotal(orders: OrderType[]): number {
  let total = 0;
  orders.forEach((order) => {
    total += calculateOrderTotal(order);
  });
  return total;
}

export function countTotalItems(orders: OrderType[]): number {
  let totalItems = 0;
  orders.forEach((order) => {
    totalItems += order.items.length;
  });
  return totalItems;
}

export function calculateTotalOrders(orders: OrderType[]): number {
  let totalOrders = 0;
  orders.forEach((order) => {
    if (order.total) {
      totalOrders += order.total;
    }
  });
  return totalOrders;
}
