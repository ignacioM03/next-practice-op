// import { useContext } from 'react'
// import { Product } from '@/types/ProductType.js'
// import { FiltersContext } from '@/context/Filters'

// export function useFilters () {
//   const { filters, setFilters } = useContext(FiltersContext)

//   const filterProducts = (products: Product) => {
//     return products.filter(product: Product => {
//       return (
//         product.price >= filters.minPrice &&
//         (
//           filters.category === 'all' ||
//           product.category === filters.category
//         )
//       )
//     })
//   }

//   return { filters, filterProducts, setFilters }
// }