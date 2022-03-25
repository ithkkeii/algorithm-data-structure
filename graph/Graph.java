package com.company;

import java.util.*;

public class Graph {
  private Map<String, Node> nodes = new HashMap<>();
  private Map<Node, List<Node>> adjacencyList = new HashMap<>();

  void addNode(String label) {
    var node = new Node(label);
    nodes.putIfAbsent(label, node);
    adjacencyList.putIfAbsent(node, new ArrayList<>());
  }

  void addEdge(String from, String to) {
    var fromNode = nodes.get(from);
    if (fromNode == null)
      throw new IllegalArgumentException();

    var toNode = nodes.get(to);
    if (toNode == null)
      throw new IllegalArgumentException();

    adjacencyList.get(fromNode).add(toNode);
  }

  void removeNode(String label) {
    var node = nodes.get(label);
    if (node == null)
      return;

    for (var n : adjacencyList.keySet())
      adjacencyList.get(n).remove(node);

    nodes.remove(node);
  }

  void removeEdge(String from, String to) {
    var fromNode = nodes.get(from);
    var toNode = nodes.get(to);
    if (fromNode == null || toNode == null)
      return;

    adjacencyList.get(fromNode).remove(toNode);
  }

  void traverse(String root) {
    depthFirstTraversal(nodes.get(root), new HashSet<>());
  }

  private void depthFirstTraversal(Node root, Set<Node> visited) {
    System.out.println(root);
    visited.add(root);

    for (var node : adjacencyList.get(root)) {
      if (!visited.contains(node)) {
        depthFirstTraversal(node, visited);
      }
    }
  }

  List<String> topologicalSort() {
    List<String> sorted = new ArrayList<>();
    Stack<Node> stack = new Stack<>();
    Set<Node> visited = new HashSet<>();

    for (var node : nodes.values()) {
      topologicalSort(node, stack, visited);
    }

    while (!stack.empty()) {
      sorted.add(stack.pop().label);
    }

    return sorted;
  }

  private void topologicalSort(Node node, Stack<Node> stack, Set<Node> visited) {
    if (visited.contains(node))
      return;

    visited.add(node);

    for (var neighbour : adjacencyList.get(node)) {
      topologicalSort(neighbour, stack, visited);
    }

    stack.push(node);
  }

  boolean hasCycle() {
    List<Node> all = new ArrayList<>();
    all.addAll(nodes.values());

    List<Node> visiting = new ArrayList<>();
    List<Node> visited = new ArrayList<>();

    while (!all.isEmpty()) {
      // Get first node
      var current = all.iterator().next();
      if (hasCycle(current, all, visiting, visited))
        return true;
    }

    return false;
  }

  boolean hasCycle(Node node, List<Node> all, List<Node> visiting, List<Node> visited) {
    all.remove(node);
    visiting.add(node);

    for (var neighbour : adjacencyList.get(node)) {
      if (visited.contains(neighbour))
        continue;

      if (visiting.contains(neighbour))
        return true;

      if (hasCycle(neighbour, all, visiting, visited))
        return true;
    }

    visiting.remove(node);
    visited.add(node);

    return false;
  }

  void traverseDepthFirst(String root) {
    var node = nodes.get(root);
    if (node == null)
      return;

    Set<Node> visited = new HashSet<>();
    Stack<Node> stack = new Stack<>();
    stack.push(node);

    while (!stack.isEmpty()) {
      var current = stack.pop();

      if (visited.contains(current))
        continue;

      System.out.println(current);
      visited.add(current);

      for (var neighbour : adjacencyList.get(root)) {
        if (!visited.contains(neighbour))
          stack.push(neighbour);
      }
    }
  }

  void print() {
    for (var source : adjacencyList.keySet()) {
      var targets = adjacencyList.get(source);
      if (!targets.isEmpty()) {
        System.out.println(source + " is connected to " + targets);
      }
    }
  }

  private class Node {
    private String label;

    public Node(String label) {
      this.label = label;
    }

    @Override
    public String toString() {
      return label;
    }
  }
}
