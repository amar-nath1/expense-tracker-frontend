import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { StorageService } from '../services/storageService.js/storage.service';
import { ExpensesService } from '../services/expenses/expenses.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public expense={
    amount:'',
    description:'',
    expenseType:''
  }
  constructor(private expenseService:ExpensesService,private storageService:StorageService,private apiService:ApiService) {}

  async addExpenseHandler(){
    const token=await this.storageService.getItem('token')
    const payload={...this.expense}
    console.log(token,'token in frontend')
    this.apiService.post('add-expense',payload,token).subscribe((res)=>{
      this.expenseService.getAllExpense()
      this.expense={
        amount:'',
        description:'',
        expenseType:''
      }
      console.log(res,'postexpenseres')
    })
  }

}
