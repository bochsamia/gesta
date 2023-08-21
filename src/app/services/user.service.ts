import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User4 } from '../domain/User4';
import { Observable } from 'rxjs';
import { Link } from '../domain/Link';
import { User6 } from '../domain/User6';
import { Userp } from '../domain/Userp';
import { User } from '../domain/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_BASE = environment.apiBaseUrl;
  URL_USER = '/membres';
  URL_LINK = '/links';
  URL_GET_USER = '/membres/getUser';
  URL_ADD_FRIEND = '/addFriendToUser';
  URL_FOLLOWING = '/following';
  URL_GET_LIKED ='/friends'
  URL_GET_LIKE ='/following'
  URL_DEL_FOLL = '/deleteFriendFromUser'
  URL_ADD_LINK = '/addlink';
  URL_ADD_USER ='/new'
  URL_GET_PHOTO ='/img'
  URL_GET_COUV = '/couverture'
  URL_UPDT_PASSWORD = '/updatePassword';
  URL_RMV_LINK = '/removeLinkFromUser'
  URL_UP_USER = '/upuserr';
  URL_ABOUT = '/about';
  URL_DELPERS = '/deleteuser/';
  
  URL_PAR_CREATE = '/parametres/create';


  URL_TD_CREATE = '/typedocument/create';

  URL_GET_ALLDOC = '/typedocument/all';

  URL_GET_ALLMEMB = '/membres/all';

  URL_GET_ALLDVM = '/dvm/all'


  URL_GET_ALLPAR = '/parametres/all';


  URL_DELDOC = '/typedocument/delete';

  URL_DELINF = '/infraction/delete';


  URL_GET_ID = '/typedocument/doc';

  URL_INFRA_ID = '/infraction/infra'

  URL_MEMB_ID = '/membres/memb';

  URL_DVM_ID = '/dvm/dvm';



  URL_UPMEMB = '/membres/up'

  URL_UPDOC = '/typedocument/up';

  URL_INF_CREATE = '/infraction/create'

  URL_TEST_PASSWORD = '/testPassword';

  URL_UPINF = '/infraction/up';

  URL_GET_IDINF = '/infraction/doc';

  URL_GET_ALLINF = '/infraction/all';

  URL_MEMB_CREATE = '/membres/create'

  URL_DVM_CREATE = '/dvm/create'



  routeToGo = '/';
  constructor(private http: HttpClient) { }

  helper = new JwtHelperService();
  currentUser: any = null;
   setUserToGo(route: string) {
    this.routeToGo = route;
   }
   
   private person = {
   'mail': localStorage.getItem('email')
    };

    
    private email =  localStorage.getItem('email');
  
    
    newdvm(doc : any) {
   
      const addBody = {
  
        "estAdmin": doc.estAdmin,
        "adresseMailMembre": doc.adresseMailMembre,
        "prenomMembre": doc.prenomMembre,
        "nomMembre": doc.nomMembre,
        "motPasseMembre": doc.motPasseMembre,
        "delegue": doc.delegue,
        "role": doc.role,
        "inputCms": doc.inputCms,
        "membreCms": doc.membreCms,
        "membreAp": doc.membreAp
   
  
      }
      return <Observable<any>> this.http.post(this.URL_BASE + this.URL_DVM_CREATE, addBody);
  
    }

    newmembre(doc : any) {
   
      const addBody = {
  
        "estAdmin": doc.estAdmin,
        "adresseMailMembre": doc.adresseMailMembre,
        "prenomMembre": doc.prenomMembre,
        "nomMembre": doc.nomMembre,
        "motPasseMembre": doc.motPasseMembre
   
  
      }
      return <Observable<any>> this.http.post(this.URL_BASE + this.URL_MEMB_CREATE, addBody);
  
    }


    deletedoc(id: number) {
      return <Observable<any>> this.http.delete(this.URL_BASE + this.URL_DELDOC + '/' + id);
  
    }

    deleteinf(id: number) {
      return <Observable<any>> this.http.delete(this.URL_BASE + this.URL_DELINF + '/' + id);
  
    }
    getdoc(id: number) {
      return <Observable<any>> this.http.get(this.URL_BASE + this.URL_GET_ID + '/' + id);
  
    }

    getinfra(id: number) {
      return <Observable<any>> this.http.get(this.URL_BASE + this.URL_INFRA_ID + '/' + id);
  
    }


    getmemb(id: number) {
      return <Observable<any>> this.http.get(this.URL_BASE + this.URL_MEMB_ID + '/' + id);
  
    }


    getdvm(id: number) {
      return <Observable<any>> this.http.get(this.URL_BASE + this.URL_DVM_ID + '/' + id);
  
    }




    newinf(inf : any){

      const addBody = {
      
        "libelleInf":inf.libelleInf,
        "nivGrav":inf.nivGrav,
        "maxNiv":inf.maxNiv,
        "nbInf":inf.nbInf
      }

      return <Observable<any>> this.http.post(this.URL_BASE + this.URL_INF_CREATE, addBody);

    }





    newdoc(doc : any) {
   
      const addBody = {
  
       "typeDocument" : doc.typeDocument ,
       "libelleTypeDocument" : doc.libelleTypeDocument ,
       "texteReference" : doc.texteReference,
       "dernierNumeroUtilise" : doc.dernierNumeroUtilise,
       "typeDocumentVise" : doc.typeDocumentVise,
       "saisieArticleVise" : doc.saisieArticleVise,
       "delaiMaxDepotEI" : doc.delaiMaxDepotEI,
       "delaiMaxDepotAMSA" : doc.delaiMaxDepotAMSA,
       "saisieNiveau" : doc.saisieNiveau,
       "niveauMax" : doc.niveauMax,
       "expressionMembresPrevue" : doc.expressionMembresPrevue,
       "tauxMinPalier1Vmp" : doc.tauxMinPalier1Vmp,
       "nbHeuresPalier1Horsete" : doc.nbHeuresPalier1Horsete,
       "nbHeuresPalier1Ete" : doc.nbHeuresPalier1Ete,
       "tauxMinPalier2Vmp" : doc.tauxMinPalier2Vmp,
       "nbHeuresPalier2" : doc.nbHeuresPalier2,
       "tauxMinPalier3Vmp" : doc.tauxMinPalier3Vmp,
       "valideEnSprRc" : doc.valideEnSprRc,
       "delaiMinBalanceSprRc" : doc.delaiMinBalanceSprRc,
       "nbmaxRefuses" : doc.nbmaxRefuses,
       "dureeReference" : doc.dureeReference,
       "dureeBlocageHorsete" : doc.dureeBlocageHorsete,
       "dureeBlocageEte" : doc.dureeBlocageEte,
       "nonExpressionType" : doc.nonExpressionType,
  
      }
      return <Observable<any>> this.http.post(this.URL_BASE + this.URL_TD_CREATE, addBody);
  
    }

    newpar(res : any) {
   
      const addBody = {
  
        nbMaxPrModifiables : res.nbMaxPrModifiables,
        jourDebutEte : res.jourDebutEte ,
        moisDebutEte : res.moisDebutEte,
        jourFinEte : res.jourFinEte,
        moisFinEte : res.moisFinEte,
        dureeMaxDiscussionAm : res.dureeMaxDiscussionAm,
        delaiMaxDepotPrAct : res.delaiMaxDepotPrAct,
        delaiMaxDepotAmAct : res.delaiMaxDepotAmAct,
        quorumReqRc : res.quorumReqRc,
        quorumSprReguliere : res.quorumSprReguliere,
        quorumSprDFond : res.quorumSprDFond,
        libelleSprReguliere : res.libelleSprReguliere,
        remiseQuestionDiscussionHorsSprRc : res.remiseQuestionDiscussionHorsSprRc,
        quorumSprRcDFondSystematique : res.quorumSprRcDFondSystematique,
        dureePeriodeComptageNonExpressions : res.dureePeriodeComptageNonExpressions,
        nbmaxNonExpressionsParmembre : res.nbmaxNonExpressionsParmembre,
        nonExprimeExpa : res.nonExprimeExpa,
        nbmaxAvertissements : res.nbmaxAvertissements,
        dureeExclusionTemporaire : res.dureeExclusionTemporaire,
        nbmaxExclusion : res.nbmaxExclusion,
  
      }
      return <Observable<any>> this.http.post(this.URL_BASE + this.URL_PAR_CREATE, addBody);
  
    }

    updatedoc(x){
     
      return this.http.put<any>(this.URL_BASE + this.URL_UPDOC  , x)
   
    }


    updatememb(x){
      return this.http.put<any>(this.URL_BASE + this.URL_UPMEMB  , x)
   
    }


    updateinf(x){
     
      return this.http.put<any>(this.URL_BASE + this.URL_UPINF  , x)
   
    }

    getinf(id: number) {
      return <Observable<any>> this.http.get(this.URL_BASE + this.URL_INFRA_ID + '/' + id);
  
    }


    getAllInf(){
      return this.http.get<any>(this.URL_BASE + this.URL_GET_ALLINF );
    
    }

    updateuser(x){
     
      return this.http.put<any>(this.URL_BASE + this.URL_USER + this.URL_UP_USER, x)
   
    }


    updateabout(x){
     
      return this.http.put<any>(this.URL_BASE + this.URL_USER + this.URL_ABOUT, x)
   
    }
  
    
    getAllUsers(){
      return this.http.get<any>(this.URL_BASE + this.URL_USER );
    
    }


    getAllDocs(){
      return this.http.get<any>(this.URL_BASE + this.URL_GET_ALLDOC );
    
    }

    getAllMembres(){
      return this.http.get<any>(this.URL_BASE + this.URL_GET_ALLMEMB );


    }


    getAllDvm(){
      return this.http.get<any>(this.URL_BASE + this.URL_GET_ALLDVM );


    }



    getAllParams(){
      return this.http.get<any>(this.URL_BASE + this.URL_GET_ALLPAR );
    
    }


    deleteuser(id: number) {
      return <Observable<any>> this.http.delete(this.URL_BASE + this.URL_USER + '/' + id);
  
    }


    deletebymail(email) {
      return <Observable<any>> this.http.delete(this.URL_BASE + this.URL_USER + this.URL_DELPERS +email);
  
    }
  
    addfollowing(friend: User4): Observable<String> {
      const addBody = {
        'friend': this.person,
        'person': friend
      } ;
  
      console.log(addBody)
        return <Observable<String>>this.http.post(this.URL_BASE + this.URL_USER + this.URL_FOLLOWING, addBody);
    }
  

   addFriendToUser(friend: User4): Observable<String> {
    const addBody = {
      'person': this.person,
      'friend': friend
    } ;

    console.log(addBody)
      return <Observable<String>>this.http.post(this.URL_BASE + this.URL_USER + this.URL_ADD_FRIEND, addBody);
  }

  
  deleteFriendFromUser(email , emailfr): Observable<String> {
    const addBody = {
      'email': email,
      'emailfr': emailfr
    } ;

    console.log(addBody)
      return <Observable<String>>this.http.post(this.URL_BASE + this.URL_USER + this.URL_DEL_FOLL, addBody);
  }







  decodeToken(token: any) {
    return this.helper.decodeToken(token);
  }


  getUserAfterSignin(email: string)  {
    return this.getUser(email);
   }


   getUser(email: string) {
    let params = new HttpParams();
    params = params.append('initiales', email);
    return this.http.get<any>(this.URL_BASE +  this.URL_GET_USER, { params : params});

  }



  getLiked(email) {
    let params = new HttpParams();
    params = params.append('email', email);
    return this.http.get<any>(this.URL_BASE + this.URL_USER + this.URL_GET_LIKED, { params : params});

  }


  getLike(emailoo) {
    let params = new HttpParams();
    params = params.append('email', emailoo);
    return this.http.get<any>(this.URL_BASE + this.URL_USER + this.URL_GET_LIKE, { params : params});

  }

  updatephoto(x){
    let params = new FormData();
     params.append('email',this.email);
    params.append('photo', x);
    return this.http.put<any>(this.URL_BASE + this.URL_USER + this.URL_GET_PHOTO, params)
 
  }

  
  updatecouv(y){
    let params = new FormData();
     params.append('email',this.email);
    params.append('couverture', y);
    return this.http.put<any>(this.URL_BASE + this.URL_USER + this.URL_GET_COUV, params)
 
  }



  
  updateUser( email: String, nom: String , prenom:String, username : String , tel : String , adresse : String, fonction : String ) {
    const addBody = {
      'email': email,
      'nom': nom,
      'prenom' : prenom,
      'username' : username,
      'tel':tel,
      'adresse':adresse,
      'fonction':fonction
  


    } ;

    return  this.http.post<any>(this.URL_BASE + this.URL_USER , addBody);
  }



  getAuthorizationToken() {
    return localStorage.getItem('access_token');
  }

  getAuthorizationTokenAdmin() {
    return localStorage.getItem('access_token_admin');
  }

  getAllUserLinks(emailolink) {
    let params = new HttpParams();
    params = params.append('email', emailolink);
    return <Observable<any>> this.http.get(this.URL_BASE + this.URL_LINK, { params: params});
  }


  


  newuser(person : User6) {
   
    const addBody = {

      "nom": person.nom,
      "prenom": person.prenom,
      "username" : person.username,
      "mail": person.mail,
      "tel": person.tel,
      "adresse": person.adresse,
      "isadmin" : "notuser"

    }
    return <Observable<Link>> this.http.post(this.URL_BASE + this.URL_USER + this.URL_ADD_USER, addBody);

  }





  updatePassword( email: String, oldPass: String, newPass: String ) {
    const addBody = {
      'email': email,
      'oldPass': oldPass,
      'newPass': newPass
    } ;

    return  this.http.post<User>(this.URL_BASE + this.URL_USER + this.URL_UPDT_PASSWORD, addBody);
  }

  deletelink(bod) {
  


    return <Observable<any>> this.http.post(this.URL_BASE + this.URL_LINK  + this.URL_RMV_LINK, bod);

  }

  

   testPassword( email: String, oldPass: String) {
    const addBody = {
      'email': email,
      'oldPass': oldPass
      
    } ;

    return  this.http.post<User>(this.URL_BASE + this.URL_USER + this.URL_TEST_PASSWORD, addBody);
  }



  addLinkToUser(list : any) {
    const addBody = {
      'person': this.person,
      'list': list
    } ;
    return <Observable<Link>> this.http.post(this.URL_BASE + this.URL_LINK + this.URL_ADD_LINK, addBody);

  }


  validToken(): boolean {
    if ( this.getAuthorizationToken() !== null ) {
      if (!this.helper.isTokenExpired(this.getAuthorizationToken())) {
        return true;
      } else  { return false; }
    } else {
      return false;
    }
  }

  validTokenAdmin(): boolean {
    if ( this.getAuthorizationTokenAdmin() !== null ) {
      if (!this.helper.isTokenExpired(this.getAuthorizationTokenAdmin())) {
        return true;
      } else  { return false; }
    } else {
      return false;
    }
  }
}
