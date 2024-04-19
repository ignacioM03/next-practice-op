import {
  ADD_INSPECTION_DATE,
  ADD_VEHICLE_INSPECTION,
  EDIT_VEHICLE_INSPECTION,
} from "@/actions/types";
import { VehicleType } from "@/types/VehicleType";

const initialState = {
  vehicles: [],
};

const vehicleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_VEHICLE_INSPECTION:
    case EDIT_VEHICLE_INSPECTION:
      return {
        ...state,
        vehicles: state.vehicles.map((vehicle: VehicleType) =>
          vehicle.id === action.payload.vehicleId
            ? { ...vehicle, inspectionPoints: action.payload.inspectionPoints }
            : vehicle
        ),
      };
    case ADD_INSPECTION_DATE:
      return {
        ...state,
        vehicles: state.vehicles.map((vehicle: VehicleType) =>
          vehicle.id === action.payload.vehicleId
            ? { ...vehicle, lastInspectionDate: action.payload.inspectionDate }
            : vehicle
        ),
      };
    default:
      return state;
  }
};

export default vehicleReducer;
