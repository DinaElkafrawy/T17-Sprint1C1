import { Component, OnInit } from '@angular/core';
import { regService} from '../../../services/reg.services' ;
import {UserOb} from '../../../objects/UserObject';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  username : string ;
  password : string ;
  email : string ;
  users: LocalDataSource=new LocalDataSource();

  constructor(
    private regService:regService 
  ) {
    
   }
  add(){
    var userob =  {
      fullname:this.username,
      email:this.email,
      password:this.password
}
var flag ;
      this.regService.addReg(userob).subscribe(Response=>{
      this.users.add(userob);
      flag='b';
      setTimeout(function() { alert("User Saved"); }, 5);
      window.location.href="#/dashboard/authe/login";

  });
  setTimeout(function() { if(flag=='b'){
      
  }
  else{
    alert("Your email is used or you entered a wrong data");
  }
     }, 1000);

    console.log(userob);

  }

  ngOnInit() {
  }

 

}