type Item = number | Array<Item>;

export function flattener(item: Item[]) {
  const s = [...item];
  const result: number[] = [];

  while (s.length) {
    const item = s.pop() as Item;

    if (typeof item === 'number') {
      result.push(item);
      continue;
    }

    s.push(...item);
  }

  return result.reverse();
}

export function rFlattener(item: Item, result: number[]) {
  if (typeof item === 'number') {
    result.push(item);
    return;
  }

  for (const i of item) {
    rFlattener(i, result);
  }
}
