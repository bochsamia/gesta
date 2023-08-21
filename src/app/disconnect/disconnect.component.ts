import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Membre } from '../membre';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { ServicemembersService } from '../services/servicemembers.service';

@Component({
  selector: 'app-disconnect',
  templateUrl: './disconnect.component.html',
  styleUrls: ['./disconnect.component.scss']
})
export class DisconnectComponent implements OnInit {

  selectedOption: string | null = null;
  member: any;
  members: Membre[] = [];
  constructor(private apiService: ServicemembersService , private router : Router,
    private route: ActivatedRoute, private location: Location,private toastr: ToastrService) {}


  ngOnInit() {

      this.member = history.state.member;
      this.apiService.getMembers().subscribe(
        (data: any) => {
          console.log(data);
          this.members = data;
        },
        (error: any) => {
          console.error('Error fetching members:', error);
        }
      );
  }


  submitForm() {

  }

  navigateTolist() {

    this.location.back();

  }


  disconnectMemb(membertt) {
    if (!this.selectedOption) {
      this.toastr.warning("Les initiales de l'utilisateur à déconnecter doivent être sélectionnées");
      return;
    } else {
      const confirmation = confirm(`Etes-vous sûr de vouloir déconnecter cet utilisateur ${membertt.id_membre}?`);
      if (confirmation) {
        this.apiService.disconnectMember(membertt.id_membre).subscribe(
          () => {
            this.toastr.success('cet utilisateur a bien ete déconnecté');


          },
          (error) => {
            if (error.status === 404) {
              this.toastr.warning("Membre non trouvé. Déconnexion impossible");
            }
          }
        );
      }
    }
  }


  updateMemberDetails() {


if (this.selectedOption !== null) {
      const selectedMember = this.members.find(itm => itm.id_membre == this.selectedOption);
      console.log(this.members)
      console.log(this.selectedOption)
      if (selectedMember) {

        this.member =  selectedMember ;

      } else {
        this.member = { id_membre: null, prenomMembre: '', nomMembre: '' };
      }
    } else {
      this.member = { id_membre: null, prenomMembre: '', nomMembre: '' };
    }
  }
}
