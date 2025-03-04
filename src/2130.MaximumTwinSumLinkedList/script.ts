// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

/* 
Constraints:
The number of nodes in the list is an even integer in the range [2, 105].
1 <= Node.val <= 105 
*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function pairSum(head: ListNode | null): number {
    return 1;
};

export { pairSum, ListNode }