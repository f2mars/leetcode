// https://leetcode.com/problems/odd-even-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

// Constraints:
// Number of nodes: [0, 10^4]
// -10^6 <= Node.val <= 10^6

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


// Simplify
// Complexity: Time O(N), Space O(1)
function oddEvenList(head: ListNode | null): ListNode | null {
    if (head == null) return null;
    let oddTail = head;
    let evenTail = head.next;
    let even = evenTail;

    while (evenTail != null && evenTail.next != null) {
        oddTail.next = evenTail.next;
        oddTail = oddTail.next;
        evenTail.next = oddTail.next;
        evenTail = evenTail.next;
    }

    oddTail.next = even;
    return head;
};

// Move Even nodes to the end
// Complexity: Time O(N), Space O(1)
/* function oddEvenList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;

    let tail = head;
    let length = 1;
    while (tail.next !== null) {
        tail = tail.next;
        length++;
    }

    for (let i = 1, pointer = head; 
        pointer.next !== null && pointer.next.next !== null && i <= length / 2; 
        i++
    ) {
        tail.next = pointer.next;
        tail = tail.next;

        pointer.next = pointer.next.next;
        pointer = pointer.next;
    }

    tail.next = null;
    return head;
}; */

export { oddEvenList, ListNode }