export const convertKeyToString = (key: string): string => {
  switch (key) {
    case "not_confirmed":
      return "Not Confirmed";
    case "checked_out":
      return "Checked Out";

    default:
      return key;
  }
};
