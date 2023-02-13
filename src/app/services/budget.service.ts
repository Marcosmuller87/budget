import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budget: number;
  budgetLeft: number;
  private expenses$ = new Subject<any>();

  constructor() {
    this.budget = 0;
    this.budgetLeft = 0;
  }

  addExpense(expense: any) {
    this.budgetLeft -= expense.amount;
    this.expenses$.next(expense);
  }

  getExpenses(): Observable<any> {
    return this.expenses$.asObservable();
  }
}
