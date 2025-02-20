import { decodeString } from './script.js';

test('decodeString("a") should return "a"', () => {
  expect(decodeString('a')).toBe('a');
});

test('decodeString("3[a]b") should return "aaab"', () => {
  expect(decodeString('3[a]b')).toBe('aaab');
});

test('decodeString("b10[a]") should return "baaaaaaaaaa"', () => {
  expect(decodeString('b10[a]')).toBe('baaaaaaaaaa');
});

test('decodeString("3[a]2[bc]") should return "aaabcbc"', () => {
  expect(decodeString('3[a]2[bc]')).toBe('aaabcbc');
});

test('decodeString("3[a2[c]]") should return "accaccacc"', () => {
  expect(decodeString('3[a2[c]]')).toBe('accaccacc');
});

test('decodeString("2[abc]3[cd]ef") should return "abcabccdcdcdef"', () => {
  expect(decodeString('2[abc]3[cd]ef')).toBe('abcabccdcdcdef');
});

test('decodeString("a2[b2[c]d]e") should return "abccdbccde"', () => {
  expect(decodeString('a2[b2[c]d]e')).toBe('abccdbccde');
});