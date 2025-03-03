// https://leetcode.com/problems/reverse-linked-list/
/* 
Constraints:
- The number of nodes in the list is the range [0, 5000].
- -5000 <= Node.val <= 5000
*/

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// Itarative
// Comlexity: Time O(N), Space O(1)
function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;

    let reversed: ListNode | null = null;
    let pointer: ListNode | null = head;
    while (pointer !== null) {
        reversed = new ListNode(pointer.val, reversed); 
        pointer = pointer.next;
    }

    return reversed;
};

// Recursion
// Comlexity: Time O(N), Space O(N)
/* function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;

    const _reverseList = (head: ListNode): { head: ListNode, tail: ListNode } => {
        if (head.next === null) {
            return { head: head, tail: head }
        }

        const reversed = _reverseList(head.next);
        head.next = null;
        reversed.tail.next = head;
        reversed.tail = reversed.tail.next;

        return reversed;
    }

    return _reverseList(head).head;
}; */

export { reverseList, ListNode }