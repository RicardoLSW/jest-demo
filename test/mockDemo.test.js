jest.mock("../src/mockDemo");
import { fetchData } from "../src/mockDemo";

test("fetchData 测试", () => {
  return fetchData().then((res) => {
    expect(eval(res)).toEqual("123");
  });
});
