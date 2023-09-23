import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { StorageService } from '../storageService.js/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  public allExpense:any=[]

  constructor(private storageService:StorageService,private apiService:ApiService) {
      
   }
   async getAllExpense(){
    const token=await this.storageService.getItem('token')
        this.apiService.get(`all-expense`,token).subscribe((res:any)=>{
          this.allExpense=res.expenses
          console.log(res,' expeererere')
        })
   }
}
