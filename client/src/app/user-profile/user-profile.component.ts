import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
//import { DailysellService } from '../shared/dailysell.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit() {
    
  }

  onLogout(){
    this.router.navigate(['/login']);
  }

  onClickDailyBuy(){
    this.router.navigate(['/dailybuy']);
  }
  onClickDailySell(){
    this.router.navigate(['/dailysell']);
  }

}
