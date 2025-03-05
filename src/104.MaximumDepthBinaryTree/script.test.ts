import { maxDepth, TreeNode } from "./script.js";

test(`null should return 0`, () => {
    expect(maxDepth(null)).toBe(0);
})

test(`
1 (with implicit nulls)

should return 1
`, () => {
    expect(maxDepth(new TreeNode(1))).toBe(1);
})

test(`
    0
   / \\
null  null
(with explicit nulls)

should return 1
`, () => {
    expect(maxDepth(new TreeNode(1, null, null))).toBe(1);
})

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

test(`   
         0
       /   \\
      /     \\
    -99      20
    / \\     /  \\
   0 null  null 2
  / \\          / \\
null 8      null null

should return 4
`, () => {
expect(
    maxDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))
).toBe(4);
})

test(`   
            0
          /   \\
         /     \\
       -99      20
       / \\     /  \\
      0 null  null 2
     / \\          / \\
   null 8      null null
       / \\
      1   null
     / \\ 
   -1  null
   / \\   
null null

should return 6
`, () => {
expect(
maxDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))
).toBe(6);
})
