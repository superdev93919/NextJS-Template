import { useBurgerStore } from "./burger.store";
import { afterEach, describe, expect, it } from "vitest";

describe("useBurgerStore", () => {
  const { setOpen, toggle } = useBurgerStore.getState();

  it("should initialize open to false", () => {
    expect(useBurgerStore.getState().open).toBeFalsy();
  });

  afterEach(() => {
    useBurgerStore.setState({ open: false });
  });

  it("should update open value", () => {
    setOpen(true);

    expect(useBurgerStore.getState().open).toBeTruthy();
  });

  it("should toggle open value", () => {
    toggle();
    expect(useBurgerStore.getState().open).toBeTruthy();

    toggle();
    expect(useBurgerStore.getState().open).toBeFalsy();
  });
});