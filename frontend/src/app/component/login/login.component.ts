import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/userLogin';
import { AuthService } from 'src/app/service/auth.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  loader=false

  //creo objeto de usuario
user:UserLogin = new UserLogin
imagenEvita = true

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  evaristo(){
    this.imagenEvita = false
  }
  signIn(){
    this.authService.signIn(this.user).subscribe(res => { 
     
      console.log(res,'banderas')
      localStorage.setItem('token', res)  
      localStorage.setItem('usuario', String(this.user.email))  
      this.loader = false;  
      this.router.navigate(['/CuerpoPrincipalComponent'])
  
    }
    

    )


  }

  


  }