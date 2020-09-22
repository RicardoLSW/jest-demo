import Counter from './counter'

let counter = null

beforeAll(() => {
    // console.log('beforeAll')
})

beforeEach(() => {
    counter = new Counter()
})

afterAll(() => {
    // console.log('afterAll')
})

test('测试 Counter 中的 addOne 方法', () => {
    counter.addOne()
    expect(counter.number).toBe(1)
})

test('测试 Counter 中的 minusOne 方法', () => {
    counter.minusOne()
    expect(counter.number).toBe(-1)
})
