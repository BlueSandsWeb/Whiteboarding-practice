class graph {
  constructor() {
    this.noOfVertices = 0;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.noOfVertices++;
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  printGraph() {
    let get_keys = this.adjList.keys();
    for (let i of get_keys) {
      let get_values = this.adjList.get(i);
      let conc = "";
      for (let j of get_values) {
        conc += j + " ";
      }
      console.log(i + " -> " + conc);
    }
  }

  bfs(start, end) {
    let q = [];
    let visited = {};
    q.push([start]);

    while (q.length > 0) {
      // console.log("");
      let currentPath = q.shift();
      // console.log("Current Path: ", currentPath);
      const currentNode = currentPath[currentPath.length - 1];
      // console.log("Current Node: ", currentNode);
      visited[currentPath[currentPath.length - 1]] = true;
      // console.log("Nodes Visited: ", visited);
      let nextNodeList = this.adjList.get(currentNode);
      // console.log("adjacency list: ", nextNodeList);

      for (let i = 0; i < nextNodeList.length; i++) {
        if (end === nextNodeList[i]) {
          return [...currentPath, nextNodeList[i]];
        }
        if (!visited[nextNodeList[i]]) {
          q.push([...currentPath, nextNodeList[i]]);
        }
      }
    }
  }

  dfs(v) {
    // uses a stack to search
    return null;
  }
}

// testing
let g = new graph();
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addVertex("e");
g.addVertex("f");

g.addEdge("a", "b");
g.addEdge("a", "d");
g.addEdge("a", "e");
g.addEdge("b", "c");
g.addEdge("d", "e");
g.addEdge("e", "f");
g.addEdge("e", "c");
g.addEdge("c", "f");

g.printGraph();
console.log(g.bfs("a", "f"));
console.log(g.bfs("c", "f"));
