// https://leetcode.com/problems/number-of-recent-calls/description/?envType=study-plan-v2&envId=leetcode-75

// Complexity: Time O(1), Space O(N)
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

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

export { RecentCounter }