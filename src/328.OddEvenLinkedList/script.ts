// https://leetcode.com/problems/odd-even-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

// Constraints:
// Number of nodes: [0, 10^4]
// -10^6 <= Node.val <= 10^6

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function oddEvenList(head: ListNode | null): ListNode | null {
    return head;
};

export { oddEvenList, ListNode }