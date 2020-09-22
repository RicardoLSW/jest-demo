import axios from 'axios'

export const fetchData = () => {
    return axios.get('http://www.dell-lee.com/react/api/demo.json')
}

export const runCallback = (callback) => {
    callback(0)
}

export const newClass = (class1) => {
    new class1
}
