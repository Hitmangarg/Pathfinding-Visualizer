# Pathfinder Visualizer

Welcome to Pathfinding Visualizer! I built this application because I was fascinated by pathfinding algorithms, and I wanted to visualize them in action, also some maze generation is applied to it. This application is built by using React js and p5js wrapper.You can access it here : [Link](https://shrikant991.github.io/Pathfinding-Visualizer/)


# Pathfinding Algorithms

## Breadth First Search
Breadth first search is an unweighted graph search algorithm which can be used to calculate the shortest path to a node, here we implement the BFS using a queue data structure.

## Depth First Search
Depth first search is an unweighted graph search algorithm which can be used to calculate a path to a node, here we implement the DFS using a stack data structure.

##  Dijkstra's Algorithm
Dijkstra's is a weighted graph search algorithm which can be used to calculate the shortest path to a node, here we implement Dijkstra's using a priority queue made by a heap.

## A* Search
Astar is a weighted graph search algorithm which can be used to calculate the shortest path to a node, here we implement Astar using a priority queue made by a heap. The Astar uses a heuristic to reduce computation time, the heuristic used here is Manhattan Distance.


# Maze Generation Algorithms

## Randomized verticals

Randomized verticals is a maze generation algorithm in which we make a maze consisting of several vertical lines, with holes placed in random locations.

## Randomized horizontals

Randomized horizontals is a maze generation algorithm in which we make a maze consisting of several horizontal lines, with holes placed in random locations.

## Recursive division

Recursive division is a recursive maze generation algorithm in which we keep splitting the grid into sub sections by drawing vertical and horizontal lines, we randomize the location of these lines and also generate random holes. The holes and lines will never coincide.

