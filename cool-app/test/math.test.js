// import { describe, expect, it } from "vitest";
const { add, subtract, backAccount, sum } = require("../math");

describe("sum", () => {
  it("should return the sum of a list of numbers", () => {
    expect(sum()).toBe(0);
  });
});

test("should get correct sum of two num", () => {
  expect(add(2, 3)).toBe(5);
});

test("should not get zero", () => {
  expect(add(2, 3)).not.toBe(0);
});

test("should get null", () => {
  const number = null;
  expect(number).toBeNull();
});

// to be true
test("username should be admin", () => {
  const username = "admin";
  expect(username === "admin").toBeTruthy();
});

// to be false
test("username should be admin", () => {
  const username = "admins";
  expect(username === "admin").toBeFalsy();
});

// toEqual
test("balance equals 500", () => {
  expect(backAccount.getBalance()).toEqual({ balance: 500 });
});

// toContain
test("Admin should be in usernames", () => {
  const username = ["John", "Admin"];
  expect(username).toContain("Admin");
});

// toMatch
test("Plunker should include p", () => {
  expect("Plunker").toMatch(/p/i);
});
