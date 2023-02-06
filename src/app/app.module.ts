import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { EnterExpensesComponent } from './components/expenses/enter-expenses/enter-expenses.component';
import { ExpensesListComponent } from './components/expenses/expenses-list/expenses-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    EnterBudgetComponent,
    EnterExpensesComponent,
    ExpensesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
