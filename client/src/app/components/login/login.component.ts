import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: User;
  data: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private userService:UserService) { 
    this.user = new User('','','','','','user_role','');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.signUp(this.user).subscribe((response:any)=>{
      //console.log('response', response);
           this.data = response;
           if(!this.data){
             alert('Error al autenticar el usuario');
           }else{
              localStorage.setItem('token',this.data.data.token);
              this.data.data.user.password = '';
              localStorage.setItem('user', JSON.stringify(this.data.data.user));
              this._router.navigate(['home']);
           }
    });
  }

}
