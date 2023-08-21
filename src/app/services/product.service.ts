import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Produit } from '../domain/Product';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User6 } from '../domain/User6';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL_BASE = environment.apiBaseUrl;
  URL_PROD = '/products';
  URL_PRODDONE = '/productsdone';
  URL_ADD_PRODUCT_DONE = '/addProductDoneToUser'
  URL_REMOVE_PROD_DONE = '/deleteDoneProductFromUser';
  URL_CMD = '/all';
  UP_STATUS : '/status';
  URL_CREATE = '/create'
 

  deleteDoneProductFromUser
 
  constructor(private http: HttpClient) { }
  private person = {
    'mail': localStorage.getItem('email')
     };

  addProductToUser(produit: Produit, qte: number , code: string) {
    const addBody = {
      'person': this.person,
      'product': produit,
      'qte': qte,
      'code': code
    } ;
    return <Observable<Produit>> this.http.post(this.URL_BASE + this.URL_PRODDONE + this.URL_ADD_PRODUCT_DONE, addBody);
  
  }


  addProduct(body) {
 
    return <Observable<Produit>> this.http.post(this.URL_BASE + this.URL_PROD + this.URL_CREATE, body);
  
  }




  getOneProduct(id: number) {
    return this.http.get<any>(this.URL_BASE +this.URL_PROD +"/" + id)
  }


  getAllProducts() {
    return this.http.get<any>(this.URL_BASE +this.URL_PROD )
  }


  addProductsToUser(list: any ,person : User6, code: string) {
    const addBody = {
      'person': person,
      'list': list,
      'code': code
    } ;
    return <Observable<Produit>> this.http.post(this.URL_BASE + this.URL_PRODDONE + this.URL_ADD_PRODUCT_DONE , addBody);
  
  }



  updateProduct(idpro : any ,email : string, qte : any , code: string ) {
     const personon = {
      'mail': email
       };
    const addBody = {
      'person': personon,
      'idpro': idpro,
      'qte':qte,
      'code': code
    } ;
   
    
    return this.http.post<any>(this.URL_BASE + this.URL_PRODDONE + '/status'  , addBody);
  
  }


  getAllCommandes(x){
    let params = new HttpParams();
    params = params.append('x', x);
    
    return <any> this.http.get(this.URL_BASE + this.URL_PRODDONE  + this.URL_CMD  , { params: params});
  

    
  }


  getProducts(){
       
    return <any> this.http.get(this.URL_BASE + this.URL_PRODDONE  + this.URL_CMD);
  
  }
 




  getProductById(idpro: number) {
    return <Observable<Produit>> this.http.get(this.URL_BASE + this.URL_PROD + '/' + idpro);

  }

  updateprod(idpro: number , x: any) {
    return <any> this.http.put(this.URL_BASE + this.URL_PROD + '/' + idpro , x);

  }

  updateprodimg(idpro: number , x: any) {
    return <any> this.http.put(this.URL_BASE + this.URL_PROD + '/pic/' + idpro , x);

  }

  
  updateprodbod(idpro: number , x: any) {
    return <any> this.http.put(this.URL_BASE + this.URL_PROD + '/bod/' + idpro , x);

  }


  
  deleteprod(idpro: number) {
    return <Observable<Produit>> this.http.delete(this.URL_BASE + this.URL_PROD + '/' + idpro);

  }
  getAllUserrCarts(email) {
    let params = new HttpParams();
    params = params.append('email', email);
    return <Observable<any>> this.http.get(this.URL_BASE + this.URL_PRODDONE, { params: params});
  }

  getAllUserCarts() {
    let params = new HttpParams();
    params = params.append('email', this.person.mail);
    return <Observable<any>> this.http.get(this.URL_BASE + this.URL_PRODDONE, { params: params});
  }






  removeDoneProductFromUser(idpro: number): Observable<boolean> {
    const removeBody = {
      'email': this.person.mail,
      'idpro': idpro,
      'code':"77777",
      'qte':5,
      
      
    } ;
    console.log(removeBody);
     return <Observable<boolean>> this.http.post(this.URL_BASE + this.URL_PRODDONE + this.URL_REMOVE_PROD_DONE, removeBody);
 
    }

}


