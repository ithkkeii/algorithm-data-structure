/**
 * Find the degrees of separation between friends
 * ["fred:joe", "joe:marry", "marry:fred", "marry:bill"]
 * name1 = "fred"
 * name2 = "bill"
 * -> result is 2 (fred -> joe(1) -> marry(2) -> bill)
 * If none relation found -> return -1
 */

export const degreesOfTwoFriend = (
  friends: string[],
  name1: string,
  name2: string,
): string[] => {
  // Build adjacency list
  const adjacencyList: { [key: string]: string[] } = {};
  for (const pair of friends) {
    const [a, b] = pair.split(':');
    if (adjacencyList[a] !== undefined) {
      adjacencyList[a].push(b);
    } else {
      adjacencyList[a] = [b];
    }

    if (adjacencyList[b] !== undefined) {
      adjacencyList[b].push(a);
    } else {
      adjacencyList[b] = [a];
    }
  }

  // ['fred:joe', 'joe:marry', 'marry:fred', 'marry:bill']
  //   ->
  //   {
  //     fred: [ 'joe', 'marry' ],
  //     joe: [ 'fred', 'marry' ],
  //     marry: [ 'joe', 'fred', 'bill' ],
  //     bill: [ 'marry' ]
  //   }

  const queue = [name1];
  const seen: { [key: string]: boolean | undefined } = {};
  const prev: { [key: string]: string } = {};

  for (const key in adjacencyList) {
    prev[key] = '';
  }

  let flag = false;
  seen[name1] = true;
  while (queue.length > 0) {
    const name = queue.shift()!;
    // Found
    if (name === name2) {
      flag = true;
      break;
    }

    for (const friend of adjacencyList[name]) {
      if (seen[friend]) {
        continue;
      }

      seen[friend] = true;
      prev[friend] = name;
      queue.push(friend);
    }
  }

  if (!flag) {
    return [];
  }

  const path = [name2];
  let curr = name2;
  while (curr !== name1) {
    path.push(prev[curr]);
    curr = prev[curr];
  }

  return path.reverse();
};
