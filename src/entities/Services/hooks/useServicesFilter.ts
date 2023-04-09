import { useState, useEffect } from "react";
import { servicesList, TServicesList } from "entities/Services";

export const useServicesFilter = (
  initialFilter: string,
  initialVisServices: TServicesList
) => {
  const [visibleServices, setVisibleServices] = useState(initialVisServices);

  useEffect(() => {
    if (initialFilter !== "") {
      setVisibleServices(
        servicesList.filter(service =>
          service.name.toLowerCase().includes(initialFilter.toLowerCase())
        )
      );
    }
  }, [initialFilter]);

  return { visibleServices, setVisibleServices };
};
