import { reverseList, ListNode } from "./script.js";

test("head = [1,2,3,4,5] should return [5,4,3,2,1]", () => {
    expect(
        reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))))
    ).toStrictEqual(
        new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1, null)))))
    )
})

test("head = [] should return []", () => {
    expect(reverseList(new ListNode())).toStrictEqual(new ListNode());
})

test("head = [1] should return [1]", () => {
    expect(reverseList(new ListNode(1, null))).toStrictEqual(new ListNode(1, null));
})

test("head = [1,2] shoudl return [2,1]", () => {
    expect(new ListNode(1, new ListNode(2, null))).toStrictEqual(new ListNode(2, new ListNode(1, null)))
})

test("head = [-5000,5000,0,4999] shoudl return [4999,0,5000,-5000]", () => {
    expect(new ListNode(-5000, new ListNode(5000, new ListNode(0, new ListNode(4999, null))))).toStrictEqual(new ListNode(4999, new ListNode(0, new ListNode(5000, new ListNode(-5000, null)))))
})