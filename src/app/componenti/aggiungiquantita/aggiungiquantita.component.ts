import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiungiquantita',
  templateUrl: './aggiungiquantita.component.html',
  styleUrls: ['./aggiungiquantita.component.css']
})
export class AggiungiquantitaComponent {
  constructor(private http: HttpClient , private router:Router) {}

  brcode!: string;
  quantita!: number;
  confermaAggiuntaQuantita: boolean = false;

  AggiungiQuantita(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const url = 'http://localhost:8082/prodotti/aggingiquantita';

    let params = new HttpParams();
    params = params.append('brcode', this.brcode);
    params = params.append('quantita', this.quantita.toString());

    this.http.put(url, null, { params: params }).subscribe(
      (response) => {
        console.log('Quantità aggiunta con successo:', response);
        this.confermaAggiuntaQuantita = true;
        this.router.navigate(["/confermaprodotto"]);

      },
      (error) => {
        console.error('Errore durante l\'aggiunta della quantità:', error);
        this.router.navigate(["/errore"]);

      }
    );

    // Resetta il form
    form.resetForm();
  }
}
