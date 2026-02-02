import ExpenseRepository from "../repositories/expense.repository";
import { Expense } from "../utils/expense.interface";

class ExpenseService {
  private expenseRepo = new ExpenseRepository();

  public async createExpense(data: Expense) {
    if (!data.title || typeof data.title !== "string") {
      throw new Error("Title is required and must be string");
    }

    if (typeof data.amount !== "number") {
      throw new Error("Amount must be a number");
    }

    return this.expenseRepo.create(data);
  }

  public async getExpenses(queryParams: any) {
    const { search, page = 1, limit = 5, sort = "createdAt" } = queryParams;

    const query: any = {};
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    const options = {
      skip: (page - 1) * limit,
      limit: Number(limit),
      sort: { [sort]: -1 },
    };

    return this.expenseRepo.findAll(query, options);
  }

  public async deleteExpense(id: string) {
    const expense = await this.expenseRepo.deleteById(id);
    if (!expense) {
      throw new Error("Expense not found");
    }
    return expense;
  }
}

export default ExpenseService;
