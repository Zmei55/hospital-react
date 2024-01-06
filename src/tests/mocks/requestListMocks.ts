import { TRequestFilterRes } from "entities/Request";

export const requestListMocks: TRequestFilterRes[] = [
  {
    _id: 1,
    requestNumber: 1,
    patientId: 1,
    patientName: "Emma Weber",
    cardNumber: 123456789,
    createdAt: new Date("2023-06-08T20:50:37.945+00:00"),
    requestDetails: [
      {
        _id: 1,
        serviceId: 5,
        laborId: 1,
      },
      {
        _id: 2,
        serviceId: 6,
        laborId: 2,
      },
    ],
  },
  {
    _id: 2,
    requestNumber: 2,
    patientId: 1,
    patientName: "Emma Weber",
    cardNumber: 123456789,
    createdAt: new Date("2023-06-08T20:50:37.945+00:00"),
    requestDetails: [
      {
        _id: 1,
        serviceId: 5,
        laborId: 1,
      },
      {
        _id: 2,
        serviceId: 6,
        laborId: 2,
      },
    ],
  },
  {
    _id: 7,
    requestNumber: 7,
    patientId: 1,
    patientName: "Emma Weber",
    cardNumber: 123456789,
    createdAt: new Date("2023-06-12T09:55:33.745+00:00"),
    requestDetails: [
      {
        _id: 1,
        serviceId: 5,
        laborId: 1,
      },
      {
        _id: 2,
        serviceId: 6,
        laborId: 2,
      },
    ],
  },
];
