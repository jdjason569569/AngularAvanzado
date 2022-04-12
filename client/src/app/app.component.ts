import { DoCheck, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,DoCheck{
  title = 'Zoologico';
  isToken: boolean = false;
  user!: User;
  isAdmin: boolean = false;

  constructor(private userService:UserService){
    
  }
  
  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    if(this.userService.getToken()){
      this.isToken = true;
      this.user = JSON.parse(this.userService.getUser() || '{}');
      console.log(this.user.role);
      
      if(this.user.role != 'role_user'){
        this.isAdmin = true
      }
    }else{
      this.isToken = false;
    }
  }

  logOut(){
    localStorage.clear();
    this.isToken = false;
    this.isAdmin = false;
  }
}
