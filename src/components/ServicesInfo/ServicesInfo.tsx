type TService = {
  name: string;
  codeService: string;
};

type TSavedServicesList = {
  savedServicesList: TService[];
};

export const ServicesInfo = ({ savedServicesList }: TSavedServicesList) => {
  return (
    <ul>
      {savedServicesList.map(service => (
        <li key={service.codeService}>{service.name}</li>
      ))}
    </ul>
  );
};
