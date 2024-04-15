"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeLinkedList = void 0;
var NodeLinkedList = /** @class */ (function () {
    function NodeLinkedList(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return NodeLinkedList;
}());
exports.NodeLinkedList = NodeLinkedList;
