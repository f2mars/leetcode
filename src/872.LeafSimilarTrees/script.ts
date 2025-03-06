// https://leetcode.com/problems/leaf-similar-trees

/*
Constraints:

The number of nodes in each tree will be in the range [1, 200].
Both of the given trees will have values in the range [0, 200].
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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    return true;
};

export { leafSimilar, TreeNode }