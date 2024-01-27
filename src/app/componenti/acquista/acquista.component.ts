import { Component, Injector, NgZone, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdottoserviceTsComponent } from 'src/app/servcie/prodottoservice.ts/prodottoservice.ts.component';
import { Ordine } from 'src/model/Order.model';
import { Product } from 'src/model/product.model';

declare var Razorpay: any;

@Component({
  selector: 'app-acquista',
  templateUrl: './acquista.component.html',
  styleUrls: ['./acquista.component.css']
})
export class AcquistaComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProdottoserviceTsComponent,
    private router: Router,
    private injector: Injector) { }

   productDetails!: Product;
   ordine: Ordine = {
      nome:'',
      indirizzo: '',
      prodottiacquistati:[],
      contatto: ''
    }



    ngOnInit(): void {
      this.productDetails = this.activatedRoute.snapshot.data['dettagliprodotto'];

      const product = this.productDetails; // Assume che `this.productDetails` sia un singolo oggetto di prodotto
      this.ordine.prodottiacquistati.push(
        {  quantita: 1, prodotto:product, prezzo: product.prezzo }
      );

      console.log(product);
      console.log(this.ordine);
    }

  PlaceOrder(orderfor:NgForm){
    this.productService.acquistaora(this.ordine).subscribe(
      (resp)=>{
        console.log(resp);
        orderfor.reset();
        this.router.navigate(["/confermaordine"]);
      },
      (err)=>{
        console.log(err);
      }
    )

  }

  onQuantityChanged(q: any, productId: number) {
    this.ordine.prodottiacquistati.filter(
      (orderProduct) => orderProduct.prodotto.id === productId
    )[0].quantita = q;
  }

  getTotale(id: number,prezzo: number){
     const filteredProduct=this.ordine.prodottiacquistati.filter(
      (productQuantity) => productQuantity.prodotto.id === id
    );

    return filteredProduct[0].quantita * prezzo;
  }



  }


