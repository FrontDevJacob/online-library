import limiter from 'express-rate-limit'

export default request => {
    return limiter({
        windowMs: 30 * 60 * 1000, // 30 min
        max: 10,
        handler: (_, res) => {
            const status = 429
            res.status(status).send({
                status,
                errorMessage: `You have exceeded ${request} requests. Try again later.`
            })
        }
    })
}
