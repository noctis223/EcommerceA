import { Component, OnInit } from '@angular/core';
import { ProdottoserviceTsComponent } from 'src/app/servcie/prodottoservice.ts/prodottoservice.ts.component';
import { mieiOrdini } from 'src/model/Ordine.model';

@Component({
  selector: 'app-allordini',
  templateUrl: './allordini.component.html',
  styleUrls: ['./allordini.component.css']
})
export class AllordiniComponent implements OnInit {
  displayedColumns: string[] = ['id', 'prodotto', 'nome', 'indirizzo', 'stato','spedito'];
  dataSource:mieiOrdini[] = [];



  constructor(private productService: ProdottoserviceTsComponent) { }

  ngOnInit(): void {
    this.getAllOrderDetailsForAdmin();
  }

  getAllOrderDetailsForAdmin() {
    this.productService.getallordini().subscribe(
      (resp: mieiOrdini[]) => {
        this.dataSource = resp;
        console.log(resp);
      }, (error: any) => {
        console.log(error);
      }
    );
  }

  markAsDelivered(id: any) {
    console.log(id);
    this.productService.segnaSpedito(id).subscribe(
      (response: any) => {
        this.getAllOrderDetailsForAdmin();
        console.log(response);
      }, (error: any) => {
        console.log(error);
      }
    );
  }



}

