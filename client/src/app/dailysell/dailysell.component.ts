import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { DailysellService } from '../shared/dailysell.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dailysell',
  templateUrl: './dailysell.component.html',
  styleUrls: ['./dailysell.component.css']
})
export class DailysellComponent implements OnInit {
  //userDetails;
  dailysellDetails;
  //constructor(public userService: UserService, public router: Router) { }
  constructor(public dailysellService: DailysellService, public router: Router) { }

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
    this.dailysellService.getDailysellProfile().
    subscribe(res => {
        console.log("RESPONSE");
        console.log(res);
        this.dailysellDetails = res;
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
  // this.userService.deleteToken();
   this.dailysellService.deleteToken();
    this.router.navigate(['/login']);
  }

}