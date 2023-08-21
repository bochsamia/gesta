import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { CyoComponent } from './cyo/cyo.component';
import {TranslateLoader,TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient , HttpClientModule} from '@angular/common/http';

import { SearchProduitComponent } from './search/search-produit/search-produit.component';
import { ProduitPipe } from './pipes/produit.pipe';

import { Interceptor } from './interceptors/interceptor';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { BarRatingModule } from 'ngx-bar-rating';
import { MenuComponent } from './menu/menu.component';

import { LinksComponent } from './links/links.component';

import { DashadminComponent } from './dashadmin/dashadmin.component';
import { ClipboardModule } from 'ngx-clipboard';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { InfospersonComponent } from './infosperson/infosperson.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ValidconfirmationComponent } from './validconfirmation/validconfirmation.component';
import { TemplateComponent } from './template/template.component';

import { DetailconfirmComponent } from './detailconfirm/detailconfirm.component';
import { DetailuserComponent } from './detailuser/detailuser.component';
import { AdminComponent } from './admin/admin.component';
import { ValidpasswordComponent } from './validpassword/validpassword.component';
import { ValidComponent } from './valid/valid.component';
import { DeeplinkComponent } from './deeplink/deeplink.component';
import { AnimatedArrowsButtonComponent } from './animated-arrows-button/animated-arrows-button.component';
import { DeeplinkiosComponent } from './deeplinkios/deeplinkios.component';
import { ConfvalidateComponent } from './confvalidate/confvalidate.component';
import { ConfdeleteComponent } from './confdelete/confdelete.component';
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
import { DisconnectComponent } from './disconnect/disconnect.component';
import { ListMembreComponent } from './list-membre/list-membre.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



export function HttpLoaderFactory (http:HttpClient)
{
  return new TranslateHttpLoader (http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    CyoComponent,

    SearchProduitComponent,
    ProduitPipe,
    MenuComponent,

    LinksComponent,

    DashadminComponent,
    InfospersonComponent,
    ConfirmationComponent,
    ValidconfirmationComponent,
    TemplateComponent,

    DetailconfirmComponent,
    DetailuserComponent,
    AdminComponent,
    ValidpasswordComponent,
    ValidComponent,
    DeeplinkComponent,
    AnimatedArrowsButtonComponent,
    DeeplinkiosComponent,
    ConfvalidateComponent,
    ConfdeleteComponent,
    LtdComponent,
    LtiComponent,
    LmbComponent,
    GtdComponent,
    SpgComponent,
    GtiComponent,
    GdmComponent,
    DvmComponent,
    GdaComponent,
    PagComponent,
    CnxComponent,
    MmpComponent,
    DisconnectComponent,
    ListMembreComponent,


  ],
  exports: [AppComponent],

  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatProgressBarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ClipboardModule,
    ToastrModule.forRoot(),
    MatCheckboxModule,
    BrowserAnimationsModule,
    BarRatingModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    TranslateModule.forRoot({

      loader:{

        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]


      }

    }),
  ],
  providers: [
    {

      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    ProduitPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
