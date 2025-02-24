import { RecentCounter } from './script.js';

test(`["RecentCounter","ping","ping","ping","ping"] should return [[],[1],[100],[3001],[3002]]`, () => {
    const recentCounter = new RecentCounter();
    expect(recentCounter.ping(1)).toBe(1);
    expect(recentCounter.ping(100)).toBe(2);
    expect(recentCounter.ping(3001)).toBe(3);
    expect(recentCounter.ping(3002)).toBe(3);
  });
  