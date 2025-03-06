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

// Intuition: Collect leaft in separete arrays using recursion
// Complexity: Time O(N), Space O(N)
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const collectLeafs = (tree: TreeNode | null, storage: number[]) => {
        if (tree === null) return;
        if (tree.left === null && tree.right === null) {
            storage.push(tree.val);
            return;
        } 

        collectLeafs(tree.left, storage);
        collectLeafs(tree.right, storage); 
    }

    const leafs1: number[] = [];
    const leafs2: number[] = [];

    collectLeafs(root1, leafs1);
    collectLeafs(root2, leafs2);

    if (leafs1.length !== leafs2.length) return false;

    for (let i = 0; i < leafs1.length; i++) {
        if (leafs1[i] !== leafs2[i]) return false;
    }

    return true;
};

export { leafSimilar, TreeNode }