
export const upperCase = (str: string) => {
  return str?.toUpperCase();
};

export const getUniqueListBy = <T extends Record<string, unknown>>(arr: T[], key: keyof T): T[] => {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
};
