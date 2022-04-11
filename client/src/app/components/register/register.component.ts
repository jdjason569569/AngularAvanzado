import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user!: User;
  isRegister: boolean = false;

  constructor(private _route: ActivatedRoute, private _router: Router, private userService:UserService) {
      this.user = new User('','','','','','','');
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.prueba().subscribe((response)=>{
       console.log(response);
     });
    // if(this.user.name != ''){
    //   this.userService.register(this.user).subscribe((response:any)=>{      
    //     this.isRegister = false;
    //     if(response.data){
    //        this.isRegister = true;
    //        this.user = new User('','','','','','user_role','');
    //     }
    //    });
    // }
    
  }

}
