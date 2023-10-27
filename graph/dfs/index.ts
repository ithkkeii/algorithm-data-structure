type GraphEdge = { to: number; weight: number };

type WeightedAdjacencyList = GraphEdge[][];
function walk(
  graph: WeightedAdjacencyList,
  curr: number,
  needle: number,
  seen: boolean[],
  path: number[],
): boolean {
  // base case
  if (curr === needle) {
    path.push(curr);
    return true;
  }

  // base case
  if (seen[curr]) {
    return false;
  }

  seen[curr] = true;

  // pre
  path.push(curr);

  // recur
  const list = graph[curr];
  for (let i = 0; i < list.length; i++) {
    if (walk(graph, list[i].to, needle, seen, path)) {
      return true;
    }
  }
  // post
  path.pop();

  return false;
}

export const dfs = (
  graph: WeightedAdjacencyList,
  source: number,
  needle: number,
): number[] | null => {
  const seen: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = [];

  walk(graph, source, needle, seen, path);

  if (path.length) {
    return path;
  }

  return null;
};
