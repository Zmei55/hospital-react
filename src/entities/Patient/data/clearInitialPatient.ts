import { IClearInitialPatient, initialPatient } from "entities/Patient";

export const clearInitialPatient: IClearInitialPatient = {
  data: {
    result: initialPatient,
  },
};
