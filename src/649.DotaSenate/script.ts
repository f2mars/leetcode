// https://leetcode.com/problems/dota2-senate/description/?envType=study-plan-v2&envId=leetcode-75

// Recursion.
// Complexity: Time O(log2N ??), Space O(1)
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