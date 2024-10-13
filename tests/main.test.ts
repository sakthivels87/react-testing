import { it, expect, describe } from "vitest";

describe("hello vitest", () => {
  it("should return hello world", () => {
    const result = "Hello World";
    expect(result).toMatch(/world/i);
  });
});
