import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ImmaginiprocessService } from 'src/app/immaginiprocess.service';
import { ProdottoserviceTsComponent } from 'src/app/servcie/prodottoservice.ts/prodottoservice.ts.component';
import { ShowimmaginedialogComponent } from 'src/app/showimmaginedialog/showimmaginedialog.component';
import { Product } from 'src/model/product.model';

@Component({
  selector: 'app-cercanome',
  templateUrl: './cercanome.component.html',
  styleUrls: ['./cercanome.component.css']
})
export class CercanomeComponent implements OnInit{

  searchTerm!: string;
  prodotti: Product[]= [];
  pageNumber: number = 0;
  pageSize: number = 10;
  sortBy :string= 'id';
  displayedColumns: string[] = ['id', 'nome', 'prezzo', 'quantita','brend', 'immagini','modifica', 'elimina'];
  constructor(private prodottoservice : ProdottoserviceTsComponent,private immaginidialog :MatDialog,
    private immageprocessingg: ImmaginiprocessService , private router:Router){}


  ngOnInit(): void {
    this.showAll();
  }

  showAll(): void {
    if (this.searchTerm){
    this.prodottoservice.visualizzarProductbyname(this.searchTerm,this.pageSize, this.pageNumber, this.sortBy).pipe(
      map((x: Product[],i)=> x.map((prodotto:Product)=>this.immageprocessingg.createImages(prodotto))))

      .subscribe(
        (result: Product[]) => {
          this.prodotti=result;
          // Gestisci il risultato qui
        },
        (error: { status: number; }) => {
          if (error.status === 204) {
            // Nessun prodotto disponibile
          } else {
            // Gestisci altri errori
          }
        }
      );}
  }
  previousPage() {
    if (this.pageNumber > 0) {
      this.pageNumber--;
    }
    this.showAll();
  }

  nextPage() {
    this.pageNumber++;
    this.showAll();
  }


  isLastPage() {
    return this.prodotti.length < this.pageSize;
  }

  eliminaprodotto(id: any){
    this.prodottoservice.eliminaprodoto(id).subscribe(
      (resp) => {
       this.showAll();
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


