import { Injectable } from '@angular/core';
import { StorageService } from './storageService.js/storage.service';

@Injectable({
  providedIn: 'root'
})
export class PremiumService {
public prem=''
  constructor(public storageService:StorageService) {
    this.getUserInfo()
   }

  async getUserInfo(){
    
    const prem=await this.storageService.getItem('prem')
       if(prem===true){
this.prem='You are premium'
       }
       else{
        this.prem='Go premium'
       }
       
   }
   async setPremium(){
    this.prem='You are premium'
    await this.storageService.setItem('prem',true)
    
                
   }

}
