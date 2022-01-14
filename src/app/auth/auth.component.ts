import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus : boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(){

    if(this.authService.signIn()){
      console.log('Sign in successful!');
      this.authStatus = this.authService.isAuth; 
      this.router.navigate(['appareils']);
    }
    //.then(
    //   () => {
    //     console.log('Sign in successful!');
    //     this.authStatus = this.authService.isAuth;
    //   }
    // );
  }

  onSignOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth 
  }

}
