type TService = {
  name: string;
  codeService: string;
};

type TServicesList = TService[];

export const servicesList: TServicesList = [
  {
    name: "Immunglobulin A (IgA)",
    codeService: "L18.36.00.0.001",
  },
  {
    name: "Immunglobulin B (IgB)",
    codeService: "L18.36.00.0.002",
  },
  {
    name: "Immunglobulin C (IgC)",
    codeService: "L18.36.00.0.003",
  },
  {
    name: "Immunglobulin G (IgG)",
    codeService: "L18.36.00.0.004",
  },
];
