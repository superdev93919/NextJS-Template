import { serializeCookies, parseCookies } from "./cookie.util";
import { describe, expect, test } from "vitest";
import { encodedCookies, multipleCookies, singleCookie, whitespaceCookies } from "./cookie.mock";

describe("serializeCookies", () => {
  test("should return an empty string for an empty array of cookies", () => {
    expect(serializeCookies([])).toEqual("");
  });

  test("should format a single cookie correctly", () => {
    expect(serializeCookies(singleCookie.object)).toEqual(singleCookie.string);
  });

  test("should format multiple cookies correctly", () => {
    expect(serializeCookies(multipleCookies.object)).toEqual(multipleCookies.string);
  });
});

describe("parseCookies", () => {
  test("should return an empty array for an empty string", () => {
    expect(parseCookies("")).toEqual([]);
  });

  test("should parse a single cookie correctly", () => {
    expect(parseCookies(singleCookie.string)).toEqual(singleCookie.object);
  });

  test("should parse multiple cookies correctly", () => {
    expect(parseCookies(multipleCookies.string)).toEqual(multipleCookies.object);
  });

  test("should handle whitespace correctly", () => {
    expect(parseCookies(whitespaceCookies.string)).toEqual(whitespaceCookies.object);
  });

  test("decodes encoded cookie values", () => {
    expect(parseCookies(encodedCookies.string)).toEqual(encodedCookies.object);
  });
});