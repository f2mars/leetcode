// https://leetcode.com/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=leetcode-75
/* 
Constraints:
- The number of nodes in the list is the range [0, 5000].
- -5000 <= Node.val <= 5000
*/

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