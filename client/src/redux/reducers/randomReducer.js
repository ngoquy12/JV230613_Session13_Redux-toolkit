import { ACT_RADOM } from "../constrains";

const initialState = [];

export const randomReducer = (state = initialState, acion) => {
  switch (acion.type) {
    case ACT_RADOM:
      return [...state, acion.payload];

    default:
      return state;
  }
};
