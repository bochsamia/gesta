import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Membre } from '../membre';

@Component({
  selector: 'app-lmb',
  templateUrl: './lmb.component.html',
  styleUrls: ['./lmb.component.scss']
})
export class LmbComponent implements OnInit {

  members: Membre[] = [];

  constructor(private userService : UserService) { }

  ngOnInit() {

    this.userService.getAllMembres().subscribe(
      res => {
        this.members = res

        console.log(this.members)
      } ,
      res => {

      }
    )
  }

}
