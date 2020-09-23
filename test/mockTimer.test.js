import timer from "../src/mockTimer";

beforeEach(() => {
  jest.useFakeTimers();
});

test("timer 测试", () => {
  const fn = jest.fn();
  timer(fn);
  // jest.runAllTimers();
  // jest.runOnlyPendingTimers();
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(1);
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(2);
});
