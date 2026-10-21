import { describe, expect, it } from "vitest";
import { complete } from "./quest";

describe("quest log", () => {
  it("appends a new id and refuses a repeat", () => {
    expect(complete(["quest-1"], "quest-2")).toEqual({ ok: true, done: ["quest-1", "quest-2"] });
    expect(complete(["quest-1"], "quest-1").ok).toBe(false);
  });
});
