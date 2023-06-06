import { IRequestDetails } from "entities/Request";

export const getValuesArrayByKey = (
  array: IRequestDetails[],
  key: "serviceId" | "laborId"
) => {
  // const detailsArr = [
  //   {
  //     serviceId: "646932533a3ff8661ceece65",
  //     laborId: "6469f089ecee8bf264e08d6a",
  //   },
  //   {
  //     serviceId: "646932783a3ff8661ceece68",
  //     laborId: "6469f089ecee8bf264e08d6a",
  //   },
  //   {
  //     serviceId: "646932873a3ff8661ceece6b",
  //     laborId: "6469f089ecee8bf264e08d6a",
  //   },
  // ];
  // const key = "serviceId";

  let valuesArray = [];

  for (const item of array) {
    const value = item[key];
    valuesArray.push(value);
  }

  // console.log(valuesArray);
  return valuesArray;
};
