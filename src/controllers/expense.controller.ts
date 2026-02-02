import { Request, Response } from "express";
import ExpenseService from "../services/expense.service";

class ExpenseController {
  private expenseService = new ExpenseService();

  public getExpenses = async (req: Request, res: Response) => {
    try {
      const expenses = await this.expenseService.getExpenses(req.query);
      res.status(200).json(expenses);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  };

  public createExpense = async (req: Request, res: Response) => {
    try {
      const expense = await this.expenseService.createExpense(req.body);
      res.status(201).json(expense);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  };

  public deleteExpense = async (req: Request, res: Response) => {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      await this.expenseService.deleteExpense(id);
      res.status(200).json({ message: "Expense deleted" });
    } catch (err: any) {
      res.status(404).json({ message: err.message });
    }
  };
}

export default ExpenseController;
