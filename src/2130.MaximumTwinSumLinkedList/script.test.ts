import { pairSum, ListNode } from "./script.js";

test("head = [5,4,2,1] should return 6", () => {
    expect(pairSum(new ListNode(5, new ListNode(4, new ListNode(2, new ListNode(1, null)))))).toBe(6);
});

//head = [4,2,2,3] to be 7
// head = [1,100000] to be 100001