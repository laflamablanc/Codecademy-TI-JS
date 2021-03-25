const testGraph = require('./testGraph.js');

const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
    //accepts a callback function if you want
    callback(start)
    start.edges.forEach((edge) => {
      const neighbor = edge.end;
  
      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor);
        depthFirstTraversal(neighbor, callback, visitedVertices);
      }
    });
  };

depthFirstTraversal(testGraph.vertices[0]);