export const hasKeyInObject = <T extends object>(object: T, key: string | number | symbol): key is keyof T => {
  return Object.hasOwn(object, key);
};
