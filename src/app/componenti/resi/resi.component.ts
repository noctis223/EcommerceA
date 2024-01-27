
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdottoserviceTsComponent } from 'src/app/servcie/prodottoservice.ts/prodottoservice.ts.component';
import { mieiOrdini } from 'src/model/Ordine.model';
import { formattaDataOra } from 'src/app/Data.utils';
import { Router } from '@angular/router';
import { dettagliordine } from 'src/model/dettagliordine.model';
import { SharedService } from 'src/model/client.model';

@Component({
  selector: 'app-resi',
  templateUrl: './resi.component.html',
  styleUrls: ['./resi.component.css']
})
export class ResiComponent implements OnInit {
  Ordine: mieiOrdini[] = [];
  displayedColumns: string[] = ['id', 'datadiAcq', 'stato', 'totale'];
  filterForm!: FormGroup;


  constructor(
    private prodottoservice: ProdottoserviceTsComponent,
    private formBuilder: FormBuilder, private route:Router,
    private sharedService: SharedService
  ) {}


  ngOnInit(): void {
    this.createFilterForm();
    this.getordiniresi();
  }

  createFilterForm() {
    this.filterForm = this.formBuilder.group({
      codice: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  getordiniresi() {
    this.prodottoservice.getOrdiniresi().subscribe(
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
    const { codice, startDate, endDate } = filters;
    if (codice) {
      this.filterBycodice(codice);
    } else if (startDate && endDate) {
      this.filterByDateRange(startDate, endDate);
    }
    else
    this.getordiniresi();
  }
  filterBycodice(codice: string) {
    this.prodottoservice.getOrdinibyid(codice).subscribe(
      (response: mieiOrdini) => { // Change mieiOrdini[] to mieiOrdini
        console.log(response);
        if (response) {
          // Clear the existing data and set the filtered order as the only data in the array
          this.Ordine = [
            {
              ...response,
              datadiAcq: formattaDataOra(new Date(response.datadiAcq), 'it')
            }
          ];
        } else {
          // If no order is found for the given codice, set the array to an empty array
          this.Ordine = [];
        }
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
}
