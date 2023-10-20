import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { StorageService } from '../storageService.js/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  public allExpense:any=[]
  public fileUrl='...'

  constructor(private storageService:StorageService,private apiService:ApiService) {
      
   }
   async getAllExpense(filterType:any,download=false){
    const token=await this.storageService.getItem('token')
        this.apiService.get(`all-expense?filtertype=${filterType}&download=${download}`,token).subscribe((res:any)=>{
          if(!download){
            this.allExpense=res.expenses
          console.log(res,' expeererere')
          }
          else{
            window.open(res.fileUrl,'_blank')
            this.fileUrl=res.fileUrl
          }
        })
   }
}
