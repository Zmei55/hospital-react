type Service = {
  _id: string | number;
  name: string | null;
  code: string | null;
  isActive: boolean | null;
  createdAt: Date | null;
};

export type TService = Omit<Service, "isActive" | "createdAt">;

export type TServiceFilter = {
  filter: string | null;
};

export type TServiceMocks = Service;
