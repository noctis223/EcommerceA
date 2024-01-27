import { Component } from '@angular/core';
import { SharedService } from 'src/model/client.model';
import { dettagliordine } from 'src/model/dettagliordine.model';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent {

  dettagli: dettagliordine[] = [];
  displayedColumns: string[] = [ 'prodotto','brend','quantita','taglia','prezzo','subtotale'];
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    const response = this.sharedService.response;
    console.log(response);
    this.dettagli=this.sharedService.response;
  }

  getTotal(): number {
  let total = 0;
  for (const element of this.dettagli) {
    total += element.prezzo;
  }
  return total;
 }


}
