import express from 'express'
import http from 'http'

import 'dotenv/config'

import './config/aliases'

import { PORT } from 'config'

import 'database'

import { errorHandler, initializeMiddlewares } from 'middlewares'

import { routes } from 'routes'

const app = express()

const server = http.createServer(app)

initializeMiddlewares(app, server)

routes(app)

errorHandler(app)

server.listen(PORT || 3001, () => console.log(`🚀 Server has launched`))
