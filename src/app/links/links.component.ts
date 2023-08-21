import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/services/user.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  linksList : any;

  constructor(private userService : UserService) { }

  ngOnInit() {
/*
    this.userService.getAllUserLinks().subscribe(
      res => { 
        this.linksList = res;
      },
      err => {
      }
    );*/
  }

}
