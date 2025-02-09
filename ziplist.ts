function zipList<T>(list1: T[], list2: T[]): T[] {
  if (list1.length !== list2.length) {
    throw new Error('Lists must be of equal length');
  }
  const result: T[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

function zipListTheFunctionalWay<T>(list1: T[], list2: T[]): T[] {
  return list1.map((val, index) => [val, list2[index]])
    .reduce<T[]>((acc, val) => acc.concat(val), []);
}

// Test cases
console.log(zipList<string | number>(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay<string | number>(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
