import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;
  public errorText=''
  constructor(private router:Router,private apiService:ApiService,private fb:FormBuilder) {
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
   }

  ngOnInit() {
  }

  userLogin(){
    console.log(this.loginForm.value)
    this.apiService.post('user-login',this.loginForm.value).subscribe((res:any)=>{
      if (res.auth===true){
          this.router.navigate(['tabs'])
      }
      else if (res.auth===false){
        this.errorText='Wrong Password'
        setTimeout(() => {
          this.errorText=''
        }, 2000);
    }
    else if (res.auth==='nullexistence'){
      this.errorText='User does not exists'
      setTimeout(() => {
        this.errorText=''
      }, 2000);
  }

    })
  }

}
