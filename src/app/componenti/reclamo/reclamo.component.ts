import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdottoserviceTsComponent } from 'src/app/servcie/prodottoservice.ts/prodottoservice.ts.component';

@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.component.html',
  styleUrls: ['./reclamo.component.css']
})

export class ReclamoComponent implements OnInit {
  reclamoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder , private prodottoservice:ProdottoserviceTsComponent,private activatedRoute: ActivatedRoute, private router:Router) {}
  id!: string | null;

  ngOnInit() {
    if (this.activatedRoute) {
      this.activatedRoute?.paramMap.subscribe(params => {
        this.id = params.get('id');
        console.log('ID del ordine:',this.id);
        // Puoi utilizzare l'ID come necessario
      });
    }

    this.reclamoForm = this.formBuilder.group({
      descrizione: ['', Validators.required]
    });
  }


  creareReclamo() {
    if (this.reclamoForm.invalid) {
      return;
    }

    const descrizione = this.reclamoForm.value.descrizione;
    this.prodottoservice.creareReclamo(this.id, descrizione).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(["/confermareclamo"]);
      },
      (      error: any) => {
        console.log(error);
        this.router.navigate(["/erroreclamo"]);
        // Gestisci l'errore durante la creazione del reclamo
      }
    );
  }

}

