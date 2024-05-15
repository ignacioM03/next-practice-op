"use client";

import { useEffect, useState } from "react";
import { OrderSummary } from "../OrderSummary/OrderSummary";

type ProgressBarProps = {
  loading: boolean;
};

export const ProgressBar = ({ loading }: ProgressBarProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <div className="w-full max-w-xl p-4 bg-gray-200 rounded-lg shadow-lg">
          <div className="w-full h-4 bg-gray-300 rounded-full mb-2">
            <div className="w-1/2 h-full bg-blue-500 rounded-full"></div>
          </div>
          <div className="w-full h-4 bg-gray-300 rounded-full">
            <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
          </div>
        </div>
      ) : (
        <div className="text-lg font-bold text-green-600 mx-auto text-center">
          Datos cargados correctamente
          <OrderSummary />
        </div>
      )}
    </div>
  );
};
