// import { createContext, useState } from "react";

// type ContextProps = {};

// export const FiltersContext = createContext<ContextProps | undefined>(
//   undefined
// );

// type Props = {
//   children: React.ReactNode;
// };

// export function FiltersProvider({ children }: Props) {
//   const [filters, setFilters] = useState({
//     category: "all",
//     minPrice: 250,
//   });

//   return (
//     <FiltersContext.Provider
//       value={{
//         filters,
//         setFilters,
//       }}
//     >
//       {children}
//     </FiltersContext.Provider>
//   );
// }
