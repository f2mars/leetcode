import { TreeNode, inorderTraversal } from "./script.js";

test("null should return []", () => {
    expect(inorderTraversal(null)).toStrictEqual([]);
});

test("1 (with implicit nulls) should return [1]", () => {
    expect(inorderTraversal(new TreeNode(1))).toStrictEqual([1]);
});

test("1 (with explicit nulls) should return [1]", () => {
    expect(inorderTraversal(new TreeNode(1, null, null))).toStrictEqual([1]);
});

test(`
    1 
  /   \\
null null
    
should return [1]
`, () => {
    expect(inorderTraversal(new TreeNode(1, null, null))).toStrictEqual([1]);
});

test(`
    1 
  /   \\
null   2
      / 
     3
    
should return [1,3,2]
`, () => {
    expect(inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3))))).toStrictEqual([1,3,2]);
});

test(`
      1 
   /    \\
  2      3
 / \\      \\
4   5      8
   / \\    / 
  6   7  9
  
should return [4,2,6,5,7,1,3,9,8]
`, () => {
  expect(inorderTraversal(
      new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(6), new TreeNode(7))), new TreeNode(3, null, new TreeNode(8, new TreeNode(9)))))
  ).toStrictEqual([4,2,6,5,7,1,3,9,8]);
});