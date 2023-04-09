import { TServicesList } from "entities/Services";

export const handleClearForm = (
  filter: (value: React.SetStateAction<string>) => void,
  visServices: (value: React.SetStateAction<TServicesList>) => void,
  selecServices: (value: React.SetStateAction<TServicesList>) => void
) => {
  filter("");
  visServices([]);
  selecServices([]);
};
