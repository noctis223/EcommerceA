import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdottoserviceTsComponent } from 'src/app/servcie/prodottoservice.ts/prodottoservice.ts.component';
import { mieiOrdini } from 'src/model/Ordine.model';
import { formattaDataOra } from 'src/app/Data.utils';
import { Router } from '@angular/router';
import { dettagliordine } from 'src/model/dettagliordine.model';
import { SharedService } from 'src/model/client.model';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.css']
})
export class OrdiniComponent implements OnInit {
  Ordine: mieiOrdini[] = [];
  displayedColumns: string[] = ['id', 'datadiAcq', 'stato', 'totale', 'reclamo','dettagli','effettuareso'];
  filterForm!: FormGroup;


  constructor(
    private prodottoservice: ProdottoserviceTsComponent,
    private formBuilder: FormBuilder, private route:Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.createFilterForm();
    this.getordini();
  }

  createFilterForm() {
    this.filterForm = this.formBuilder.group({
      stato: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  getordini() {
    this.prodottoservice.getOrdini().subscribe(
      (response: mieiOrdini[]) => {
        console.log(response);
        this.Ordine = response.map((ordine) => ({
          ...ordine,
          datadiAcq: formattaDataOra(new Date(ordine.datadiAcq), 'it')
        }));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  applyFilters() {
    const filters = this.filterForm.value;
    const { stato, startDate, endDate } = filters;
    if (stato) {
      this.filterByStato(stato);
    } else if (startDate && endDate) {
      this.filterByDateRange(startDate, endDate);
    }
    else
    this.getordini();
  }

  filterByStato(stato: string) {
    this.prodottoservice.getOrdiniByStato(stato).subscribe(
      (response: mieiOrdini[]) => {
        console.log(response);
        this.Ordine = response.map((ordine) => ({
          ...ordine,
          datadiAcq: formattaDataOra(new Date(ordine.datadiAcq), 'it')
        }));
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  filterByDateRange(startDate: string, endDate: string) {
    this.prodottoservice.getOrdiniByDateRange(startDate, endDate).subscribe(
      (response: mieiOrdini[]) => {
        console.log(response);
        this.Ordine = response.map((ordine) => ({
          ...ordine,
          datadiAcq: formattaDataOra(new Date(ordine.datadiAcq), 'it')
        }));
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  aprireclamo(id: number): void {
    this.route.navigate(['/reclamo',id]);
  }


  getdettagli(id: number) {
    this.prodottoservice.getdettagliordine(id).subscribe(
      (response: dettagliordine[]) => {
        this.sharedService.response = response;
        this.route.navigate(['/dettagli']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  aprireso(id:number):void  {
  this.prodottoservice.creareso(id).subscribe(
    (response: any) => {
      console.log(response);
      this.route.navigate(["/confermareso"]);
    },
    (      error: any) => {
      console.log(error);
      this.route.navigate(["/errorereso"]);
      // Gestisci l'errore durante la creazione del reclamo
    }
  );
}
  }



