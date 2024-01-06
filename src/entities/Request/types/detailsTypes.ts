type Details = {
  _id: string | number;
  serviceId: string | number;
  laborId: string | number;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type TDetails = Omit<Details, "isCompleted" | "createdAt" | "updatedAt">;

export type TNewDetails = Pick<Details, "serviceId" | "laborId">;
