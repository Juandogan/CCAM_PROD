import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { UserLogin } from '../models/userLogin';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public URL ="http://localhost:3000/api"


  usuario=""

  constructor(private http:HttpClient, private router:Router) { 
  this.usuario = String(localStorage.getItem('usuario'))

   }


  signUp(user:UserLogin){
    this.usuario = user.email
    return this.http.post<any>(this.URL + '/signup', user)
  }

  signIn(user:UserLogin){
    this.usuario = user.email
    return this.http.post<any>(this.URL + '/signin', user)
  }


  loggedIn():boolean{
    
    return !!localStorage.getItem('token')
  }

  getToken():any{
    return localStorage.getItem('token')
  }
  logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('usuario')
    this.router.navigate(['/login'])
    
  }

}
