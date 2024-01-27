import { Injectable } from '@angular/core';
import { ProdottoserviceTsComponent } from './servcie/prodottoservice.ts/prodottoservice.ts.component';
import { ImmaginiprocessService } from './immaginiprocess.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from 'src/model/product.model';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottoEditService implements Resolve<Product> {
  constructor(private prodottoservice: ProdottoserviceTsComponent,
    private imageprocessing: ImmaginiprocessService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    const id = route.paramMap.get("id");

    if (id) {
      //then we have to fetch details from backend
       return this.prodottoservice.getprodottobyid(id)
              .pipe(
                map(p => this.imageprocessing.createImages(p))
              );
    } else {
      // return empty product observable.
      return of(this.getProductDetails());
    }
  }

  getProductDetails() {
    return {
        id: NaN,
        nome: '',
        descrizione: '',
        prezzo:0,
        quantita:0,
        brend: '',
        barCode: '',
        genere: '',
        colore:'',
        fasciaeta:'',
        taglia:'',
        tessuto: '',
        immagini: [] ,
        tipologia: {
          id:0,
          tipo: '',
          descrizione: ''
        }
      };
    };
  }

