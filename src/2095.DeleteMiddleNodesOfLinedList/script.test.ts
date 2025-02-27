import { deleteMiddle, ListNode } from "./script.js";

test(`head = [1,3,4,7,1,2,6] should return [1,3,4,1,2,6]`, () => {
    expect(
        deleteMiddle(new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(7, new ListNode(1, new ListNode(2, new ListNode(6, null))))))))
    ).toStrictEqual(
        new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(1, new ListNode(2, new ListNode(6, null))))))
    );
});

test(`head = [1,2,3,4] should return [1,2,4]`, () => {
    expect(
        deleteMiddle(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))))
    ).toStrictEqual(
        new ListNode(1, new ListNode(2, new ListNode(4)))
    );
});

test(`head = [2,1] should return [2]`, () => {
    expect(
        deleteMiddle(new ListNode(2, new ListNode(1, null)))
    ).toStrictEqual(new ListNode(2, null));
});