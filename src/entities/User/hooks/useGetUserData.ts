import { useState } from "react";
import { useAppSelector } from "shared";

export const useGetUserData = () => {
  const [stationToUpper, setStationToUpper] = useState("");
  const { firstName, lastName, station } = useAppSelector(
    state => state.auth.user
  );

  if (station && stationToUpper === "") {
    const fullStation = station[0].toUpperCase() + station.slice(1);
    setStationToUpper(fullStation);
  }

  return { firstName, lastName, stationToUpper };
};
