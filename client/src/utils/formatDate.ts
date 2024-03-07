export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  // Adjust the time zone offset according to your requirements
  const timeZoneOffset = date.getTimezoneOffset() * 60000;
  const localDate = new Date(date.getTime() + timeZoneOffset);

  const day = localDate.getDate().toString().padStart(2, '0');
  const month = (localDate.getMonth() + 1).toString().padStart(2, '0');
  const year = localDate.getFullYear().toString().slice(-2);
  return `${day}/${month}/${year}`;
};
