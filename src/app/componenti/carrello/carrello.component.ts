import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdottoserviceTsComponent } from 'src/app/servcie/prodottoservice.ts/prodottoservice.ts.component';


@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
  ngOnInit(): void {
    this.getCarrello();
  }
  selectedPaymentMethod: string = "carta"; // Imposta il metodo di pagamento predefinito
  Carrello: any[] = [];
  totale: number = 0;

  constructor(private prodottservice: ProdottoserviceTsComponent,private router: Router,private injector: Injector ){}

  displayedColumns: string[] = ['nome','prezzo','descrizione','quantita','subtotale','elimina'];


  getCarrello() {
    this.prodottservice.getCarrello().subscribe(
      (response:any []) => {
        console.log(response);
        this.Carrello=response;
        this.totaleo();

      },
      (error) => {
        console.log(error);
      }
    );
  }

  ordine(){

    this.prodottservice.Ordine().subscribe(
      (response) => {
        console.log("Metodo di pagamento scelto:", this.selectedPaymentMethod);
        console.log(response);
        this.router.navigate(["/confermaordine"]);

      },
      (error) => {
        console.log(error);
      }
    );

  }

  totaleo() {
    this.totale = this.Carrello.reduce((acc, element) => acc + (element.quantita * element.prodotto.prezzo), 0);

  }

  onQuantityChanged(event: any, productId: number) {
    const selectedValue = event.target.value;
    const orderProduct = this.Carrello.find(item => item.prodotto.id === productId);
    if (orderProduct) {
      this.prodottservice.cambiaquantita(productId ,selectedValue).subscribe(
        (response) => {
          console.log(response)},
          (error) => {
            console.log(error);
          }
      );
      orderProduct.quantita = Number(selectedValue);
      this.totaleo();
    }

  }

  delete(id: any) {
    console.log(id);
    window.location.reload();
    this.prodottservice.eliminaprodottocarrello(id).subscribe(
      (resp: any) => {
        console.log(resp);
        this.getCarrello();

      }, (err: any) => {
        console.log(err);
      }
    );
  }












}
