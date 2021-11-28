import { Router } from 'express'

import middlewares from '@middlewares'

import cart from '../services/cart'

const router = Router()

router.post(
    '/getCart',
    middlewares.jwtAuthorization,
    cart.getCart.validation(),
    middlewares.checkValidation,
    cart.getCart.default
)

router.post(
    '/purchaseBooksWithStripe',
    middlewares.jwtAuthorization,
    cart.purchaseBooksWithStripe.validation(),
    middlewares.checkValidation,
    cart.purchaseBooksWithStripe.default
)

router.post(
    '/createPayPalPayment',
    middlewares.jwtAuthorization,
    cart.createPayPalPayment.validation(),
    middlewares.checkValidation,
    cart.createPayPalPayment.default
)

router.post(
    '/executePayPalPayment',
    middlewares.jwtAuthorization,
    cart.executePayPalPayment.validation(),
    middlewares.checkValidation,
    cart.executePayPalPayment.default
)

export default router
