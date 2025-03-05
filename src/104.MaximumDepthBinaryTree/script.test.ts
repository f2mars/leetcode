import { maxDepth, TreeNode } from "./script.js";

test(`
    1
   / \\
null  2

should return 2
`, () => {
    expect(maxDepth(new TreeNode(1, null, new TreeNode(2)))).toBe(2);
})

test(`   
    3
  /   \\
 /     \\
9       20
/ \\     /  \\
null null 15   7

should return 3
`, () => {
expect(
    maxDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))
).toBe(3);
})

