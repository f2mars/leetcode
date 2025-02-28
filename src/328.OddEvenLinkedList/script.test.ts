import { oddEvenList, ListNode } from "./script.js";

test("head = [] should return []", () => {
    expect(oddEvenList(new ListNode())).toStrictEqual(new ListNode());
});

test("head = [1] should return [1]", () => {
    expect(oddEvenList(new ListNode(1, null))).toStrictEqual(new ListNode(1, null));
});

test("head = [1, 2] should return [1, 2]", () => {
    expect(
        oddEvenList(new ListNode(1, new ListNode(2, null)))
    ).toStrictEqual(
        new ListNode(1, new ListNode(2, null))
    );
});

test("head = [1, 2, 3] should return [1, 3, 2]", () => {
    expect(
        oddEvenList(new ListNode(1, new ListNode(2, new ListNode(3, null))))
    ).toStrictEqual(
        new ListNode(1, new ListNode(3, new ListNode(2, null)))
    );
});

test("head = [1, 2, 3, 4] should return [1, 3, 2, 4]", () => {
    expect(
        oddEvenList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null)))))
    ).toStrictEqual(
        new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(4, null))))
    );
});

test("head = [1, 2, 3, 4, 5] should return [1, 3, 5, 2, 4]", () => {
    expect(
        oddEvenList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))))
    ).toStrictEqual(
        new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(2, new ListNode(4, null)))))
    );
});

test("head = [2, 1, 3, 5, 6, 4, 7] should return [2, 3, 6, 7, 1, 5, 4]", () => {
    expect(
        oddEvenList(new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7, null))))))))
    ).toStrictEqual(
        new ListNode(2, new ListNode(3, new ListNode(6, new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(4, null)))))))
    );
});

test("head = [-111, -222, 333, 0, 0, 1] should return [-111, 333, 0, -222, 0, 1]", () => {
    expect(
        oddEvenList(new ListNode(-111, new ListNode(-222, new ListNode(333, new ListNode(0, new ListNode(0, new ListNode(1, null)))))))
    ).toStrictEqual(
        new ListNode(-111, new ListNode(333, new ListNode(0, new ListNode(-222, new ListNode(0, new ListNode(1, null))))))
    );
});

test("head = [-1000000, 1000000, -999999] should return [-1000000, -999999, 1000000]", () => {
    expect(
        oddEvenList(new ListNode(-1000000, new ListNode(1000000, new ListNode(-999999, null))))
    ).toStrictEqual(
        new ListNode(-1000000, new ListNode(-999999, new ListNode(1000000, null)))
    );
});