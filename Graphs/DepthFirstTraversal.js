const testGraph = require('./testGraph.js');

const depthFirstTraversal = (start, visitedVertices = [start]) => {
    if (start.edges.length > 0){
      const neighbor = start.edges[0].end
      if (!visitedVertices.includes(neighbor)){
        visitedVertices.push(neighbor)
        depthFirstTraversal(neighbor, visitedVertices)
      }
    }
  
};
  
  depthFirstTraversal(testGraph.vertices[0]);