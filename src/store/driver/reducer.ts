import { createReducer } from "@reduxjs/toolkit";
import { fetchAllDrivers } from "./action";

interface IDriver {
  allDrivers: [];
}

const initialState: IDriver = {
  allDrivers: [],
};

export default createReducer(initialState, (driver) => {
  driver.addCase(fetchAllDrivers, (state, { payload }) => {
    return {
      ...state,
      allPakemons: payload,
    };
  });
});
