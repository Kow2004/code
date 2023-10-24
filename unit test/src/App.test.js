import { render, screen } from '@testing-library/react';
import App from './App';

test("add", () => {
  expect(App(5,7)).toBe(12);
});

test("add", () => {
  expect(App(-5,-3)).toBe(-8);
});

test("add", () => {
  expect(App(10,-4)).toBe(6);
});

test("add", () => {
  expect(App(0,9)).toBe(9);
});

test("add", () => {
  expect(App(3,2)).toBe(5);
});
test("add", () => {
  expect(App(1000000,500000)).toBe(1500000);
});

test("add", () => {
  expect(App(2.5,1.75)).toBe(4.25);
});
test("add", () => {
  expect(App(7,-7)).toBe(0);
});
test("add", () => {
  expect(App(null,5)).toBe(5);
});
test("add", () => {
  expect(App("hellow",3)).toBe("hellow3");
});
test("add", () => {
  expect(App(6,"world")).toBe("6world");
});
test("add", () => {
  expect(App(8,null)).toBe(8);
});
test("add", () => {
  expect(App(Number.MAX_VALUE,1)).toBe("Overflow");
});
test("add", () => {
  expect(App(Number.MIN_VALUE,-1)).toBe("Underflow");
});
test("add", () => {
  expect(App(Number.MIN_VALUE,-10)).toBe("Underflow");
});
test("add", () => {
  expect(App(Number.MAX_VALUE,10)).toBe("Overflow");
});