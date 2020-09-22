import { fetchData, fetchData2, fetchData3, fetchData4, fetchData5 } from '../src/fetchData'

test('fetchData 返回结果为{ success: true }', (done) => {
    fetchData((data) => {
        expect(data).toEqual({
            success: true
        })
        done()
    })
})

test('fetchData2 返回结果为{ success: true }', async () => {
    const res = await fetchData2()
    expect(res.data).toEqual({
        success: true
    })
})

test('fetchData3 返回 404', async () => {
    expect.assertions(1)
    try {
        await fetchData3()
    } catch (e) {
        expect(e.toString().indexOf('404') > -1).toBe(true)
    }
})

test('fetchData4 返回 { success: true }', async () => {
    await expect(fetchData4()).resolves.toMatchObject({
        data: {
            success: true
        }
    })
})

test('fetchData5 返回 404', async () => {
    await expect(fetchData5()).rejects.toThrow()
})
