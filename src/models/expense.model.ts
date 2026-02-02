import { model, Schema } from "mongoose";
import {
  ExpenseDocument,
  ExpenseModelInterface,
} from "../utils/expense.interface";

const expenseSchema = new Schema(
  {
    title: {
      type: String,
    },
    amount: {
      type: Number,
    },
    category: {
      type: String,
      default: "General",
    },
  },
  { timestamps: true }
);

const ExpenseModel = model<ExpenseDocument, ExpenseModelInterface>(
  "Expense",
  expenseSchema
);

export default ExpenseModel;