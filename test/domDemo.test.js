import addDivToBody from "../src/domDemo";
import $ from "jquery";

test("测试 addDivToBody", () => {
  addDivToBody();
  console.log($("body").find("div").length);
});
