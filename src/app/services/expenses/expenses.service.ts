import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { StorageService } from '../storageService.js/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  public allExpense:any=[]

  constructor(private storageService:StorageService,private apiService:ApiService) {
this.getAllExpense()
   }
   async getAllExpense(){
    const userId=await this.storageService.getItem('userId')
        this.apiService.get(`all-expense/${userId}`).subscribe((res:any)=>{
          this.allExpense=res.expenses
          console.log(res,' expeererere')
        })
   }
}
