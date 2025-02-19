import { decodeString } from './script.js';

test('decodeString("3[a]2[bc]") should return "aaabcbc"', () => {
  expect(decodeString('3[a]2[bc]')).toBe('aaabcbc');
});