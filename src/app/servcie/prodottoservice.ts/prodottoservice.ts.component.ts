import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Ordine } from 'src/model/Order.model';
import { mieiOrdini } from 'src/model/Ordine.model';
import { reclamo } from 'src/model/Reclamo.model';
import { Product } from 'src/model/product.model';


@Injectable({
  providedIn: 'root'
})



export class ProdottoserviceTsComponent {

  constructor(private httpClient: HttpClient) { }

  public addProduct(prodotto: FormData) {
    return this.httpClient.post<Product>('http://localhost:8082/prodotti/aggiungiprodotto', prodotto);
  }

  public visualizzarProduct(pageSize: number, pageNumber: number, sortBy: string) : Observable<Product[]> {
    let params = new HttpParams()
    .set('pageSize', pageSize.toString())
    .set('pageNumber', pageNumber.toString())
    .set('sortBy', sortBy);
    return this.httpClient.get<Product[]>('http://localhost:8082/prodotti/showall', { params });}


public eliminaprodoto(id: number){
  return this.httpClient.delete("http://localhost:8082/prodotti/eliminaprodotto/"+id);

}
public getprodottobyid(id: string) {
  return this.httpClient.get<Product>("http://localhost:8082/prodotti/getprodottobyid/"+id);
}

public visualizzarProductbyname(nome: string ,pageSize: number, pageNumber: number, sortBy: string) : Observable<Product[]> {
  let params = new HttpParams()
  .set('nome', nome)
  .set('pageSize', pageSize.toString())
  .set('pageNumber', pageNumber.toString())
  .set('sortBy', sortBy);
  return this.httpClient.get<Product[]>("http://localhost:8082/prodotti/search/byname",{ params });
}

public searchbybrcode(brcode: string) : Observable<Product> {
  let params = new HttpParams()
  .set('brcode', brcode)
  return this.httpClient.get<Product>("http://localhost:8082/prodotti/search/byBrcode",{ params });
}

public acquistaora(ordine: Ordine)  {
  return this.httpClient.post("http://localhost:8082/ordini/acquistaora",ordine);
}

public cercapernome(nome:string,pageSize: number, pageNumber: number, sortBy: string) : Observable<Product[]> {
  let params = new HttpParams()
  .set('nome', nome)
  .set('pageSize', pageSize.toString())
  .set('pageNumber', pageNumber.toString())
  .set('sortBy', sortBy);
  return this.httpClient.get<Product[]>('http://localhost:8082/prodotti/search/byname', { params });}



public cercapertipologia(tipologia:string,pageSize: number, pageNumber: number, sortBy: string) : Observable<Product[]> {
  let params = new HttpParams()
  .set('tipologia', tipologia)
  .set('pageSize', pageSize.toString())
  .set('pageNumber', pageNumber.toString())
  .set('sortBy', sortBy);
  return this.httpClient.get<Product[]>('http://localhost:8082/prodotti/search/byTipologia', { params });}


  public cercaavanzata(nome:string,prezzomin:number,prezzomax:number,pageSize: number, pageNumber: number, sortBy: string) : Observable<Product[]> {
    let params = new HttpParams()

    .set('prezzomin', prezzomin)
    .set('prezzomax', prezzomax)
    .set('pageSize', pageSize.toString())
    .set('pageNumber', pageNumber.toString())
    .set('sortBy', sortBy);
    return this.httpClient.get<Product[]>('http://localhost:8082/prodotti/search/advance', { params });}


    public aggiungiCarrello(id:any)  {
      let params = new HttpParams()
      return this.httpClient.get('http://localhost:8082/carrello/add/'+id + '/1');}

    public getCarrello()  {
        return this.httpClient.get<any[]>('http://localhost:8082/carrello');}

    public Ordine(){
      return this.httpClient.get('http://localhost:8082/ordini/ordine');}

      public cambiaquantita(id:any,quantita:number)  {
      console.log('http://localhost:8082/carrello/update/'+id+'/'+quantita)
       return this.httpClient.get('http://localhost:8082/carrello/update/'+id + '/' +quantita);

      }

      public eliminaprodottocarrello(id:any)  {
        console.log('http://localhost:8082/carrello/delede/'+id)
         return this.httpClient.delete('http://localhost:8082/carrello/delede/'+id);

        }

    public getOrdini() :Observable<mieiOrdini[]>{
        return this.httpClient.get<mieiOrdini[]>('http://localhost:8082/ordini/mieiordini');

    }

    public getallordini() :Observable<mieiOrdini[]>{
      return this.httpClient.get<mieiOrdini[]>('http://localhost:8082/ordini/allordini');

  }

  public segnaSpedito(id:Number) {
    return this.httpClient.get('http://localhost:8082/ordini/cambiastato/'+id);

}

public getOrdiniByStato (stato:string) :Observable<mieiOrdini[]>{
  let params = new HttpParams()

  .set('stato', stato)
  return this.httpClient.get<mieiOrdini[]>('http://localhost:8082/ordini/mieiordini/stato', {params});

}

public getOrdiniByDateRange(startDate:string, endDate:string):Observable<mieiOrdini[]> {
  let params = new HttpParams()
  .set('startDate', startDate)
  .set('endDate', endDate)

  return this.httpClient.get<mieiOrdini[]>('http://localhost:8082/ordini/mieiordini/perdata', {params});

}

creareReclamo(id: string | null, descrizione: string): Observable<any> {
  const url = 'http://localhost:8082/reclamo/creareclamo';
  const parsedId = id ? parseInt(id) : null;
  const body = { id: parsedId, descrizione: descrizione };
  console.log(body);
  return this.httpClient.post(url, JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } });
}

public getallreclami() :Observable<reclamo[]>{
  return this.httpClient.get<reclamo[]>('http://localhost:8082/reclamo/allreclami');

}

public eliminareclamo(id:any)  {
  console.log('http://localhost:8082/reclamo/allreclami/delede/'+id);
   return this.httpClient.delete('http://localhost:8082/reclamo/allreclami/delede/'+id);

  }

  public getdettagliordine(id:any):Observable<any[]> {
    console.log('http://localhost:8082/ordini/meiordini/dettagliordine/'+id);
     return this.httpClient.get<any[]>('http://localhost:8082/ordini/mieiordini/dettagliordine/'+id);

    }

    public creareso(id:any) :Observable<any>{
      return this.httpClient.post('http://localhost:8082/reclamo/creareso',id);

    }


    public getOrdinibyid(id:any) :Observable<any>{
      return this.httpClient.get<mieiOrdini>('http://localhost:8082/ordini/resoid/'+id);

    }


    public getOrdiniresi() :Observable<mieiOrdini[]>{
      return this.httpClient.get<mieiOrdini[]>('http://localhost:8082/ordini/resi');
    }



    }


