import { fetchData } from "../src/mockDemo";

test("fetchData 测试", () => {
  return fetchData().then((res) => {
    expect(eval(res)).toEqual("123");
  });
});

// test("getNumber 测试", () => {
//   const { getNumber } = jest.requireActual("../src/mockDemo");
//   expect(getNumber()).toBe(123);
// });
