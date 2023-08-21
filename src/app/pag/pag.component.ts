import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pag',
  templateUrl: './pag.component.html',
  styleUrls: ['./pag.component.scss']
})
export class PagComponent implements OnInit {


  alldoc : any;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getAllParams().subscribe(
      res => {
        this.alldoc = res[res.length - 1]
        console.log("obj" ,this.alldoc)
      } , 
      res => {

      }
    )
  }

}
