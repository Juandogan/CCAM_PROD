import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/userLogin'; 
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {
  user:UserLogin = new UserLogin
  loader = false
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  signUp(){
    console.log(this.user)
    this.authService.signUp(this.user).subscribe(res => { 

    console.log(res,'respuesta')
    localStorage.setItem('token', res.token)        
    this.loader = false;
    this.router.navigate(['../gestor'])
  })


}


}
