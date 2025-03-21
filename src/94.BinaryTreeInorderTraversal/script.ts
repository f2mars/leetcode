// https://leetcode.com/problems/binary-tree-inorder-traversal/

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
 
// Recursive
// Complexity: Time O(N), Space O(N)
function inorderTraversal(root: TreeNode | null): number[] {
    if (root === null) return [];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};

/* 
// Stack
// Complexity: Time O(N), Space O(N)
function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let currentNode = root;

    while (currentNode !== null || stack.length !== 0) {
        while (currentNode !== null) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }

        currentNode = stack.pop()!;
        result.push(currentNode.val);
        currentNode = currentNode.right;
    }

    return result;
};
 */

export { TreeNode, inorderTraversal }