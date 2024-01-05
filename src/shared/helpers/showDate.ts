export const showDate = (date: Date) => {
  const newDate = new Date(date);

  return `
  ${newDate.getDate().toString().padStart(2, "0")}
  .${newDate.getMonth().toString().padStart(2, "0")}
  .${newDate.getFullYear()}`;
};

export const showTime = (date: Date) => {
  const newDate = new Date(date);

  return `${newDate.getHours()}:${newDate.getMinutes()}`;
};
