export class Node {
    data: any
    left: Node | null
    right: Node | null

    constructor(x: any) {
        this.data = x;
        this.left = null;
        this.right = null;
    }

    isLeaf(): boolean {
        if (!this.left && !this.right) return true;
        return false;
    }
}

export function getSize(root: Node | null): number {
    if (!root) return 0;

    let left = getSize(root.left);
    let right = getSize(root.right);

    return left + right + 1
}