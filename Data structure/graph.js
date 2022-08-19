class Graph{
    constructor(){
        this.nodes = 0;
        this.adjList = {};
    }
    addVertex(vertex){
        this.adjList[vertex] = [];
        this.nodes++;
    }

    addEdge(vertex1, vertex2){
        this.adjList[vertex1].push(vertex2);
        this.adjList[vertex2].push(vertex1);
    }
}