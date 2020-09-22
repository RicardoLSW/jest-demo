export const generateConfig = () => {
    return {
        server: 'http://localhost',
        port: 8000,
        domain: 'localhost',
        timer: 2019
    }
}

export const generateAnotherConfig = () => {
    return {
        server: 'http://localhost',
        port: 8001,
        domain: 'localhost',
        timer: new Date()
    }
}
