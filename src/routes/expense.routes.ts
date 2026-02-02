import { Router } from "express";
import { Routes } from "../utils/route.interface";
import ExpenseController from "../controllers/expense.controller";

class ExpenseRoutes implements Routes {
  path?: string = "/expense";
  router: Router = Router();
  public expenseController = new ExpenseController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/all`, this.expenseController.getExpenses);
    this.router.post(`${this.path}/add`, this.expenseController.createExpense);
    this.router.delete(`${this.path}/:id`, this.expenseController.deleteExpense);
  }
}

export default ExpenseRoutes;
