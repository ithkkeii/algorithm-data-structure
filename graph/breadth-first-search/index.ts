type WeightedAdjacencyMatrix = number[][];

export const bfs = (
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number,
): number[] | null => {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const q: number[] = [source];

  do {
    const curr = q.shift() as number;
    if (curr === needle) {
      break;
    }

    const adjs = graph[curr];
    console.log(curr);
    for (let i = 0; i < adjs.length; i++) {
      if (adjs[i] === 0) {
        continue;
      }

      if (adjs[i] === seen[i]) {
        continue;
      }

      seen[i] = true;
      prev[i] = curr;
      q.push(i);
    }
  } while (q.length);

  // build it backwards
  let curr = needle;
  const path = [];

  while (prev[curr] !== -1) {
    path.push(curr);
    curr = prev[curr];
  }

  if (path.length) {
    return [...path, source].reverse();
  }

  return null;
};
