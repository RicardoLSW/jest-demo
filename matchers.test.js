test('测试匹配器', () => {
    expect(10).toBe(10)
})

test('测试对象', () => {
    const a = { one: 1 }
    expect(a).toEqual({ one: 1 })
})

test('测试null', () => {
    const a = null
    expect(a).toBeNull()
})

test('测试undefined', () => {
    const a = undefined
    expect(a).toBeUndefined()
})

test('测试defined', () => {
    const a = 123
    expect(a).toBeDefined()
})

test('toBeTruthy', () => {
    const a = true
    expect(a).toBeTruthy()
})

test('toBeFalsy', () => {
    const a = false
    expect(a).toBeFalsy()
})

test('not', () => {
    const a = 1
    expect(a).not.toBeFalsy()
})

test('toBeGreaterThan', () => {
    const count = 10
    expect(count).toBeGreaterThan(9)
})

test('toBeLessThan', () => {
    const count = 10
    expect(count).toBeLessThan(11)
})

test('toBeGreaterThanOrEqual', () => {
    const count = 10
    expect(count).toBeGreaterThanOrEqual(10)
})

test('toBeLessThanOrEqual', () => {
    const count = 10
    expect(count).toBeLessThanOrEqual(10)
})

test('toBeCloseTo', () => {
    const a = 0.1
    const b = 0.2
    expect(a + b).toBeCloseTo(0.3)
})

test('toMatch', () => {
    const str = 'http://www.baidu.com'
    expect(str).toMatch(/baidu/)
})

test('toContain', () => {
    const arr = ['aaa', 'bbb', 'ccc', 'ddd']
    expect(arr).toContain('aaa')
})

const throwNewErrorFunc = () => {
    throw new Error('this is a new error')
}

test('toThrow', () => {
    expect(throwNewErrorFunc).toThrow('this is a new error')
})
