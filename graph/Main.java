package com.company;

public class Main {
  public static void main(String[] args) {
    var graph = new Graph();
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.removeNode("B");
    // graph.print();

    var depthFirstGraph = new Graph();
    depthFirstGraph.addNode("A");
    depthFirstGraph.addNode("B");
    depthFirstGraph.addNode("C");
    depthFirstGraph.addNode("D");
    depthFirstGraph.addEdge("A", "B");
    depthFirstGraph.addEdge("B", "D");
    depthFirstGraph.addEdge("D", "C");
    depthFirstGraph.addEdge("A", "C");
    depthFirstGraph.traverse("A");

    var topologicalSortGraph = new Graph();
    topologicalSortGraph.addNode("X");
    topologicalSortGraph.addNode("A");
    topologicalSortGraph.addNode("B");
    topologicalSortGraph.addNode("P");
    topologicalSortGraph.addEdge("X", "A");
    topologicalSortGraph.addEdge("X", "B");
    topologicalSortGraph.addEdge("A", "P");
    topologicalSortGraph.addEdge("B", "P");
    var list = topologicalSortGraph.topologicalSort();
    System.out.println("Topological Sort:");
    System.out.println(list);

    var cycleDetectionGraph = new Graph();
    cycleDetectionGraph.addNode("A");
    cycleDetectionGraph.addNode("B");
    cycleDetectionGraph.addNode("C");
    cycleDetectionGraph.addNode("D");
    cycleDetectionGraph.addEdge("A", "B");
    cycleDetectionGraph.addEdge("A", "C");
    cycleDetectionGraph.addEdge("B", "C");
    cycleDetectionGraph.addEdge("D", "A");
    var hasCycle = cycleDetectionGraph.hasCycle();
    System.out.printf("Cycle Detection: " + (hasCycle ? "Yes" : "No"));
  }
}
