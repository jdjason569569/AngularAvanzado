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

  constructor(private userService:UserService){
    
  }
  
  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    if(this.userService.getToken()){
      this.isToken = true;
      this.user = JSON.parse(this.userService.getUser() || '{}');
    }else{
      this.isToken = false;
    }
  }

  logOut(){
    localStorage.clear();
    this.isToken = false;
  }
}
