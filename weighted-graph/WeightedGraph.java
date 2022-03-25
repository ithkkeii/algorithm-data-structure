package com.company;

import java.util.*;

public class WeightedGraph {
  private Map<String, Node> nodes = new HashMap<>();

  void addNode(String label) {
    nodes.putIfAbsent(label, new Node(label));
  }

  void addEdge(String from, String to, int weight) {
    var fromNode = nodes.get(from);
    if (fromNode == null)
      throw new IllegalArgumentException();

    var toNode = nodes.get(to);
    if (toNode == null)
      throw new IllegalArgumentException();

    fromNode.addEdge(toNode, weight);
    toNode.addEdge(fromNode, weight);
  }

  public int getShortestDistance(String from, String to) {
    PriorityQueue<NodeEntry> queue = new PriorityQueue<>(
        Comparator.comparingInt(nodeEntry -> nodeEntry.priority)
    );
    var fromNode = nodes.get(from);
    queue.add(new NodeEntry(fromNode, 0));

    Map<Node, Integer> distances = new HashMap<>();
    for (var node : nodes.values()) {
      distances.put(node, Integer.MAX_VALUE);
    }
    distances.put(nodes.get(from), 0);
    Map<Node, Node> previousNodes = new HashMap<>();

    Set<Node> visited = new HashSet<>();

    while (!queue.isEmpty()) {
      var current = queue.remove().node;
      visited.add(current);

      for (var edge : current.getEdges()) {
        if (visited.contains(edge.to))
          continue;

        var newDistance = distances.get(current) + edge.weight;
        var distance = distances.get(edge.to);
        if (newDistance < distance) {
          distances.replace(edge.to, newDistance);
          previousNodes.put(edge.to, current);
        }

        queue.add(new NodeEntry(edge.to, newDistance));
      }
    }

    // Create path
    Stack<Node> stack = new Stack<>();
    stack.push(nodes.get(to));
    var previous = previousNodes.get(nodes.get(to));
    while (previous != null) {
      stack.push(previous);
      previous = previousNodes.get(previous);
    }

    var path = "";
    while (!stack.isEmpty()) {
      path += (stack.pop().label) + " ";
    }
    System.out.printf(path);

    return distances.get(nodes.get(to));
  }

  public boolean hasCycle() {
    Set<Node> visited = new HashSet<>();

    for (var node : nodes.values()) {
      if (visited.contains(node) && hasCycle(node, null, visited)) {
        return true;
      }
    }

    return false;
  }

  private boolean hasCycle(Node node, Node parent, Set<Node> visited) {
    visited.add(node);

    for (var edge : node.getEdges()) {
      if (edge.to == parent)
        continue;

      if (visited.contains(edge.to))
        return true;

      if (hasCycle(edge.to, node, visited))
        return true;
    }

    return false;
  }

  public boolean containsNode(String label) {
    return nodes.containsKey(label);
  }

  WeightedGraph getMinimumSpanningTree() {
    var tree = new WeightedGraph();

    PriorityQueue<Edge> queue = new PriorityQueue<>(
        Comparator.comparingInt(e -> e.weight)
    );

    var startNode = nodes.values().iterator().next();
    queue.addAll(startNode.getEdges());
    tree.addNode(startNode.label);

    while (tree.nodes.size() < nodes.size()) {
      var minEdge = queue.remove();
      var nextNode = minEdge.to;

      if (tree.containsNode(nextNode.label)) {
        continue;
      }

      tree.addNode(nextNode.label);
      tree.addEdge(minEdge.from.label, nextNode.label, minEdge.weight);

      for (var edge : nextNode.getEdges()) {
        if (!tree.containsNode(edge.to.label))
          queue.add(edge);
      }
    }

    return tree;
  }

  public void print() {
    for (var node : nodes.values()) {
      var edges = node.getEdges();
      if (!edges.isEmpty()) {
        System.out.println(node + " is connected to " + edges);
      }
    }
  }

  private class Node {
    private String label;
    private List<Edge> edges = new ArrayList<>();

    public Node(String label) {
      this.label = label;
    }

    @Override
    public String toString() {
      return label;
    }

    public void addEdge(Node to, int weight) {
      edges.add(new Edge(this, to, weight));
    }

    public List<Edge> getEdges() {
      return this.edges;
    }
  }

  private class Edge {
    private Node from;
    private Node to;
    private int weight;

    public Edge(Node from, Node to, int weight) {
      this.from = from;
      this.to = to;
      this.weight = weight;
    }

    @Override
    public String toString() {
      return from + " -> " + to;
    }
  }

  private class NodeEntry {
    private Node node;
    private int priority;

    public NodeEntry(Node node, int priority) {
      this.node = node;
      this.priority = priority;
    }
  }
}
