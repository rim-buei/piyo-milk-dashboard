// @vitest-environment node
import { test, expect } from "vitest";

test("translateFeedingTypeformatDateTime", () => {
  expect(translateFeedingType("Formula")).toBe("ミルク");
  expect(translateFeedingType("Unknown")).toBe("不明");
});
