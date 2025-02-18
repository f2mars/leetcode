import { asteroidCollision } from "./script.js";

test("asteroidCollision([5, 10, -5]) should return [5, 10]", () => {
  expect(asteroidCollision([5, 10, -5])).toStrictEqual([5, 10]);
});

test("asteroidCollision([8,-8]) should return []", () => {
  expect(asteroidCollision([8,-8])).toStrictEqual([]);
});

test("asteroidCollision([10,2,-5]) should return [10]", () => {
  expect(asteroidCollision([10,2,-5])).toStrictEqual([10]);
});

test("asteroidCollision([10,2,-2, -10]) should return []", () => {
  expect(asteroidCollision([10,2,-2, -10])).toStrictEqual([]);
});

test("asteroidCollision([-2,-1,1,2]) should return [-2,-1,1,2]", async () => {
  expect(asteroidCollision([-2,-1,1,2])).toStrictEqual([-2,-1,1,2]);
}, 1000);