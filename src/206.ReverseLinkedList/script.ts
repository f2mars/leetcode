// https://leetcode.com/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    return null;
};

export { reverseList, ListNode }