import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { StorageService } from '../storageService.js/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  public allExpense:any=[]
  public fileUrl='...'
  public rowCount:any;

  constructor(private storageService:StorageService,private apiService:ApiService) {
      
   }
   async getAllExpense(filterType:any,download=false,offset=0){
    const token=await this.storageService.getItem('token')
        this.apiService.get(`all-expense?filtertype=${filterType}&download=${download}&offset=${offset}`,token).subscribe((res:any)=>{
          if(!download){
            this.allExpense=res.expenses
            this.rowCount=res.count
          console.log(res,' expeererere')
          }
          else{
            window.open(res.fileUrl,'_blank')
            this.fileUrl=res.fileUrl
          }
        })
   }
}
