class Queue<T> {
    private queue: T[];
    constructor() {
        this.queue = [];
    }

    peek(): T | undefined {
        return this.queue[0];
    }

    enQueue(value: T): void {
        this.queue.unshift(value);
    }
    deQueue(): T | undefined {
        return this.isEmpty() ? this.queue.pop() : undefined;
    }

    isEmpty(): boolean {
        return this.queue.length > 0;
    }

    toString() {
        console.log(this.queue);
    }
    removeShipper(value: T | undefined): void {
        if (value) {
            this.queue = this.queue.filter((t) => t !== value);
        }
    }
}
class Shipper {
    private name: string;
    private old: number;
    private vehicle: "bike" | "car";
    private distance: number;
    constructor(name: string, old: number, vehicle: any, distance: number) {
        this.name = name;
        this.old = old;
        this.vehicle = vehicle;
        this.distance = distance;
    }
}

let shipper = [
    { id: 1, name: "TuấnD", old: 23, vehicle: "bike", distance: 1.203 },
    { id: 2, name: "TuấnD", old: 23, vehicle: "bike", distance: 1.203 },
    { id: 3, name: "TuấnD", old: 23, vehicle: "bike", distance: 1.203 },
    { id: 4, name: "TuấnD", old: 23, vehicle: "bike", distance: 1.203 },
    { id: 5, name: "TuấnD", old: 23, vehicle: "bike", distance: 1.203 },
];
interface IShipper {
    id: number;
    name: string;
    old: number;
    vehicle: string;
    distance: number;
}
const shipperFree = new Queue<IShipper>();

shipper.map((value) => {
    shipperFree.enQueue(value);
});

shipperFree.toString();
shipperFree.removeShipper(shipper.find((v) => v.id == 3));
shipperFree.toString();
