import { generateConfig, generateAnotherConfig } from "../src/snapshot";

test("测试 generateConfig 函数", () => {
  expect(generateConfig()).toMatchInlineSnapshot(`
    Object {
      "domain": "localhost",
      "port": 8000,
      "server": "http://localhost",
      "timer": 2019,
    }
  `);
});

test("测试 generateAnotherConfig 函数", () => {
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      timer: expect.any(Date),
    },
    `
    Object {
      "domain": "localhost",
      "port": 8001,
      "server": "http://localhost",
      "timer": Any<Date>,
    }
  `
  );
});
