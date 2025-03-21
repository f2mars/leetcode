import { TreeNode, inorderTraversal } from "./script.js";

test("null should return []", () => {
    expect(inorderTraversal(null)).toStrictEqual([]);
});

test("1 (with implicit nulls) should return [1]", () => {
    expect(inorderTraversal(new TreeNode(1))).toStrictEqual([1]);
});

test(`1 should return [1]
`, () => {
    expect(inorderTraversal(new TreeNode(1, null, null))).toStrictEqual([1]);
});

test("1 (with explicit nulls) should return [1]", () => {
    expect(inorderTraversal(new TreeNode(1))).toStrictEqual([1]);
});

test(`
    1 
  /   \\
null null
    
should return [1]
`, () => {
    expect(inorderTraversal(new TreeNode(1, null, null))).toStrictEqual([1]);
});