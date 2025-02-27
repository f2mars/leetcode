// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Two Pointers
// Complexity: Time O(N), Space O(1)
function deleteMiddle(head: ListNode): ListNode | null {
    if (head.next === null) return null;

    let fastPointer = head.next.next;
    let slowPointer = head;

    while (slowPointer.next && fastPointer?.next) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next
    }

    slowPointer.next = slowPointer.next?.next ?? null;
    return head;
};

/* // Intuitive
// Complexity: Time O(N), Space O(1)
function deleteMiddle(head: ListNode): ListNode | null {
    if (head.next === null) return null;

    let current: ListNode | null = head;
    let preTail: ListNode | null = null;
    let postHead: ListNode | null = head.next;

    let i = 1;
    while (current !== null) {
        if (i % 2 === 0) {
            if (preTail === null) {
                preTail = head;
            } else {
                preTail = preTail.next;
            }

            if (postHead !== null) postHead = postHead.next;
        }
        current = current.next;
        i++;
    }

    if (preTail === null) return postHead;
    
    preTail.next = postHead;
    return head;
}; */

/*
1, 2, 3, 4, 5
0, 1, 1, 2, 2

Math.trunc(x / 2)
*/

export { deleteMiddle, ListNode }