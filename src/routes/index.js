import express from 'express'

import expenses from '../controllers/expenses'
const router = express()
router.use('/expenses', expenses())

export default(router)
