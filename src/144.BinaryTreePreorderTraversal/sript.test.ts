import { TreeNode, preorderTraversal } from "./script.js";

test(`null should return null
`, () => {
    expect(preorderTraversal(null)).toBe(null);
});

test(`
1 (with implicit nulls) should return [1]
`, () => {
    expect(preorderTraversal(new TreeNode(1))).toStrictEqual([1]);
});

test(`
    1 
  /   \\
null null
    
should return [1]
`, () => {
    expect(preorderTraversal(new TreeNode(1, null, null))).toStrictEqual([1]);
});

test(`
    1 
  /   \\
null   2
      / 
     3
    
should return [1,2,3]
`, () => {
    expect(preorderTraversal(new TreeNode(1, null, null))).toStrictEqual([1,2,3]);
});

test(`
      1 
   /    \\
  2      3
 / \\      \\
4   5      8
   / \\    / 
  6   7  9
    
should return [1,2,4,5,6,7,3,8,9]
`, () => {
    expect(preorderTraversal(
        new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(6), new TreeNode(7))), new TreeNode(3, null, new TreeNode(8, new TreeNode(9)))))
    ).toStrictEqual([1,2,4,5,6,7,3,8,9]);
});