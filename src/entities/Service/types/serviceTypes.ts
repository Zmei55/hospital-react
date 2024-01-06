type Service = {
  _id: string | number;
  name: string;
  code: string;
  isActive: boolean;
  createdAt: Date;
};

export type TService = Omit<Service, "isActive" | "createdAt">;

export type TServiceFilter = {
  filter: string;
};

export type TServiceMocks = Service;
