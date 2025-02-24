// https://leetcode.com/problems/number-of-recent-calls/description/?envType=study-plan-v2&envId=leetcode-75

// Complexity: Time O(1), Space O(1)
// Linked list

type Call = {
    ms: number,
    next: Call | null
}
class RecentCounter {
    firstCall: Call | null;
    lastCall: Call | null;
    callsCount: number;

    constructor() {
        this.firstCall = null;
        this.lastCall = null;
        this.callsCount = 0;
    }   

    ping(t: number): number {
        const rescentStartTime = t - 3000;
        const newCall: Call = {
            ms: t,
            next: null
        }

        if (this.firstCall === null || (this.lastCall !== null && this.lastCall.ms < rescentStartTime)) {
            this.firstCall = newCall;
            this.lastCall = newCall;
            this.callsCount = 1;
            return this.callsCount;
        }

        while (this.firstCall !== null && this.firstCall.ms < rescentStartTime) {
            this.firstCall = this.firstCall.next;
            this.callsCount--;
        }

        if (this.lastCall !== null) this.lastCall.next = newCall;

        this.lastCall = newCall;
        this.callsCount++;

        return this.callsCount;
    }
}

/* Complexity: Time O(1), Space O(1)
// Sliding window
class RecentCounter {
    calls: number[];

    constructor() {
        this.calls = [];
    }

    ping(t: number): number {
        const rescentStartTime = t - 3000;

        let toObsolete = 0;
        for (let i = 0; i < this.calls.length; i++) {
            if (this.calls[i] < rescentStartTime) {
                toObsolete++;
            } else {
                break;
            }
        }

        if (toObsolete > 0) this.calls.splice(0, toObsolete);
        this.calls.push(t);

        return this.calls.length;
    }
}
*/

/* Complexity: Time O(1), Space O(3000) = O(1)
// Array
class RecentCounter {
    calls: number[];

    constructor() {
        this.calls = [];
    }

    ping(t: number): number {
        this.calls.push(t);
        const rescentStart = t - 3000;
        const oldestRescent = this.calls.find(call => call >= rescentStart) ?? t;
        return this.calls.length - this.calls.indexOf(oldestRescent);
    }
}
*/

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

export { RecentCounter }