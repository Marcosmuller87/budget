import { BudgetService } from 'src/app/services/budget.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css'],
})
export class ExpensesListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  budget: number;
  budgetLeft: number;
  expensesList: any[] = [];

  constructor(private _budgetService: BudgetService) {
    this.budget = this._budgetService.budget;
    this.budgetLeft = this._budgetService.budgetLeft;
    this.subscription = this._budgetService.getExpenses().subscribe((data) => {
      this.budgetLeft -= data.amount;
      this.expensesList.push(data);
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  applyColor() {
    if (this.budget/4 > this.budgetLeft) {
      return 'alert alert-danger';
    } else if (this.budget/2 > this.budgetLeft) {
      return 'alert alert-warning';
    }
    return 'alert alert-secondary';
  }
}
