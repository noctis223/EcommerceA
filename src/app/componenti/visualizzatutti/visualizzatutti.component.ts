import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Router } from '@angular/router';
import { map } from 'rxjs';
import { ImmaginiprocessService } from 'src/app/immaginiprocess.service';
import { ProdottoserviceTsComponent } from 'src/app/servcie/prodottoservice.ts/prodottoservice.ts.component';
import { ShowimmaginedialogComponent } from 'src/app/showimmaginedialog/showimmaginedialog.component';
import { Product } from 'src/model/product.model';
import * as xmljs from 'xml-js';

@Component({
  selector: 'app-visualizzatutti',
  templateUrl: './visualizzatutti.component.html',
  styleUrls: ['./visualizzatutti.component.css']
})
export class VisualizzatuttiComponent implements OnInit {
  prodotti: Product[]= [];
  pageNumber: number = 0;
  pageSize: number = 10;
  sortBy :string= 'id';
  displayedColumns: string[] = ['id', 'nome', 'prezzo', 'quantita','brend', 'immagini','modifica', 'elimina'];
  constructor(private prodottoservice : ProdottoserviceTsComponent,private immaginidialog :MatDialog,
    private immageprocessing: ImmaginiprocessService , private router:Router){}


  ngOnInit(): void {
    this.showAll();
  }


  showAll(): void {

    this.prodottoservice.visualizzarProduct(this.pageSize, this.pageNumber, this.sortBy).pipe(
      map((x: Product[],i)=> x.map((prodotto:Product)=>this.immageprocessing.createImages(prodotto))))

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
      );
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

  exportData() {
    const jsonData = this.prodotti
    .filter((prodotto) => prodotto.quantita > 100 && prodotto.brend === 'gucci')
    .map((prodotto) => {
      return {
        id: prodotto.id,
        nome: prodotto.nome,
        barCode: prodotto.barCode,
        descrizione: prodotto.descrizione,
        prezzo: prodotto.prezzo,
        quantita: prodotto.quantita,
        brand: prodotto.brend,
        colore: prodotto.colore,
        genere:prodotto.genere,
        taglia:prodotto.taglia,
        fasciaeta:prodotto.fasciaeta,
        tipologia: {
          id: prodotto.tipologia.id,
          tipo: prodotto.tipologia.tipo,
          descrizione: prodotto.tipologia.descrizione
        }
      };
    });


    const xmlData = xmljs.js2xml({ prodotti: jsonData }, { compact: true, ignoreComment: true, spaces: 4 });

    const element = document.createElement('a');
    const file = new Blob([xmlData], { type: 'text/xml' });
    element.href = URL.createObjectURL(file);
    element.download = 'prodotti.xml';
    element.click();
  }




}


