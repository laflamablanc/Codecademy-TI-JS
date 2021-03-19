// TreeNode

class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  
    addChild(child){
      if (child.constructor.name === "TreeNode") {
        this.children.push(child)
      } else {
        const tree = new TreeNode(child)
        this.children.push(tree)
      }
    }
  };