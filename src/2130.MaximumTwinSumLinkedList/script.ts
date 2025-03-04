// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

/* 
Constraints:
The number of nodes in the list is an even integer in the range [2, 10^5].
1 <= Node.val <= 10^5 
*/


// The ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// Reverse list's second half
// Compexity: Time O(N), Space O(1)
function pairSum(head: ListNode | null): number {
    let fastPoint = head;
    let slowPoint = head;

    // findle the middle point
    while (fastPoint !== null && fastPoint.next !== null && slowPoint !== null) {
        fastPoint = fastPoint.next.next
        slowPoint = slowPoint.next;
    }

    // reverse second half
    let prev = null;
    let cur = slowPoint;
    while (cur !== null) {
        const next = cur.next;

        cur.next = prev;
        prev = cur;
        cur = next;

        // Same in one operation, but slower: 
        // [cur.next, prev, cur] = [prev, cur, cur.next];
    }

    // prev = reversed half head
    let maxSum = 0;
    while (prev !== null && head !== null) {
        const sum = prev.val + head.val;
        if (sum > maxSum) maxSum = sum;

        prev = prev.next;
        head = head.next;
    }

    return maxSum;
};

// Intuitive
// Compexity: Time O(N), Space O(N)
/* function pairSum(head: ListNode | null): number {
    let listLength = 0;
    for (let pointer = head; pointer !== null; pointer = pointer.next) {
        listLength++;
    }

    const sums: number[] = [];
    let poiner = head;
    for (let i = 0; i < listLength / 2 && poiner !== null; poiner = poiner.next, i++) {
        sums.push(poiner.val);
    }

    let maxSum = 0;
    while (poiner !== null) {
        const sum = poiner.val + Number(sums.pop());
        if (sum > maxSum) maxSum = sum;
        poiner = poiner.next;
    }

    return maxSum;
}; */

export { pairSum, ListNode }