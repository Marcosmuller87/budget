import { BudgetService } from 'src/app/services/budget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-expenses',
  templateUrl: './enter-expenses.component.html',
  styleUrls: ['./enter-expenses.component.css'],
})
export class EnterExpensesComponent implements OnInit {
  expenseName: string = '';
  expenseAmount: number = 0;
  invalidForm: boolean = false;
  invalidFormMessage: string = '';

  constructor(private _budgetService: BudgetService) {}

  ngOnInit(): void {}

  addExpense() {
    if (this.expenseAmount > this._budgetService.budgetLeft) {
      this.invalidForm = true;
      this.invalidFormMessage = 'Expense amount is greater than budget left.';
      return;
    }
    if (this.expenseName == '' || this.expenseAmount <= 0) {
      this.invalidForm = true;
      this.invalidFormMessage = 'Expense name or amount is invalid.';
      return;
    } else {
      const EXPENSE = {
        name: this.expenseName,
        amount: this.expenseAmount,
      };

      this._budgetService.addExpense(EXPENSE);

      this.invalidForm = false;
      this.expenseName = '';
      this.expenseAmount = 0;
    }
  }
}
