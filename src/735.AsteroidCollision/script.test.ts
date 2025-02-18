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