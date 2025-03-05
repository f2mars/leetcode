// https://leetcode.com/problems/maximum-depth-of-binary-tree/

/* 
Constraints:
The number of nodes in the tree is in the range [0, 10^4].
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

function maxDepth(root: TreeNode | null): number {
    return 0;
};

export { maxDepth, TreeNode }