import { ACT_DECREASE, ACT_INCREASE, ACT_RADOM } from "../constrains";

export const act_increase = () => {
  return {
    type: ACT_INCREASE,
  };
};

export const act_decrease = () => {
  return {
    type: ACT_DECREASE,
  };
};

export const act_random = (number) => {
  return {
    type: ACT_RADOM,
    payload: number,
  };
};
