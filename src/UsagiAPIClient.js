const axios = require('axios')

module.exports = class UsagiAPIClient {
    constructor() {
        this.url = 'https://usagiapi.danielagc.repl.co/api/'
    }

    async dance() {
        const res = await axios.get(`${this.url}/dance`)
        return res.data
    }

    async feed() {
        const res = await axios.get(`${this.url}/feed`)
        return res.data
    }

    async hug() {
        const res = await axios.get(`${this.url}/hug`)
        return res.data
    }

    async kiss() {
        const res = await axios.get(`${this.url}/kiss`)
        return res.data
    }

    async slap() {
        const res = await axios.get(`${this.url}/slap`)
        return res.data
    }

    async tickle() {
        const res = await axios.get(`${this.url}/tickle`)
        return res.data
    }
}