import { createAction } from "@reduxjs/toolkit";
import { IDriver } from "../../api/driver.interfaces";

export const fetchAllDrivers = createAction<IDriver[]>("driverReducer/IDriver");
