import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { StorageService } from './storageService.js/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:4000';
  constructor(private storageService:StorageService,private http:HttpClient) {

   }

   

   get(endpoint:string,token?:any){
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':token
      }),
    };
    console.log(httpOptions,'dekhoauthorization')
    
      return this.http.get(`${this.apiUrl}/${endpoint}`,httpOptions)
   }

   post(endpoint:string,data:any){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', // or other content type as needed
      }),
    };
    const payload=JSON.stringify(data)
    return this.http.post(`${this.apiUrl}/${endpoint}`,payload,httpOptions)
 }

 delete(endpoint:string){
  return this.http.delete(`${this.apiUrl}/${endpoint}`)
}

}
