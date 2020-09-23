import addDivToBody from "../src/domDemo";
import $ from "jquery";

test("测试 addDivToBody", () => {
  addDivToBody();
  expect($("body").find("div").length).toBe(1);
});
