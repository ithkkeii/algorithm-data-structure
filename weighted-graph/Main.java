package com.company;

public class Main {
  public static void main(String[] args) {
    var graph = new WeightedGraph();
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");
    graph.addEdge("A", "B", 3);
    graph.addEdge("A", "C", 2);
    System.out.printf("Create map: \n");
    graph.print();

    var shortestDistanceGraph = new WeightedGraph();
    shortestDistanceGraph.addNode("A");
    shortestDistanceGraph.addNode("B");
    shortestDistanceGraph.addNode("C");
    shortestDistanceGraph.addNode("D");
    shortestDistanceGraph.addNode("E");
    shortestDistanceGraph.addEdge("A", "B", 3);
    shortestDistanceGraph.addEdge("A", "D", 2);
    shortestDistanceGraph.addEdge("A", "C", 4);
    shortestDistanceGraph.addEdge("C", "D", 1);
    shortestDistanceGraph.addEdge("B", "D", 6);
    shortestDistanceGraph.addEdge("B", "E", 1);
    shortestDistanceGraph.addEdge("D", "E", 5);
    System.out.printf("Create map: \n");
    shortestDistanceGraph.print();
    var shortestDistance = shortestDistanceGraph.getShortestDistance("A", "E");
    System.out.println("shortestDistance: " + shortestDistance);
    var minimumSpanningTree = shortestDistanceGraph.getMinimumSpanningTree();
    minimumSpanningTree.print();
  }
}
