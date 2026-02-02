import ExpenseModel from "../models/expense.model";
import { Expense } from "../utils/expense.interface";

class ExpenseRepository {
  public create(data: Expense) {
    return ExpenseModel.create(data);
  }

  public findAll(query: any, options: any) {
    return ExpenseModel.find(query)
      .sort(options.sort)
      .skip(options.skip)
      .limit(options.limit);
  }

  public findById(id: string) {
    return ExpenseModel.findById(id);
  }

  public deleteById(id: string) {
    return ExpenseModel.findByIdAndDelete(id);
  }
}

export default ExpenseRepository;
