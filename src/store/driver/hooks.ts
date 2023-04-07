import { useAppSelector } from "../store";

export const useAllDrivers = () => {
  useAppSelector((state) => state.driver.allDrivers);
};
