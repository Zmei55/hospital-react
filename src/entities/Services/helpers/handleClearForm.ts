import { IService } from "entities/Services";

export const handleClearForm = (
  filter: (value: React.SetStateAction<string>) => void,
  visServices: (value: React.SetStateAction<IService[]>) => void,
  selecServices: (value: React.SetStateAction<IService[]>) => void
) => {
  filter("");
  visServices([]);
  selecServices([]);
};
