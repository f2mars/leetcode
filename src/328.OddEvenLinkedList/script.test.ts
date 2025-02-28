import { oddEvenList, ListNode } from "./script.js";

test("head = [1] should return [1]", () => {
    expect(oddEvenList(new ListNode(1, null))).toStrictEqual(new ListNode(1, null));
});