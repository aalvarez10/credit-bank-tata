export const transformDate = (date: Date | string) => {
  const today = new Date(date);
  const yyyy = today.getFullYear();
  let mm: number | string = today.getMonth() + 1;
  let dd: number | string = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return yyyy + '-' + mm + '-' + dd;
};
