import { Component, OnInit , Input} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-validconfirmation',
  templateUrl: './validconfirmation.component.html',
  styleUrls: ['./validconfirmation.component.scss']
})
export class ValidconfirmationComponent implements OnInit {

  @Input()
  component: string;
  @Input()
  modal: any;
  

  suc = false ;


  constructor(private router:Router, private toastr : ToastrService, private userService:UserService, private translate : TranslateService) { }

  ngOnInit() {
  }

  onClose() {
    this.modal.hide();
  }
  
deleteuser()
{
  
  const email =localStorage.getItem('email');
   
this.userService.deletebymail(email)
  .subscribe((response) => {

    this.modal.hide();

    localStorage.removeItem('email');
  
  
  
    localStorage.removeItem('access_token');
      setTimeout(() => {
        this.router.navigate(['/']);
        localStorage.removeItem('access_token');
      }, 1000);
      window.location.reload();
      localStorage.removeItem('access_token');
    
  }
  );
  

}


}
