import { NodeLinkedList } from "./LinkedNode";

class LinkedList<T> {
    public head: NodeLinkedList<T> | null;
    public tail: NodeLinkedList<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value: T): this {
        const newNode = new NodeLinkedList<T>(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
    prepend(value: T): this {
        const newNode = new NodeLinkedList<T>(value, this.head);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    }
    insert(value: T, index: number): this {
        return this;
    }

    private toArray(): NodeLinkedList<T>[] {
        const nodes: NodeLinkedList<T>[] = [];
        let currentNode: NodeLinkedList<T> | null = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }

    deleteHead(): void {
        if (this.head) {
            if (this.head.next) {
                this.head = this.head.next;
            } else {
                this.head = null;
                this.tail = null;
            }
        }
    }

    toString(): void {
        console.log(this.toArray().map((node) => node.value));
    }
}

const list = new LinkedList<string>();

list.append("hello");
list.append("hello2");
list.append("hello3");
list.append("hello4");
list.append("hello4");

list.toString();

list.deleteHead();
list.toString();
