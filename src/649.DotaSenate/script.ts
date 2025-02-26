// https://leetcode.com/problems/dota2-senate/description/?envType=study-plan-v2&envId=leetcode-75

// Two Queues
// Complexity: Time O(N), Space O(N)
type QueueElement = {
    value: number,
    next: QueueElement | null
}

class NumsQueue {
    head: QueueElement | null;
    tail: QueueElement | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value: number) {
        const newElem = {
            value: value,
            next: null
        }

        if (this.tail !== null) {
            this.tail.next = newElem;
            this.tail = this.tail.next;
        } else {
            this.tail = newElem;
        }

        if (this.head === null) this.head = newElem;
    }

    shift() {
        if (this.head === null) return null;
        const value = this.head.value;
        this.head = this.head.next;
        
        if (this.head === null) this.tail = null;
        return value;
    }
}

function predictPartyVictory(senate: string): string {
    const rQueue = new NumsQueue();
    const dQueue = new NumsQueue();
    const n = senate.length;
    
    for (let i = 0; i < n; i++) {
        senate[i] == "R" ? rQueue.append(i) : dQueue.append(i);
    }
    
    while (dQueue.head !== null && rQueue.head !== null) {
        const dTurn = dQueue.shift();
        const rTurn = rQueue.shift();

        if (dTurn === null || rTurn === null) break;

        dTurn < rTurn ? dQueue.append(dTurn + n) : rQueue.append(rTurn + n);
    }

    return rQueue.head === null ? "Dire" : "Radiant";
};

/* Recursion.
// Complexity: Time O(log2N ??), Space O(N)
function predictPartyVictory(senate: string): string {
    const _doRound = function(senate: string, power: number): string {
        let hasR = false;
        let hasD = false;
        let alived = "";

        for (let i = 0; i < senate.length; i++) {
            if (senate[i] === "R") {
                if (power >= 0) {
                    alived += "R";
                    hasR = true;
                }
                power++;
            } else {
                if (power <= 0) {
                    alived += "D";
                    hasD = true;
                }
                power--;
            }
        }

        return hasD ? hasR ? _doRound(alived, power) : "Dire" : "Radiant";
    }

    return _doRound(senate, 0);
};
*/

/* This will work onyl for a single round
function predictPartyVictory(senate: string): string {
    let result = 0;
    let leader = null;

    for (let actor of senate) {
        if (result === 0) leader = actor;

        if (actor === "R") {
            result++;
        } else {
            result--;
        }
    }

    return leader === "R" ? "Radiant" : "Dire" ;
};
*/

export { predictPartyVictory }