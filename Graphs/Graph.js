const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {

    constructor(){
        this.vertices = [],
    }

    addVertex(data){
        const vertex = new Vertex(data)
        this.vertices.push(vertex)
        return vertex
    }
  
    print() {
        const vertexList = this.vertices || [];
        vertexList.forEach(vertex => vertex.print());
    }
}

module.exports = Graph;