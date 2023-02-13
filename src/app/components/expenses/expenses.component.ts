import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  budget: number = 0;

  constructor(public _budgetService: BudgetService, private router: Router) { }

  ngOnInit(): void {
    if(this._budgetService.budget == 0) {
      this.router.navigate(['/enter-budget']);
    }
    this.budget = this._budgetService.budget;
  }


}
