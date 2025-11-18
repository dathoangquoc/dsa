export default class Node {
    data: any
    left: Node | null
    right: Node | null

    constructor(x: any) {
        this.data = x;
        this.left = null;
        this.right = null;
    }

    isLeaf(): boolean {
        if (!this.left || !this.right) return true;
        return false;
    }
}