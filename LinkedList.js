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

// --- Two Pointer Moving in Parallel ---

// Create a fucntion that returns the nth last element of a singly linked list
// Requires knowing how far from end you are. No easy way to iterate back once find end

// Approach 1 - Store each node in an array as you iterate then call array[array.length-n]

const arrayNthLast = (list, n) => {
    const linkedListArray = []
    let currentNode = list.removeHead()
    while (currentNode){
        linkedListArray.push(currentNode)
        currentNode = currentNode.getNextNode()
    }
    return list[list.length - n]
}

// Approach 2 - Instead of creating entire parallel list, use 2 pointers at diff positions in list
// but moving at the same rate

// One pointer iterates through the entire list, but we'll also move a second pointer delayed steps
//behind the lead pointer, so when it reaches the end its in position

const findNthNode = (n) => {
    nthLastNodePointer = null
    tailPointer = this.head 
    count = 0

    while (tailPointer){
        tailPointer = tailPointer.getNextNode()

        if (count >= n){
            if (nthLastNodePointer === null){
                nthLastNodePointer = this.head
            } else {
                nthLastNodePointer = nthLastNodePointer.getNextNode()
            }
            count += 1
        }
        return nthLastNodePointer
    }
}

// --- Pointers at Different Speeds ---
// Find the middle node of a linked list
// 1st pointer takes 2 steps for every one 


