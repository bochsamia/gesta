import { Component, OnInit } from '@angular/core';
import { Membre } from '../membre';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ServicemembersService } from '../services/servicemembers.service';

@Component({
  selector: 'app-list-membre',
  templateUrl: './list-membre.component.html',
  styleUrls: ['./list-membre.component.scss']
})
export class ListMembreComponent implements OnInit {

  members: Membre[] = []; // Assuming you have defined the Member interface

  constructor(private apiService: ServicemembersService , private router : Router, private authService: AuthService) {}

  ngOnInit() {
this.refreshMemberList();
  }
  navigateToDisconnect(member: any) {

    this.router.navigate(['disconnect'], { state: { member} });

  }


  refreshMemberList() {
    this.apiService.getMembers().subscribe(data => {

      this.members = data;
      this.apiService.setItem('membre', JSON.stringify(this.members));
    });
}}
