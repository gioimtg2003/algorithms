"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedNode_1 = require("./LinkedNode");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.append = function (value) {
        var newNode = new LinkedNode_1.NodeLinkedList(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    };
    LinkedList.prototype.prepend = function (value) {
        var newNode = new LinkedNode_1.NodeLinkedList(value, this.head);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    };
    LinkedList.prototype.insert = function (value, index) {
        return this;
    };
    LinkedList.prototype.toArray = function () {
        var nodes = [];
        var currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    };
    LinkedList.prototype.deleteHead = function () {
        if (this.head) {
            if (this.head.next) {
                this.head = this.head.next;
            }
            else {
                this.head = null;
                this.tail = null;
            }
        }
    };
    LinkedList.prototype.toString = function () {
        console.log(this.toArray().map(function (node) { return node.value; }));
    };
    return LinkedList;
}());
var list = new LinkedList();
list.append("hello");
list.append("hello2");
list.append("hello3");
list.append("hello4");
list.append("hello4");
list.toString();
list.deleteHead();
list.toString();
