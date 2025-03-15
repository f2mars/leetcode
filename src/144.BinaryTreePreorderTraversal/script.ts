// https://leetcode.com/problems/binary-tree-preorder-traversal/

/* 
Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// Iterative solution
// Comlexity: Time O(N), Space(N)
function preorderTraversal(root: TreeNode | null): number[] {
    if (root === null) return [];

    const nodeValues: number [] = [];
    const stack: TreeNode[] = [root];

    while (stack.length !== 0) {
        const currentNode: TreeNode = stack.pop()!;
        nodeValues.push(currentNode.val);
        if (currentNode.right !== null) stack.push(currentNode.right);
        if (currentNode.left !== null) stack.push(currentNode.left);
    }

    return nodeValues;
};

/* 
// Intuitive solution
// Comlexity: Time O(N), Space(N)
function preorderTraversal(root: TreeNode | null): number[] {
    if (root === null) return [];
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
}; 
*/

export { TreeNode, preorderTraversal }