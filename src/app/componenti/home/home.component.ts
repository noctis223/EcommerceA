import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { map } from 'rxjs/internal/operators/map';
import { ImmaginiprocessService } from 'src/app/immaginiprocess.service';
import { ProdottoserviceTsComponent } from 'src/app/servcie/prodottoservice.ts/prodottoservice.ts.component';
import { Product } from 'src/model/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageSize: number=10
  pageNumber: number=0
  sortBy: string=''
  prodotti: Product[]= [];
  showLoadButton:boolean=true;
  tipoRicerca:string='nome';
  prezzoMinimo:number=0;
  prezzoMassimo:number=0;

  isAdmin = this.keycloak.getUserRoles().includes('Admin');
  nome: string = '';

constructor(private readonly keycloak: KeycloakService,private prodottservice: ProdottoserviceTsComponent, private imageprocessing:ImmaginiprocessService,
  private router: Router) {}

  ngOnInit(): void {
    this.showprodotti();
  }

  public showprodotti(){
    this.prodottservice.visualizzarProduct(this.pageSize, this.pageNumber, this.sortBy).pipe(
        map((x: Product[],i)=> x.map((prodotto:Product)=>this.imageprocessing.createImages(prodotto))))

        .subscribe(
          (result: Product[]) => {
            console.log(result);
            if(result.length == 10) {
              this.showLoadButton = true;
            } else {
              this.showLoadButton = false;
            }
            result.forEach(p => this.prodotti.push(p));
          },
          (error: { status: number; }) => {
            if (error.status === 204) {
            }
          }
        );
  }

  dettagliprodotto(id: any) {
    this.router.navigate(['/dettagliprodotto', {id: id}]);
  }

  loadMoreProduct() {
    this.pageNumber=this.pageNumber+1;
    this.showprodotti();
}


search(nome: string) {
    this.pageNumber=0;
    this.prodotti= [];
    if(this.tipoRicerca==='nome'){
    this.prodottservice.cercapernome(this.nome,this.pageSize, this.pageNumber, this.sortBy).pipe(
      map((x: Product[],i)=> x.map((prodotto:Product)=>this.imageprocessing.createImages(prodotto))))

      .subscribe(
        (result: Product[]) => {
          console.log(result);
          if(result.length == 10) {
            this.showLoadButton = true;
          } else {
            this.showLoadButton = false;
          }
          result.forEach(p => this.prodotti.push(p));

        },
        (error: { status: number; }) => {
          if (error.status === 204) {
            // Nessun prodotto disponibile
          }
        }
      );



}
else if (this.tipoRicerca=='tipologia'){
  this.prodottservice.cercapertipologia(this.nome,this.pageSize, this.pageNumber, this.sortBy).pipe(
    map((x: Product[],i)=> x.map((prodotto:Product)=>this.imageprocessing.createImages(prodotto))))

    .subscribe(
      (result: Product[]) => {
        console.log(result);
        if(result.length == 10) {
          this.showLoadButton = true;
        } else {
          this.showLoadButton = false;
        }
        result.forEach(p => this.prodotti.push(p));

      },
      (error: { status: number; }) => {
        if (error.status === 204) {

        }
      }
    );


}
else if (this.tipoRicerca=='avanzata'){
  this.prodottservice.cercaavanzata(this.nome,this.prezzoMinimo,this.prezzoMassimo,this.pageSize, this.pageNumber, this.sortBy).pipe(
    map((x: Product[],i)=> x.map((prodotto:Product)=>this.imageprocessing.createImages(prodotto))))

    .subscribe(
      (result: Product[]) => {
        console.log(result);
        if(result.length == 10) {
          this.showLoadButton = true;
        } else {
          this.showLoadButton = false;
        }
        result.forEach(p => this.prodotti.push(p));

      },
      (error: { status: number; }) => {
        if (error.status === 204) {
          // Nessun prodotto disponibile
        }
      }
    );
}

}
}
