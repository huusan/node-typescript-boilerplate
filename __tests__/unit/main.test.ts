import { test, expect } from "vitest";
import { greeter } from "../../src/main.js";


test("greeter function", () => {
  const s = greeter()
  console.log('s: ', s);
  expect(s).toBe("hello world");

});
