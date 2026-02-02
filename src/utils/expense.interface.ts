import { Document, Model } from "mongoose";

export interface Expense {
  title: string;
  amount: number;
  category?: string;
}

export interface ExpenseDocument extends Expense, Document {}

export interface ExpenseModelInterface extends Model<ExpenseDocument> {}
