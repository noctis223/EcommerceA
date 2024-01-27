import { Injectable } from '@angular/core';
import { ProdottoserviceTsComponent } from './servcie/prodottoservice.ts/prodottoservice.ts.component';
import { ImmaginiprocessService } from './immaginiprocess.service';
import { Product } from 'src/model/product.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcquistaprodottoserviceService implements Resolve<Product> {

  constructor(
    private productServcice: ProdottoserviceTsComponent,
    private imageProcessingService: ImmaginiprocessService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Product | Observable<Product> | Promise<Product> {
    const id = route.paramMap.get("id") ?? "";
    return this.productServcice.getprodottobyid(id).pipe(
      map((product: Product) => this.imageProcessingService.createImages(product))
    );
  }
}

