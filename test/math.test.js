import { add, minus, multi } from '../src/math'

test('测试加法 3 + 7', () => {
    expect(add(3, 7)).toBe(10);
})

test('测试减法 3 - 7', () => {
    expect(minus(3, 7)).toBe(-4);
})

test('测试乘法 3 * 7', () => {
    expect(multi(3, 7)).toBe(21);
})
