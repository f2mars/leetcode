
// Time: O(N), Space: O(N)
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

export { asteroidCollision }