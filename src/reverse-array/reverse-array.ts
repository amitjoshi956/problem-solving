/* Problem: Given an array - arr, reverse the array.

Input: arr: number[]
Output: arr: number[]

Example: reverseArray([1, 2, 3, 4, 5]) returns [5, 4, 3, 2, 1]
*/

export const reverseArray = (arr: number[]): number[] => {
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
  }

  console.log("###Rev =>", arr);

  return arr;
};
