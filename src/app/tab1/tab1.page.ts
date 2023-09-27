import { ChangeDetectorRef, Component } from '@angular/core';
import { ExpensesService } from '../services/expenses/expenses.service';
import { ApiService } from '../services/api.service';

import { StorageService } from '../services/storageService.js/storage.service';
import { PremiumService } from '../services/premium.service';
declare var Razorpay: any;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public rzp1 :any
  public premium='Go premium'
  

  constructor(private cdr:ChangeDetectorRef,public premiumService:PremiumService,private storageService:StorageService,private apiService:ApiService,public expenseService:ExpensesService) {
    
    
  }

  ionViewWillEnter(){
    
    this.premiumService.getUserInfo().then((prm)=>{
      this.premium=prm===true?'you are premium':'Go premium'
      console.log(this.premium,'aafterset')
    })
    this.expenseService.getAllExpense()
  }

  updateString() {
    // Update yourString here
    this.cdr.detectChanges(); // Trigger change detection
  }
  


  async goPremiumHandler(){
    const token=await this.storageService.getItem('token')
    this.apiService.get('go-premium',token).subscribe((res:any)=>{
      console.log(res,' get res')
      let options={
        'key_id':res.key_id,
        'order_id':res.order.id,
        'handler': async (response:any)=>{
          
          const token=await this.storageService.getItem('token')
              this.apiService.put('go-premium',{status:'SUCCESS',orderid:options.order_id,paymentid:response.razorpay_payment_id},token).subscribe(async (payres)=>{
                console.log(payres,'payres')
                
                console.log(this.premium,'beforeset')
               this.premiumService.setPremium().then(()=>{
                
                  this.premium='you are premium'
                  this.updateString()
                  console.log(this.premium,'aafterset')
                
               })
               
               
                
              })
        },
        description: 'Payment for products/services',
        'theme':{
          color:'#0000FF'
        },
        prefill: {
          name: 'John Doe', // Replace with customer's name
          email: 'john.doe@example.com', // Replace with customer's email
          contact: '1234567890', // Replace with customer's phone number
        },
        notes: {
          address: 'Customer Address', // Replace with customer's address
        },
        
      }
      this.rzp1=new Razorpay(options)
      this.rzp1.open()
      this.rzp1.on('payment.failed',async (response:any)=>{
            console.log(response,' fail ho gya');
            const token=await this.storageService.getItem('token')
              this.apiService.put('go-premium',{status:'FAILED',orderid:options.order_id,paymentid:response.razorpay_payment_id},token).subscribe((payres)=>{
                console.log(payres,'payres')
              })
      })
    })
  }

  deleteExpenseHandler(id:any){
    this.apiService.delete(`delete/${id}`).subscribe((res)=>{
      this.expenseService.getAllExpense()
    })
  }

}
