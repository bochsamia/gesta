import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CyoComponent } from './cyo/cyo.component';

import { AdminGuard} from './guards/admin.guard';

import { LinksComponent } from './links/links.component';

import { InfospersonComponent } from './infosperson/infosperson.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { TemplateComponent } from './template/template.component';

import { AdminComponent } from './admin/admin.component';

import { LtdComponent } from './ltd/ltd.component';
import { LtiComponent } from './lti/lti.component';
import { LmbComponent } from './lmb/lmb.component';
import { GtdComponent } from './gtd/gtd.component';
import { SpgComponent } from './spg/spg.component';
import { GtiComponent } from './gti/gti.component';
import { GdmComponent } from './gdm/gdm.component';
import { DvmComponent } from './dvm/dvm.component';
import { GdaComponent } from './gda/gda.component';
import { PagComponent } from './pag/pag.component';
import { CnxComponent } from './cnx/cnx.component';
import { MmpComponent } from './mmp/mmp.component';
import { ListMembreComponent } from './list-membre/list-membre.component';
import { DisconnectComponent } from './disconnect/disconnect.component';




const routes: Routes = [




  { path: '', component: AdminComponent  },



  { path: 'gti', component: GtiComponent  },

  { path: 'pag', component: PagComponent  },


  { path: 'gdm', component: GdmComponent  },


  { path: 'dvm', component: DvmComponent  },



  { path: 'gtd', component: GtdComponent  },

  { path: 'spg', component: SpgComponent  },




  { path: 'ltd', component: LtdComponent  },

  { path: 'lti', component: LtiComponent  },


  { path: 'lmb', component: LmbComponent  },

  { path: 'gda', component: GdaComponent  },

  { path: 'Listmemb', component: ListMembreComponent },

  { path: 'disconnect', component: DisconnectComponent },






  { path: 'admin', component: AdminComponent  },


  {

    canActivate: [AdminGuard],

    path:'template', component:TemplateComponent , children :


     [





     ]},





  { path: 'confirmation', component: ConfirmationComponent },


  { path: 'personinfos', component: InfospersonComponent },




  { path: 'mmp', component: MmpComponent },


  { path: 'cyo', component: CyoComponent },


  { path : 'cnx' , component : CnxComponent},


  { path: 'links', component: LinksComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
