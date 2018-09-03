import { Router } from 'express'

import Expense from '../models/expense'

export default () => {
  const api = Router()

  api.get('/', (req, res) => {
    Expense.find({}, (err, expenses) => {
      if(err) {
        return res.send(err)
      }
      return res.json(expenses)
    })
  })

  api.get('/:id', (req, res) => {
    Expense.findById(req.params.id, (err, expense) => {
      if(err) {
        return res.send(err)
      }
      return res.json(expense)
    })
  })

  api.post('/', (req, res) => {
    const expense = new Expense()
    expense.name = req.body.name
    expense.amount = req.body.amount

    expense.save((err, expense) => {
      if(err) {
        return res.send(err)
      }
      return res.json({
        message: 'Expense saved successfully',
        expense
      })
    })
  })

  api.put('/:id', (req, res) => {
    Expense.findById(req.params.id, (err, expense) => {
      if(err) {
        return res.send(err)
      }
      expense.name = req.body.name
      expense.amount = req.body.amount

      expense.save((saveErr, savedExpense) => {
        if(saveErr) {
          return res.send(saveErr)
        }
        return res.json({
          message: 'Expense updated successfully',
          savedExpense
        })
      })
    })
  })

  api.delete('/:id', (req, res) => {
    Expense.remove({
      _id: req.params.id,
    }, (err) => {
      if(err) {
        return res.send(err)
      }

      return res.json({
        message: 'Expense removed successfully'
      })
    })
  })

  return api
}
