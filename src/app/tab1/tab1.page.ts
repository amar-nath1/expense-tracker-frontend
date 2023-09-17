import { Component } from '@angular/core';
import { ExpensesService } from '../services/expenses/expenses.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  

  constructor(private apiService:ApiService,public expenseService:ExpensesService) {
    this.expenseService.getAllExpense()
    
  }

  deleteExpenseHandler(id:any){
    this.apiService.delete(`delete/${id}`).subscribe((res)=>{
      this.expenseService.getAllExpense()
    })
  }

}
