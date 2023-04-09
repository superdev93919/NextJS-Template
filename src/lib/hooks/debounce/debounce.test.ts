import { renderHook } from "@testing-library/react";
import { afterEach, describe, expect, test, vitest } from "vitest";
import { useDebounce } from "./debounce.hook";

const value = "Rich Harris";
const defaultValue = 500;

describe("useDebounce", () => {
  afterEach(() => {
    vitest.useRealTimers();
  });

  test("should return the same value", () => {
    const { result: { current: debouncedValue } } = renderHook(() => useDebounce(value));

    expect(debouncedValue).toBe(value);
  });

  test(`should return the same value after ${defaultValue}ms (default value)`, () => {
    mockSetTimeout();

    renderHook(() => useDebounce(value));

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), defaultValue);
  });

  test("should debounce with given debounce", () => {
    const time = 1000;

    mockSetTimeout();

    renderHook(() => useDebounce(value, time));

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), time);
  });

  test("should call clearTimeout when unmount", () => {
    mockClearTimeout();

    const { unmount } = renderHook(() => useDebounce(value));

    unmount();

    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });
});

function mockSetTimeout(): void {
  vitest.useFakeTimers();
  vitest.spyOn(global, "setTimeout");
}

function mockClearTimeout(): void {
  vitest.useFakeTimers();
  vitest.spyOn(global, "clearTimeout");
}