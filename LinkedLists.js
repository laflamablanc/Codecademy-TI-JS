// --- Swapping Nodes in a LL ---

//First must find nodes before swap
//Set Node1 equal to head of the list and then create while loop to iterate until find data

function swapNodes(list,data1,data2){
    //data1 and data2 represent the data you're looking for in each node in order to swap the two
    let node1 = list.head;
    let node2 = list.head;
    let node1Prev = null;
    let node2Prev = null;
    // finding the node
    while (node1 !== null){
        if (node1.data === data1){
            break;
        }
        node1Prev = node1
        node1 = node1.getNextNode()
    }

    while (node2 !== null){
        if (node2.data === data2){
            break;
        }
        node2Prev = node2
        node2 = node2.getNextNode()
    }

    //Update the Previous Nodes for each
    
    if (node1Prev === null){
        list.head = node2
    } else {
        node1Prev.setNextNode(node2)
    }

    if (node2Prev === null){
        list.head = node1
    } else {
        node2Prev.setNextNode(node1)
    }
}