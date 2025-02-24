import { predictPartyVictory } from "./script.js";

test(`predictPartyVictory("RD") should return "Radiant"`, () => {
    expect(predictPartyVictory("RD")).toBe("Radiant");
});

test(`predictPartyVictory("RDD") should return "Dire"`, () => {
    expect(predictPartyVictory("RDD")).toBe("Dire");
});
