import { Component, OnInit } from '@angular/core';
import { ProdottoserviceTsComponent } from 'src/app/servcie/prodottoservice.ts/prodottoservice.ts.component';
import { mieiOrdini } from 'src/model/Ordine.model';
import { reclamo } from 'src/model/Reclamo.model';

@Component({
  selector: 'app-allreclami',
  templateUrl: './allreclami.component.html',
  styleUrls: ['./allreclami.component.css']
})
export class AllreclamiComponent implements OnInit {

  displayedColumns: string[] = ['id', 'buyer','email', 'ordine', 'descrizioneproblema','Chiuso'];
  dataSource:reclamo[] = [];



  constructor(private productService: ProdottoserviceTsComponent) { }

  ngOnInit(): void {
    this.getAllreclamiAdmin();
  }

  getAllreclamiAdmin() {
    this.productService.getallreclami().subscribe(
      (resp: reclamo[]) => {
        this.dataSource = resp;
        console.log(resp);
      }, (error: any) => {
        console.log(error);
      }
    );
  }

  Chiudireclamo(id: any) {
    console.log(id);
    this.productService.eliminareclamo(id).subscribe(
      (response: any) => {
        this.getAllreclamiAdmin();
        console.log(response);
      }, (error: any) => {
        console.log(error);
      }
    );
  }

}
