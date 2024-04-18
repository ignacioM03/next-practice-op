import {
  ADD_INSPECTION_DATE,
  ADD_VEHICLE_INSPECTION,
  EDIT_VEHICLE_INSPECTION,
} from "./types";

export const addVehicleInspection = (
  vehicleId: number,
  inspectionPoints: any
) => ({
  type: ADD_VEHICLE_INSPECTION,
  payload: {
    vehicleId,
    inspectionPoints,
  },
});

export const editVehicleInspection = (
  vehicleId: number,
  inspectionPoints: any
) => ({
  type: EDIT_VEHICLE_INSPECTION,
  payload: {
    vehicleId,
    inspectionPoints,
  },
});

export const addInspectionDate = (
  vehicleId: number,
  inspectionDate: string
) => ({
  type: ADD_INSPECTION_DATE,
  payload: {
    vehicleId,
    inspectionDate,
  },
});
