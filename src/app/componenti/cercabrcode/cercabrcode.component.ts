import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ImmaginiprocessService } from 'src/app/immaginiprocess.service';
import { ProdottoserviceTsComponent } from 'src/app/servcie/prodottoservice.ts/prodottoservice.ts.component';
import { ShowimmaginedialogComponent } from 'src/app/showimmaginedialog/showimmaginedialog.component';
import { Product } from 'src/model/product.model';

@Component({
  selector: 'app-cercabrcode',
  templateUrl: './cercabrcode.component.html',
  styleUrls: ['./cercabrcode.component.css']
})
export class CercabrcodeComponent {
  barcode: string | undefined;
  product!: Product;

  constructor(private prodottoservice: ProdottoserviceTsComponent,private immaginidialog :MatDialog,
    private immageprocessing: ImmaginiprocessService , private router:Router) { }


    searchProductByBarcode() {
      if (this.barcode) {
        this.prodottoservice.searchbybrcode(this.barcode).pipe(
          map((prodotto: Product) => this.immageprocessing.createImages(prodotto))
        ).subscribe(
          (result: Product) => {
            this.product = result;
          },
          (error: { status: number }) => {
            // Gestisci gli errori
          }
        );
      } else {
        // Gestisci il campo barcode vuoto
      }
    }


  eliminaprodotto(id: any){
    this.prodottoservice.eliminaprodoto(id).subscribe(
      (resp) => {

            },
      (error: HttpErrorResponse) =>{
        console.log(error);}
    )
  }

  showimmagine(prodotto: Product) {
    console.log(prodotto);
    this.immaginidialog.open(ShowimmaginedialogComponent, {
      data: {
        images: prodotto.immagini
      },
      height: '500px',
      width: '800px'
    });
  }


  editproduct(id: any) {
    this.router.navigate(['/aggiungiprodotto', {id: id}]);
  }
}
