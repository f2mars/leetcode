import { leafSimilar, TreeNode } from "./script.js"

test(`
1     1
    
shold return true
`, () => {
    expect(
        leafSimilar(
            new TreeNode(1),
            new TreeNode(1) 
        )
    ).toBe(true);
});

test(`
1     0
    
shold return false
`, () => {
    expect(
        leafSimilar(
            new TreeNode(1),
            new TreeNode(0) 
        )
    ).toBe(false);
});

test(`
1     0
|
0
    
shold return true
`, () => {
    expect(
        leafSimilar(
            new TreeNode(1, new TreeNode(0)),
            new TreeNode(0) 
        )
    ).toBe(true);
});

test(`
    1     1
   / \\   / \\
  2   3 3   2
      
shold return false
`, () => {
    expect(
        leafSimilar(
            new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            new TreeNode(1, new TreeNode(3), new TreeNode(2)) 
        )
    ).toBe(false);
});

test(`
  1      0
  |     / \\
  0    1   3
 / \\       |
1   2      2
    
shold return true
`, () => {
    expect(
        leafSimilar(
            new TreeNode(1, new TreeNode(0, new TreeNode(1), new TreeNode(2))),
            new TreeNode(0, new TreeNode(1), new TreeNode(3, new TreeNode(2))) 
        )
    ).toBe(true);
});


test(`
  1      0
  |     / \\
  0    1   3
 / \\      / \\
1   2   null 2
    
shold return true
`, () => {
    expect(
        leafSimilar(
            new TreeNode(1, new TreeNode(0, new TreeNode(1), new TreeNode(2))),
            new TreeNode(0, new TreeNode(1), new TreeNode(3, null, new TreeNode(2))) 
        )
    ).toBe(true);
});

