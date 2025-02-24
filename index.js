const Koa = require('koa')
const Router = require('koa-router')
const mock = require('./mock/index')

const app = new Koa()

const router = new Router()

async function getResponse(fn,ctx){
    return new Promise((resolve) => {
        setTimeout(() => {
            const res = fn(ctx)
            resolve(res)
        }, 1000)
    })
}

mock.forEach((item) => {
    const {url, method, response} = item
    router[method](url, async (ctx) => {
        // const res  = response()
        const res = await getResponse(response,ctx)
        ctx.body = res
    })
})

app.use(router.routes())

app.listen(3200, () => {
    console.log('mock server is running at http://localhost:3200')
})

