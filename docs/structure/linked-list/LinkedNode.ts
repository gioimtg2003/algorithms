export class NodeLinkedList<T> {
    public value: T;
    public next: NodeLinkedList<T> | null;
    constructor(value: T, next: NodeLinkedList<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}
