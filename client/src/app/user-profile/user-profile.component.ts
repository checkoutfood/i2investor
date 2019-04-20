import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { DailysellService } from '../shared/dailysell.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  //userDetails;
  dailysellDetails;
  //constructor(private userService: UserService, private router: Router) { }
  constructor(private dailysellService: DailysellService, private router: Router) { }

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
