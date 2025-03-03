// https://leetcode.com/problems/asteroid-collision/

// Time: O(N), Space: O(1)
function asteroidCollision(asteroids: number[]): number[] {
  for (let i = 0; i < asteroids.length;) {
    const ast = asteroids[i];

    if (i === 0 || ast > 0 || asteroids[i - 1] < 0) {
      i++;
      continue;
    }

    const prevAst = asteroids[i - 1];
    const collisionResult = ast + prevAst;

    if (collisionResult === 0) {
      asteroids.splice(i - 1, 2);
      i--;
    } else if (collisionResult < 0) {
      asteroids.splice(i - 1, 1);
      i--;
    } else {
      asteroids.splice(i, 1);
    }
  }
  
  return asteroids;
}

// Time: O(N), Space: O(N)
/*
function asteroidCollision(asteroids: number[]): number[] {
  const stack = [];

  for (let i = 0; i < asteroids.length;) {
    let ast = asteroids[i];
    if (ast > 0 || stack.length === 0 || stack[stack.length - 1] < 0) {
      stack.push(ast);
      i++;
      continue;
    }

    const prevAst = stack[stack.length - 1];
    const collisionResult = ast + prevAst;
    if (collisionResult === 0) {
      stack.pop();
      i++;
    } else if (collisionResult < 0) {
      stack.pop();
    } else {
      // just avoid a new ast
      i++;
    }
  }
  
  return stack;
}
*/

export { asteroidCollision }