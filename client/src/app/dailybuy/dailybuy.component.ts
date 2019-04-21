import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { DailybuyService } from '../shared/dailybuy.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dailybuy',
  templateUrl: './dailybuy.component.html',
  styleUrls: ['./dailybuy.component.css']
})
export class DailybuyComponent implements OnInit {
  //userDetails;
  dailybuyDetails;
  //constructor(public userService: UserService, public router: Router) { }
  constructor(public dailybuyService: DailybuyService, public router: Router) { }

  ngOnInit() {
    // this.userService.getUserProfile().subscribe(
    //   res => {
    //   console.log("RESPONSE");
    //     console.log(res['user']);
    //     this.userDetails = res['user'];
    //   },
    //   err => { 
    //     console.log(err);
        
    //   }
    //  ),
    this.dailybuyService.getDailybuyProfile().
    subscribe(res => {
        console.log("RESPONSE");
        console.log(res);
        this.dailybuyDetails = res;
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
  // this.userService.deleteToken();
   this.dailybuyService.deleteToken();
    this.router.navigate(['/login']);
  }

}