// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Intuitive
// Complexity: Time O(N), Space O(1)
function deleteMiddle(head: ListNode): ListNode | null {
    return head;
};

/*
1, 2, 3, 4, 5
0, 1, 1, 2, 2

Math.trunc(x / 2)
*/

export { deleteMiddle, ListNode }