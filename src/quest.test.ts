import { describe, expect, it } from "vitest";
import { complete } from "./quest";

describe("quest log", () => {
  it("appends a new id and refuses a repeat", () => {
    expect(complete(["quest-1"], "quest-2")).toEqual({ ok: true, done: ["quest-1", "quest-2"] });
    expect(complete(["quest-1"], "quest-1")).toEqual({
      ok: false,
      reason: "quest-1 is already complete",
    });
  });

  it("stops at 20 and refuses a 33-character id", () => {
    const twenty = Array.from({ length: 20 }, (_, index) => `q${index}`);
    expect(complete(twenty, "quest-x")).toEqual({
      ok: false,
      reason: "the log already has 20 ids",
    });
    expect(complete([...twenty, "extra"], "quest-x")).toEqual({
      ok: false,
      reason: "the log already has more than 20 ids",
    });
    expect(complete([], "a".repeat(32)).ok).toBe(true);
    expect(complete([], "a".repeat(33)).ok).toBe(false);
  });
});
