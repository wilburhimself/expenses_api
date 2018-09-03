import db from '../db'
import mongoose from 'mongoose'

const Schema = mongoose.Schema
const expenseSchema = new Schema({
  name: String,
  amount: Number
})

export default mongoose.model('Expense', expenseSchema)
