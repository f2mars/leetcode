import { predictPartyVictory } from "./script.js";

test(`predictPartyVictory("R") should return "Radiant"`, () => {
    expect(predictPartyVictory("R")).toBe("Radiant");
});

test(`predictPartyVictory("D") should return "Dire"`, () => {
    expect(predictPartyVictory("D")).toBe("Dire");
});

test(`predictPartyVictory("DDRR") should return "Dire"`, () => {
    expect(predictPartyVictory("DDRR")).toBe("Dire");
});

test(`predictPartyVictory("RD") should return "Radiant"`, () => {
    expect(predictPartyVictory("RD")).toBe("Radiant");
});

test(`predictPartyVictory("RDD") should return "Dire"`, () => {
    expect(predictPartyVictory("RDD")).toBe("Dire");
});

test(`predictPartyVictory("DDRRR") should return "Dire"`, () => {
    expect(predictPartyVictory("DDRRR")).toBe("Dire");
});

test(`predictPartyVictory("RDDRRD") should return "Radiant"`, () => {
    expect(predictPartyVictory("RDDRRD")).toBe("Radiant");
});

test(`predictPartyVictory("RDDRRDD") should return "Dire"`, () => {
    expect(predictPartyVictory("RDDRRDD")).toBe("Dire");
});

test(`predictPartyVictory("RDDRRDD") should return "Dire"`, () => {
    expect(predictPartyVictory("RDDRRDD")).toBe("Dire");
});
