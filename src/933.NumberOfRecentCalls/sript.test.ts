import { RecentCounter } from './script.js';

test(`RecentCounter(); 
    ping(1); 
    should return 
    1`, () => {
    const recentCounter = new RecentCounter();
    expect(recentCounter.ping(1)).toBe(1);
  });

test(`RecentCounter(); 
    ping(10000); 
    should return 
    1`, () => {
    const recentCounter = new RecentCounter();
    expect(recentCounter.ping(10000)).toBe(1);
  });

test(`RecentCounter(); 
    ping(1); 
    ping(3002); 
    should return 
    1, 1`, () => {
    const recentCounter = new RecentCounter();
    expect(recentCounter.ping(10000)).toBe(1);
  });

test(`RecentCounter(); 
    ping(1); 
    ping(3002); 
    should return 
    1, 1`, () => {
    const recentCounter = new RecentCounter();
    expect(recentCounter.ping(1)).toBe(1);
    expect(recentCounter.ping(100)).toBe(2);
    expect(recentCounter.ping(3001)).toBe(3);
    expect(recentCounter.ping(3002)).toBe(3);
  });
  

test(`RecentCounter(); 
    ping(642); 
    ping(1849); 
    ping(4921); 
    ping(5936); 
    ping(5937); 
    should return 
    1, 2, 1, 2, 3`, () => {
    const recentCounter = new RecentCounter();
    expect(recentCounter.ping(642)).toBe(1);
    expect(recentCounter.ping(1849)).toBe(2);
    expect(recentCounter.ping(4921)).toBe(1);
    expect(recentCounter.ping(5936)).toBe(2);
    expect(recentCounter.ping(5937)).toBe(3);
  });

test(`RecentCounter(); 
    ping(95616); 
    ping(113489); 
    ping(119737); 
    ping(262253); 
    ping(361209); 
    ping(424697); 
    ping(536658); 
    ping(644230); 
    ping(900217); 
    ping(999444); 
    should return 
    1, 2, 1, 2, 3`, () => {
    const recentCounter = new RecentCounter();
    expect(recentCounter.ping(95616)).toBe(1);
    expect(recentCounter.ping(113489)).toBe(1);
    expect(recentCounter.ping(119737)).toBe(1);
    expect(recentCounter.ping(262253)).toBe(1);
    expect(recentCounter.ping(361209)).toBe(1);
    expect(recentCounter.ping(424697)).toBe(1);
    expect(recentCounter.ping(536658)).toBe(1);
    expect(recentCounter.ping(644230)).toBe(1);
    expect(recentCounter.ping(900217)).toBe(1);
    expect(recentCounter.ping(999444)).toBe(1);
  });