
class Node {
    data = null;
    next = null;
}
class linkList {
    startNode = null;
    constructor(data) {
        this.startNode = new Node()
        this.startNode.data = data;
    }
    insertAtFirst(data) {
        const node = new Node()
        node.data = data;
        node.next = this.startNode;
        this.startNode = node;
    }
}

const list=new linkList(5);
list.insertAtFirst(10);


console.log(list)