/** first argument should be immer array
 * with immer we can modify array directly */
export const arrayMoveElementByIndexWithImmer = (
  arr: any[],
  fromIndex: number,
  toIndex: number
) => {
  const element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
  return arr;
};
