export interface IDetail {
  _id?: string | number;
  serviceId: string | number;
  laborId: string | number;
  isCompleted?: boolean;
  createdAt?: string;
}
