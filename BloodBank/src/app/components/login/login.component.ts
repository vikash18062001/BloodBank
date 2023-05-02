import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isSignUp : boolean  = false;
  constructor(private route : ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe((params)=>{
      this.isSignUp = params.get('authMode')== "signup";
    })
  }
}
