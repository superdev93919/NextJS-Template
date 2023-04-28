import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Divider } from "./divider";

describe("Divider", () => {
  test("render without text", () => {
    const { container } = render(<Divider />);

    expect(container.firstChild?.textContent).toBeFalsy();
  });

  test("render with text (without position defined)", () => {
    const { getByText } = render(<Divider text="Section" />);

    expect(getByText("Section")).toBeDefined();
  });

  test("render with text in middle", () => {
    const { container, getByText } = render(<Divider text="Section" textPosition="middle" />);

    expect(getByText("Section")).toBeDefined();
    expect(container.querySelectorAll("span span")).toHaveLength(2);
  });

  test("render with text in top-left", () => {
    const { getByText } = render(<Divider text="Section" textPosition="top-left" />);

    expect(getByText("Section")).toBeDefined();
  });

  test("render with additional class", () => {
    const { container } = render(<Divider className="custom-class" />);

    const element = container.firstChild;

    expect(element).toBeInstanceOf(HTMLSpanElement);
    expect((element as HTMLSpanElement).className).toContain("custom-class");
  });
});