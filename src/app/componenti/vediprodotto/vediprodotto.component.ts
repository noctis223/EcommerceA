import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdottoserviceTsComponent } from 'src/app/servcie/prodottoservice.ts/prodottoservice.ts.component';
import { Product } from 'src/model/product.model';

@Component({
  selector: 'app-vediprodotto',
  templateUrl: './vediprodotto.component.html',
  styleUrls: ['./vediprodotto.component.css']
})
export class VediprodottoComponent implements OnInit {
  attuale=0;
  prodotto!: Product;
  articoloAggiunto:boolean=false

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProdottoserviceTsComponent) { }


  ngOnInit(): void {
    this.prodotto = this.activatedRoute.snapshot.data['prodotto'];
    console.log(this.prodotto)

  }

  changeIndex(index: any) {
    this.attuale = index;
  }

  acquistaora(id: any){
    this.router.navigate(['acquistaora',{id:this.prodotto.id}]);
  }

  aggiungialCarrello(id: any){
    this.articoloAggiunto = true;
    this.productService.aggiungiCarrello(id).subscribe(
      (response: any) => {
        console.log(response);
      }, (error: any)=> {
        console.log(error);
      }
    );
  }

}
