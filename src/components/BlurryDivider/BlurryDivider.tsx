type DividerProps = {
  text: string;
};
export const BlurryDivider = ({ text }: DividerProps) => {
  return (
    <span className="relative flex justify-center">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

      {text ? (
        <span className="relative z-10 bg-white px-6 text-xl font-bold">{text}</span>
      ) : (
        <span className="relative z-10 bg-white px-6">
          Ver todos los productos
        </span>
      )}
    </span>
  );
};
