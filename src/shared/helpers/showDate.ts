import { Conflict } from "http-errors";

export const showDate = (date: Date | null) => {
  if (date) {
    const newDate = new Date(date);

    return `
  ${newDate.getDate().toString().padStart(2, "0")}
  .${(newDate.getMonth() + 1).toString().padStart(2, "0")}
  .${newDate.getFullYear()}`;
  } else {
    throw new Conflict("Date not received");
  }
};

export const showTime = (date: Date | null) => {
  if (date) {
    const newDate = new Date(date);

    return `${newDate.getHours()}:${newDate.getMinutes()}`;
  } else {
    throw new Conflict("Date not received");
  }
};
