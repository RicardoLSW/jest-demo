import { runCallback, newClass, fetchData } from './demo'
import axios from 'axios'

test('测试 runCallback', () => {
    const func = jest.fn()
    func.mockReturnValue('123')
    func.mockImplementation(() => {
        return 'hello'
    })
    runCallback(func)
    runCallback(func)
    expect(func).toBeCalled()
    console.log(func.mock)
})

test('测试 newClass', () => {
    const func = jest.fn()
    newClass(func)
    console.log(func.mock)
})

jest.mock('axios')
test('测试 fetchData 接口调用是否发送', async () => {
    axios.get.mockResolvedValue({ data: 'hello' })
    await expect(fetchData()).resolves.toMatchObject({
        data: 'hello'
    })
})
