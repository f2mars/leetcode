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

// Intuitive solution
// Comlexity: Time O(N), Space(N)
function preorderTraversal(root: TreeNode | null): number[] {
    if (root === null) return [];
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
};

export { TreeNode, preorderTraversal }