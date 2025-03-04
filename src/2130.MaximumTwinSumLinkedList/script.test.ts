import { pairSum, ListNode } from "./script.js";

test("head = [1,100000] should return 100001", () => {
    expect(pairSum(new ListNode(1, new ListNode(100000, null)))).toBe(100001);
});

test("head = [5,4,2,1] should return 6", () => {
    expect(pairSum(new ListNode(5, new ListNode(4, new ListNode(2, new ListNode(1, null)))))).toBe(6);
});

test("head = [4,2,2,3] should return 7", () => {
    expect(pairSum(new ListNode(4, new ListNode(2, new ListNode(2, new ListNode(3, null)))))).toBe(7);
});

test("head = [4,2,7,1,2,3] should return 8", () => {
    expect(pairSum(new ListNode(4, new ListNode(2, new ListNode(7, new ListNode(1, new ListNode(2, new ListNode(3, null)))))))).toBe(8);
});