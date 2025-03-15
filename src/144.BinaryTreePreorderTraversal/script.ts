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

// Morris traversal solution
// Comlexity: Time O(N), Space(N)
function preorderTraversal(root: TreeNode | null): number[] {
    if (root === null) return [];

    const nodeValues: number [] = [];
    let parentNode: TreeNode | null = root;
    let childNode: TreeNode;

    while (parentNode !== null) {
        if (parentNode.left === null) {
            nodeValues.push(parentNode.val);
            parentNode = parentNode.right;
        } else {
            childNode = parentNode.left;

            while (childNode.right !== null && childNode.right !== parentNode) {
                childNode = childNode.right;
            }

            if (childNode.right === null) {
                nodeValues.push(parentNode.val);
                childNode.right = parentNode;
                parentNode = parentNode.left;
            } else if (childNode.right === parentNode) {
                childNode.right = null;
                parentNode = parentNode.right;
            }

        }
    }

    return nodeValues;
};

/* 
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
 */

/* 
// Intuitive solution
// Comlexity: Time O(N), Space(N)
function preorderTraversal(root: TreeNode | null): number[] {
    if (root === null) return [];
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
}; 
*/

export { TreeNode, preorderTraversal }