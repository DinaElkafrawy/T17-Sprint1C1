import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { regService} from '../../../services/reg.services' ;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password : string ;
  email : string ;
  users: LocalDataSource=new LocalDataSource();

  constructor(private regService:regService ) { }

  add(){
    var userob =  {
      email:this.email,
      password:this.password
}

      this.regService.LogIn(userob).subscribe(Response=>{  
        setTimeout(function() { alert("Logged in"); }, 5);
        document.cookie=this.email; 
        window.location.href="#/dashboard";
        

  });
  //setTimeout(function() { alert("You Entered wrong data"); }, 5);
  

  //console.log(this.users)
  }

  ngOnInit() {  
  }

}